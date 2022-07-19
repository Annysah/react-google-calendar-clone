import React from "react";
import dayjs from "dayjs";

const Day = ({ day, rowIndex }) => {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && <p className="text-xs font-semibold text-gray-500 mt-1">{day.format("ddd").toUpperCase()}</p>}
        <p className={`text-xs p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("D")}
        </p>
      </header>
    </div>
  );
};

export default Day;
