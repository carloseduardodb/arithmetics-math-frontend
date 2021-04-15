import React from "react";

const CreateRooms = () => {
  return (
    <form>
      <div className="flex flex-row justify-between">
        <input
          type="text"
          className="border-b-2 w-full mr-10 p-2 outline-none focus:border-purple-300"
          placeholder="Nome da sua sala"
        />
        <button className="bg-gray-800 hover:bg-black transition-all text-white font-bold py-3 px-4 rounded shadow-lg text-center">
          CRIAR
        </button>
      </div>
    </form>
  );
};

export default CreateRooms;
