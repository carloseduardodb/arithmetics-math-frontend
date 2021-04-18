import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { socket } from "../../service/socket";

interface Room {
  id: number;
  name: string;
  number_players: number;
  room_owner: string;
  room_client: string;
}

const RoomAll: React.FC<any> = ({ rooms = "" }) => {
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (rooms !== "" || rooms.legth === 0) {
      // eslint-disable-next-line
      rooms = JSON.parse(rooms);
      setAllRooms(rooms);
    }
  }, [rooms]);

  function enterRoom(id: number) {
    socket.emit("enterRoom", { id: id });
    history.push("game");
  }

  return (
    <div>
      <h2 className="pt-7 pb-4 text-gray-800 font-bold text-2xl">
        Salas ativas:
      </h2>
      <ul className="grid grid-flow-row grid-cols-2 gap-4 w-full">
        {allRooms.map((room) => {
          return (
            room.room_client === "" && (
              <li key={room.id} className="w-full">
                <button
                  className="inline-block w-full"
                  onClick={() => enterRoom(room.id)}
                >
                  <div
                    className="
            hover:bg-gradient-to-br hover:from-purple-600 hover:via-blue-700 transition-all hover:to-purple-900
            bg-gradient-to-tl from-purple-600 via-purple-700 to-purple-900 
            p-5 rounded-md text-white font-semibold w-full
            shadow-1xl
            "
                  >
                    {room.name}
                  </div>
                </button>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default RoomAll;
