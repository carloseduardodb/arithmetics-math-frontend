import React from "react";
import { FaBattleNet } from "react-icons/fa";
import { GiPlainDagger } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div
      className="
        w-full h-screen 
        bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
        flex flex-row justify-center items-center
        animate-gradient-xy
        "
    >
      <div className="flex flex-col space-y-3 md:w-4/12 sm:w-auto">
        <h2 className="lg:text-5xl md:text-3xl text-center font-bold text-white my-16">
          Escolha um modo:
        </h2>
        <button
          onClick={() => {
            history.push("/battle");
          }}
          className="bg-indigo-900 flex flex-row justify-between 
        items-center hover:bg-black transition-all text-white font-bold 
        py-3 px-10 rounded shadow-lg text-center
        "
        >
          <p className="text-2xl">BATALHA</p> <FaBattleNet size={50} />
        </button>
        <button
          onClick={() => {
            history.push("/duel");
          }}
          className="bg-pink-800 flex flex-row justify-between 
        items-center hover:bg-black transition-all text-white font-bold 
        py-3 px-10 rounded shadow-lg text-center"
        >
          <p className="text-2xl">DUELO</p> <GiPlainDagger size={50} />
        </button>
      </div>
    </div>
  );
};

export default Home;
