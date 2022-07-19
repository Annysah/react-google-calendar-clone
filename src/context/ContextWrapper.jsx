import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [sidebarCalendarMonth, setSidebarCalendarMonth] = useState(null);
  const [selectDay, setSelectDay] = useState(null);

  useEffect(() => {
    if (sidebarCalendarMonth !== null) {
      setMonthIndex(sidebarCalendarMonth)
    }
  }, [sidebarCalendarMonth])

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        sidebarCalendarMonth,
        setSidebarCalendarMonth,
        selectDay,
        setSelectDay
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
