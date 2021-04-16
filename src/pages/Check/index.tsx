import React from "react";

const Check = () => {
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
      <h1 className="text-white font-bold text-2xl">Nome da sala: </h1>
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
