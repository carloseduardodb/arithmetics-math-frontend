import React, { useEffect, useState } from "react";
import { socket } from "../../service/socket";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

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
  const [pontuation, setPontuation] = useState(false);
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
      setGlobalRankingValues(data.reverse());
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
      setGlobalRankingValues(data.reverse());
    });
  }

  return (
    <div
      className="
      w-full md:h-screen xs:min-h-screen
      bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
      flex flex-col items-center
      animate-gradient-xy relative
    "
    >
      <div className="flex flex-col justify-center items-center bg-white sm:relative md:absolute right-0 p-5 w-full max-w-sm rounded-md overflow-y-scroll m-2">
        <button
          onClick={() => {
            setPontuation(!pontuation);
          }}
          className={
            "bg-gray-800 flex flex-row-reverse " +
            (pontuation &&
              "xs:mt-14 md:mt-0 xs:opacity-50 md:relative xs:absolute") +
            " hover:bg-black transition-all text-white font-bold py-3 px-4 rounded shadow-lg text-center"
          }
        >
          {pontuation ? (
            <GoArrowUp className="ml-2" size={25} />
          ) : (
            <GoArrowDown className="ml-2" size={25} />
          )}
          <p> {pontuation ? "Ocultar Pontuações" : "Exibir Pontuações"} </p>
        </button>
        {pontuation && (
          <p className="text-indigo-600 font-bold text-lg mt-3">
            Últimas pontuações
          </p>
        )}
        {pontuation && (
          <ul style={{ maxHeight: "50vh" }} className="w-full">
            {globalRankingValues.map((node, index) => (
              <li
                key={index}
                className="flex flex-row justify-between py-2 px-4 bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800 rounded-md text-white my-3 shadow-2xl"
              >
                <p>{node.name}</p>
                <p>{node.points}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full h-full flex flex-col justify-around">
        <div className="mt-12 flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold text-justify w-full max-w-sm">
            Pergunta:
          </p>
          <p className="text-center text-4xl sticky w-full max-w-sm bg-white m-5 p-5 rounded-md">
            {globalGameValues?.first_value}{" "}
            {operationConvert(globalGameValues?.operator)}{" "}
            {globalGameValues?.last_value}
          </p>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center xs:mx-2">
          <div className="w-full flex flex-row max-w-4xl bg-white rounded-md">
            <input
              value={answer}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAnswer(e.currentTarget.value);
              }}
              className="w-full h-30 border-b-2 p-3 border-purple-600 focus:border-pink-500 outline-none m-3 xs:p-4"
              placeholder="Digite sua resposta aqui"
              type="number"
            />
            <button
              className="
                        bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800 m-3
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
