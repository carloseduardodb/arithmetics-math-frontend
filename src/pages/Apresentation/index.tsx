import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { socket } from "../../service/socket";

const Apresentation = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  function handleSubmit() {
    socket.emit("sendUser", { name: name });
  }

  socket.onAny((eventName, ...args) => {
    if (eventName === "user_status") {
      history.push("rooms");
      socket.disconnect();
    }
  });

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
          Bem Vindo!
        </h2>
        <input
          type="text"
          value={name}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="p-4 rounded-md border-2 focus:border-indigo-800 outline-none"
          placeholder="Seu nome"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-800 hover:bg-black transition-all text-white font-bold py-3 px-4 rounded shadow-lg text-center"
        >
          ENTRAR
        </button>
      </div>
    </div>
  );
};

export default Apresentation;
