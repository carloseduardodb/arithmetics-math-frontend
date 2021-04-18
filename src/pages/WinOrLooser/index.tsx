import React from "react";
import { useHistory } from "react-router-dom";

const WinOrLooser = () => {
  const history = useHistory();
  const statusGame = window.location.href.split("/");

  function handleSubmit() {
    window.location.href = "/";
  }

  return (
    <div
      className="
    w-full h-screen 
    bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
    flex flex-col items-center
    animate-gradient-xy justify-center
  "
    >
      <div className="text-center bg-white p-5 rounded-lg shadow-2xl">
        {statusGame[4] === "win" && (
          <p className="text-gray-800 font-bold text-2xl my-10">
            Parabéns Você Ganhou!
          </p>
        )}
        {statusGame[4] === "loser" && (
          <p className="text-gray-800 font-bold text-2xl my-10">
            Continue tentando <br />a prática leva a perfeição!
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="
            py-3
            bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800 
          hover:from-indigo-800 hover:via-ping-500 px-8 rounded-lg 
          text-white
          "
        >
          Ir para as salas
        </button>
      </div>
    </div>
  );
};

export default WinOrLooser;
