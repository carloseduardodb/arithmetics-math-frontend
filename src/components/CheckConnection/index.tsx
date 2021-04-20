import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckConnection = () => {
  window.addEventListener("offline", () => {
    setTimeout(() => {
      toast.warning("Você está sem internet!");
    }, 1000);
  });
  window.addEventListener("online", () => {
    setTimeout(() => {
      toast.success("Conexão reestabelecida!");
    }, 1000);
  });
  return <ToastContainer />;
};

export default CheckConnection;
