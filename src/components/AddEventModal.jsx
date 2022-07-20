import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const AddEventModal = () => {
  const [title, setTitle] = useState("");
  const { setShowModal, selectDay } = useContext(GlobalContext);
  return (
    <div className="h-screen w-full flex justify-center items-center fixed left-0 right-0">
      <form className="bg-white shadow-2xl w-1/3 rounded-b-lg">
        <header className="bg-gray-200 rounded-t-lg px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            drag_handle
          </span>
          <button onClick={() => setShowModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="py-3 px-4">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Add title"
              onChange={(e) => setTitle(e.target.value)}
              className="pt-2 pb-2 border-0 border-b-2 border-gray-200 text-gray-600 text-xl font-semibold w-full focus:outline-none focus:ring-0 focus:border-blue-500"
              required
            />
             <span className="material-icons-outlined text-gray-400">schedule</span>
             <p>{selectDay.format("dddd, DD MMMM")}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEventModal;
