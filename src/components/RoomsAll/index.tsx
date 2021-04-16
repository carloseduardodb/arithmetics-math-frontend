import React from "react";
import { Link } from "react-router-dom";

const RoomAll = () => {
  return (
    <div>
      <h2 className="pt-7 pb-4 text-gray-800 font-bold text-2xl">
        Salas ativas:
      </h2>
      <ul className="grid grid-flow-row grid-cols-2 gap-4 w-full">
        <li className="w-full">
          <Link className="inline-block w-full" to="check">
            <button
              className="
                hover:bg-gradient-to-br hover:from-purple-600 hover:via-blue-700 transition-all hover:to-purple-900
                bg-gradient-to-tl from-purple-600 via-purple-700 to-purple-900 
                p-5 rounded-md text-white font-semibold w-full
                shadow-1xl
                "
            >
              Duelo Épico
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RoomAll;
