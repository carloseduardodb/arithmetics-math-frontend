import React from "react";

const WinOrLooser = () => {
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
        <p className="text-gray-800 font-bold text-2xl my-10">
          Parabéns Você Ganhou <br />
          com 8 pontos!
        </p>
        <button
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
