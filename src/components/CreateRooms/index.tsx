import React, { useState } from "react";
import { useHistory } from "react-router";
import { socket } from "../../service/socket";

const CreateRooms = () => {
  const [room, setRoom] = useState("");
  const history = useHistory();

  function handleCreateRoom() {
    socket.emit("sendRoom", { name: room });
    history.push("check");
  }

  return (
    <>
      <h2 className="pb-3 text-gray-800 font-bold text-2xl">
        Crie uma nova sala:
      </h2>
      <div className="flex xs:flex-col md:flex-row justify-between">
        <input
          type="text"
          value={room}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRoom(e.target.value)
          }
          className="border-b-2 w-full mr-10 xs:mb-3 p-2 outline-none focus:border-purple-300"
          placeholder="Nome da sua sala"
        />
        <button
          onClick={() => {
            handleCreateRoom();
          }}
          className="bg-gray-800 hover:bg-black transition-all text-white font-bold py-3 px-4 rounded shadow-lg text-center"
        >
          CRIAR
        </button>
      </div>
    </>
  );
};

export default CreateRooms;
