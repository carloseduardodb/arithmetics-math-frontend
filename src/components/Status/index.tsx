import React from "react";

const Status: React.FC<any> = ({
  remainingMatches,
  myPontuation,
  adversaryPontuation,
}) => {
  return (
    <div className="flex flex-row xl:justify-center w-full relative xs:px-5 xs:justify-between">
      <div className="flex flex-col items-center">
        <div className="w-max bg-white rounded-lg xl:p-5 xs:p-2 mt-6 mb-4">
          <p className="font-bold text-lg">Pontuação</p>
        </div>
        <div className="w-max bg-white rounded-full xs:py-2 xs:px-5 xl:py-3 xl:px-8">
          <p className="text-2xl">
            <span>{myPontuation && myPontuation}</span> |{" "}
            <span>{adversaryPontuation && adversaryPontuation}</span>
          </p>
        </div>
      </div>

      <div className="xl:absolute xs:relative right-0 xl:mx-5 xs:mx-0 flex flex-col items-center">
        <div className="w-full bg-white xl:p-5 xs:p-2 mt-6 mb-4 rounded-md">
          <p className="font-bold text-lg">Partidas Restantes</p>
        </div>
        <div className="bg-white xl:py-3 xl:px-8 xs:py-2 xs:px-5 w-max text-2xl text-center rounded-full">
          <p>{remainingMatches && remainingMatches}</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
