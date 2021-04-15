import React from "react";

const SearchRooms = () => {
  return (
    <form>
      <h2 className="pt-7 pb-4 text-gray-800 font-bold text-2xl">
        Pesquisar salas:
      </h2>
      <input
        type="text"
        className="border-b-2 w-full mr-10 p-2 outline-none focus:border-purple-300"
        placeholder="Nome da sala"
      />
    </form>
  );
};

export default SearchRooms;
