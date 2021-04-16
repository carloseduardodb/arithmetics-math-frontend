import React from "react";
import Status from "../../components/Status";

const Game = () => {
  return (
    <div
      className="
      w-full h-screen 
      bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
      flex flex-col items-center
      animate-gradient-xy
    "
    >
      <Status />

      <div className="w-full h-full flex flex-col justify-around">
        <div className="mt-12 flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold text-justify w-full max-w-sm">
            Pergunta:
          </p>
          <div className="w-full max-w-sm bg-white m-5 p-5 rounded-md">
            <p className="text-center text-4xl">5 + 2</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center">
          <form className="w-full flex flex-row max-w-4xl bg-white m-5 p-8 rounded-md">
            <input
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
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Game;
