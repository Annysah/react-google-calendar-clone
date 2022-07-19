import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const onHandlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const onHandleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const onHandleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="flex items-center px-4 py-2">
      <img src={logo} alt="A calendar icon" className="mr-2 h-12 w-12" />
      <h1 className="mr-10 text-2xl text-gray-600 font-900">Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5" onClick={onHandleReset}>
        Today
      </button>
      <button onClick={onHandlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600">
          chevron_left
        </span>
      </button>
      <button onClick={onHandleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-3 text-xl text-gray-600 font-semibold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
