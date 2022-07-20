import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

const SidebarCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const { monthIndex, setSidebarCalendarMonth, selectDay, setSelectDay } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  const onHandlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const onHandleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const onHandleReset = () => {
    setCurrentMonthIndex(dayjs().month());
  };

  const getCurrentSmallCalDay = (day) => {
    const selectedDay = selectDay && selectDay.format("DD-MM-YY");
    if (dayjs().format("DD-MM-YY") === day.format("DD-MM-YY")) {
      return "bg-blue-500 rounded-full text-white";
    } else if (day.format("DD-MM-YY") === selectedDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  };

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="font-bold text-gray-600">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, index) => (
          <span key={index} className="text-xs py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, indx) => (
              <button
                key={indx}
                className={`py-1 w-full ${getCurrentSmallCalDay(day)}`}
                onClick={() => {
                  setSidebarCalendarMonth(currentMonthIndex);
                  setSelectDay(day);
                }}
              >
                <span className="text-xs">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarCalendar;
