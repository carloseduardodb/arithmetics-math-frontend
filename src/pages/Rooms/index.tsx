import React, { useState, useEffect } from "react";
import CreateRooms from "../../components/CreateRooms";
import RoomAll from "../../components/RoomsAll";
import { socket } from "../../service/socket";

const Rooms = () => {
  const [allRooms, setAllRooms] = useState("");

  useEffect(() => {
    socket.emit("getRooms", () => {});
    socket.on("rooms", (data) => {
      setAllRooms(JSON.stringify(data));
    });
  }, []);

  return (
    <div
      className="
      w-full h-screen 
      bg-gradient-to-br from-pink-500 via-indigo-500 to-indigo-800
      flex flex-row justify-center items-center
      animate-gradient-xy
    "
    >
      <div className="w-full max-w-4xl bg-white m-5 p-10 sm:p-5 rounded-md">
        <CreateRooms />
        <RoomAll rooms={allRooms} />
      </div>
    </div>
  );
};

export default Rooms;
