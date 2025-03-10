import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Controllerr";
import logo from "./assets/images/company-logo.svg";
import arrowLogo from "./assets/images/arrow-right.svg";

const Navbar = () => {
  const { openEvents, openAbout, openTicket } = useGlobalContext();
  const [focusedButton, setFocusedButton] = useState("events"); 

  useEffect(() => {
    setFocusedButton("events");
  }, []);

  const handleFocus = (buttonName) => {
    setFocusedButton(buttonName);
  };

  const handleBlur = () => {
    setFocusedButton(null);
  };

  const handleTicketClick = () => {
    const storedImage = sessionStorage.getItem("storedImage");
    const userdata = sessionStorage.getItem("userdata");
    
    if (storedImage && userdata) {
      openTicket();
    }else {
      alert("Missing required data. Please ensure to fill forms first.");
    }
  };

  return (
    <div>
      <div className="border-[#197686] border-1 adjust w-[75rem] flex justify-between items-center mx-auto mt-4">
        <div onClick={openEvents}>
          <img src={logo} alt="company-logo" />
        </div>
        <div className="flex justify-between items-center spacer nav-btns">
          <button
            onClick={openEvents}
            onFocus={() => handleFocus("events")}
            onBlur={handleBlur}
            className={`border-0 bg-transparent text-[18px] ${
              focusedButton === "events" ? "text-[#fff]" : "text-[#B3B3B3]"
            }`}
          >
            Events
          </button>
          <button
            onClick={handleTicketClick}
            onFocus={() => handleFocus("tickets")}
            onBlur={handleBlur}
            className={`border-0 bg-transparent text-[18px] ${
              focusedButton === "tickets" ? "text-[#fff]" : "text-[#B3B3B3]"
            }`}
          >
            My Tickets
          </button>
          <button
            onClick={openAbout}
            onFocus={() => handleFocus("about")}
            onBlur={handleBlur}
            className={`border-0 bg-transparent text-[18px] ${
              focusedButton === "about" ? "text-[#fff]" : "text-[#B3B3B3]"
            }`}
          >
            About Projects
          </button>
        </div>
        <div className="flex justify-between items-center spacer-1 bg-red-500 rounded" onClick={handleTicketClick}>
          <button className="text-[#0A0C11] border-0 bg-transparent text-[18px]">
            My Tickets
          </button>
          <img src={arrowLogo} alt="tickets-right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
