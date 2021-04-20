import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { socket } from "../../service/socket";

interface Props {
  from: string | any;
}

const Check = () => {
  const history = useHistory();
  const { state } = useLocation<Props>();
  try {
    state.from !== "create-room" && history.push("duel");
  } catch {
    history.push("duel");
  }
  useEffect(() => {
    try {
      socket.on("room", (data) => {
        const room = JSON.parse(JSON.stringify(data));
        if (room.room_client !== "") {
          history.push("game", { from: "check" });
        }
      });
    } catch (error) {
      console.log("error");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className="
      xs:p-10
      w-full h-screen 
      bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
      flex flex-col justify-center items-center
      animate-gradient-xy
    "
    >
      <h3 className="my-16 text-white xs:text-lg text-2xl">
        Assim que seu amigo entrar a gente começa ....
      </h3>
      <div className="w-full max-w-4xl bg-white m-5 xs:p-5 p-10 rounded-md text-center">
        <p>
          Não há como jogar sozinho ainda, chame um amigo e peça para ele entrar
          na sala!
        </p>
      </div>
    </div>
  );
};

export default Check;
