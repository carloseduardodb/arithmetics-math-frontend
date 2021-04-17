import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { socket } from "../../service/socket";

const Check = () => {
  const history = useHistory();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    try {
      socket.on("room", (data) => {
        const room = JSON.parse(JSON.stringify(data));
        setRoomName(room.name);
        if (room.room_client !== "") {
          history.push("game");
        }
      });
    } catch (error) {
      console.log("error");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className="
      w-full h-screen 
      bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
      flex flex-col justify-center items-center
      animate-gradient-xy
    "
    >
      <h3 className="my-16 text-white text-2xl">
        Assim que seu amigo entrar a gente começa ....
      </h3>
      <h1 className="text-white font-bold text-2xl">
        Nome da sala: {roomName}
      </h1>
      <div className="w-full max-w-4xl bg-white m-5 p-10 rounded-md text-center">
        <p>
          Não há como jogar sozinho ainda, chame um amigo e peça para ele entrar
          na sala!
        </p>
      </div>
    </div>
  );
};

export default Check;
