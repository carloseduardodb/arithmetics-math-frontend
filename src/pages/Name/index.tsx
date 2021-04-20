import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { socket } from "../../service/socket";

const Name = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  function handleSubmit() {
    socket.emit("createUser", { name: name });
    socket.on("battle-" + socket.id, (data) => {
      if (data.status) {
        history.push("battle");
        socket.off();
      }
    });
  }

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
          Digite seu nome para entra na batalha!
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
          onClick={() => {
            handleSubmit();
          }}
          className="bg-gray-800 hover:bg-black transition-all text-white font-bold py-3 px-4 rounded shadow-lg text-center"
        >
          ENTRAR
        </button>
      </div>
    </div>
  );
};

export default Name;
