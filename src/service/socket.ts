import io from "socket.io-client";

//export const socket = io("http://localhost:3001");
export const socket = io(
  "https://server-arithmetics-math.herokuapp.com/:53445"
);
