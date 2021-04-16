import React from "react";

const Status = () => {
  return (
    <div className="flex flex-row justify-center w-full relative">
      <div className="flex flex-col items-center">
        <div className="w-max bg-white rounded-lg p-5 mt-6 mb-4">
          <p className="font-bold text-lg">Pontuação</p>
        </div>
        <div className="w-max bg-white rounded-full py-3 px-8">
          <p className="text-2xl">
            <span>05</span> | <span>06</span>
          </p>
        </div>
      </div>

      <div className="absolute right-0 mx-5 flex flex-col items-center">
        <div className="w-full bg-white p-5 mt-6 mb-4 rounded-md">
          <p className="font-bold text-lg">Partidas Restantes</p>
        </div>
        <div className="bg-white py-3 px-8 w-max text-2xl text-center rounded-full">
          <p>09</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
