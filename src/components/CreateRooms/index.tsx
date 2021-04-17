import React, { useState } from "react";
import { socket } from "../../service/socket";

const CreateRooms = () => {
  const [room, setRoom] = useState("");

  function handleCreateRoom() {
    socket.emit("sendRoom", { name: room });
  }

  return (
    <div className="flex flex-row justify-between">
      <input
        type="text"
        value={room}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRoom(e.target.value)
        }
        className="border-b-2 w-full mr-10 p-2 outline-none focus:border-purple-300"
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
  );
};

export default CreateRooms;
