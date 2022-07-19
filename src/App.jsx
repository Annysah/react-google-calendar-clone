import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./util";
import GlobalContext from "./context/GlobalContext";

const App = () => {
  //console.table(getMonth(3));
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default App;
