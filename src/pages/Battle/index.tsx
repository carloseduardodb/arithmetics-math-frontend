import React, { useEffect, useState } from "react";
import { socket } from "../../service/socket";

interface dataValues {
  room_id: number;
  operator: string;
  first_value: number;
  last_value: number;
  remaining_matches: number;
  point_client: number;
  point_owner: number;
}

const Battle = () => {
  const [dataGame, setDataGame] = useState<dataValues>();
  const [globalGameValues, setGlobalGameValues] = useState<dataValues>();
  const [users, setUsers] = useState<dataValues>();

  useEffect(() => {
    try {
      socket.on("game", (data) => {
        const game = {
          room_id: data.room_id,
          operator: data.operator,
          first_value: data.first_value,
          last_value: data.last_value,
          remaining_matches: data.remaining_matches,
          point_client: data.point_client,
          point_owner: data.point_owner,
        };
        const {
          room_id,
          operator,
          first_value,
          last_value,
          remaining_matches,
          point_client,
          point_owner,
        } = game;

        setDataGame({
          room_id: room_id,
          operator: operator,
          first_value: first_value,
          last_value: last_value,
          remaining_matches: remaining_matches,
          point_client: point_client,
          point_owner: point_owner,
        });

        console.log(room_id);
        //aqui ta recebendo
        //setAllRooms(JSON.stringify(data));
        console.log(game);
      });
    } catch (error) {
      console.log("error");
    }
  }, []);

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
          <li className="flex flex-row justify-between py-2 px-4 bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800 rounded-md text-white my-3 shadow-2xl">
            <p>Carlos Eduardo</p>
            <p>50</p>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex flex-col justify-around">
        <div className="mt-12 flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold text-justify w-full max-w-sm">
            Pergunta:
          </p>
          <div className="w-full max-w-sm bg-white m-5 p-5 rounded-md">
            <p className="text-center text-4xl">5 + 8</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center">
          <div className="w-full flex flex-row max-w-4xl bg-white m-5 p-8 rounded-md">
            <input
              value={""}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {}}
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
              onClick={() => {}}
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
