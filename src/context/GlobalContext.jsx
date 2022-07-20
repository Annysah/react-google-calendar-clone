import { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  sidebarCalendarMonth: 0,
  setSidebarCalendarMonth: (index) => {},
  selectDay: null,
  setSelectDay: (day) => {},
  showModal: false,
  setShowModal: () => {}
});

export default GlobalContext;
