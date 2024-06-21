import React from 'react';
import { RiGroupLine } from "react-icons/ri";
// import ./assets/Logo.svg as component
import Logo from "../assets/Logo.svg";

export interface SidebarProps {
  selected?: boolean;
  onClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({selected, onClick}) => {
  return (
    <div className="w-20 h-screen bg-white shadow-2xl flex flex-col gap-4 items-center pt-8">
      <img src={Logo} alt="Logo" className="w-6 h-6"/>
      <div className="w-1/2 border-2 border-gray-100 my-4 rounded-full"></div> 
      <div 
      onClick={onClick}
      className={`rounded-xl drop-shadow-lg border-gray-100 border-2 hover:scale-110 min-w-12 min-h-12 flex 
        justify-center items-center transition-all hover:cursor-pointer ${selected ? "bg-primary" : "bg-white"}`}>
        <RiGroupLine className={` w-6 h-6 ${selected ? "fill-white" : "fill-primary"}`}/>
      </div>
    </div>
  );
};

export default Sidebar;
