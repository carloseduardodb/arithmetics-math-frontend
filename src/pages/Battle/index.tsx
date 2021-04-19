import React, { useEffect, useState } from "react";
import { socket } from "../../service/socket";

interface BattleData {
  operator: string;
  first_value: number;
  last_value: number;
}

interface Ranking {
  name: string;
  points: number;
}

const Battle = () => {
  const [globalGameValues, setGlobalGameValues] = useState<BattleData>();
  const [globalRankingValues, setGlobalRankingValues] = useState<Ranking[]>([]);
  const [answer, setAnswer] = useState("");

  function operationConvert(operator: string | any) {
    switch (operator) {
      case "sum":
        return "+";
      case "subtraction":
        return "-";
      default:
        return "erro";
    }
  }
  useEffect(() => {
    socket.emit("getBattle", () => {});
    socket.on("battle", (data) => {
      const battles = {
        operator: data.operator,
        first_value: data.first_value,
        last_value: data.last_value,
      };
      setGlobalGameValues(battles);
    });
  }, []);

  useEffect(() => {
    socket.emit("getRanking", () => {});
    socket.on("ranking", (data) => {
      setGlobalRankingValues(data);
    });
  }, []);

  function handleSendResponse() {
    socket.emit("playBattle", {
      response: answer,
      first_value: globalGameValues?.first_value,
      last_value: globalGameValues?.last_value,
      calcType: globalGameValues?.operator,
    });
    setAnswer("");
    socket.emit("getRanking", () => {});
    socket.on("ranking", (data) => {
      setGlobalRankingValues(data);
    });
  }

  return (
    <div
      className="
      w-full h-screen 
      bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
      flex flex-col items-center
      animate-gradient-xy relative
    "
    >
      <div className="flex flex-col justify-center items-center bg-white absolute right-0 p-5 w-full max-w-sm rounded-md overflow-y-scroll m-2">
        <p className="text-indigo-600 font-bold text-lg">Últimas pontuações</p>
        <ul style={{ maxHeight: "50vh" }} className="w-full">
          {globalRankingValues.map((node) => (
            <li className="flex flex-row justify-between py-2 px-4 bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800 rounded-md text-white my-3 shadow-2xl">
              <p>{node.name}</p>
              <p>{node.points}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full flex flex-col justify-around">
        <div className="mt-12 flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold text-justify w-full max-w-sm">
            Pergunta:
          </p>
          <div className="w-full max-w-sm bg-white m-5 p-5 rounded-md">
            <p className="text-center text-4xl">
              {globalGameValues?.first_value}{" "}
              {operationConvert(globalGameValues?.operator)}{" "}
              {globalGameValues?.last_value}
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center">
          <div className="w-full flex flex-row max-w-4xl bg-white m-5 p-8 rounded-md">
            <input
              value={answer}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAnswer(e.currentTarget.value);
              }}
              className="w-full h-30 border-b-2 p-3 border-purple-600 focus:border-pink-500 outline-none"
              placeholder="Digite sua resposta aqui"
              type="number"
            />
            <button
              className="
                        bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800 
                      hover:from-indigo-800 hover:via-ping-500 px-5 rounded-lg 
                      text-white ml-8
              "
              onClick={() => {
                handleSendResponse();
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
