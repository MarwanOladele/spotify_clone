import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <div className="mt-10">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 ${
                active === item.name && "text-cyan-400"
              }`}
              onClick={() => setActive(item.name)}
            >
              <item.icon className="w-6 h-6 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="absolute md:hidden block top-10 right-6 z-10" onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <RiCloseLine size={32} className="text-white" />
        ) : (
          <HiOutlineMenu size={32} className="text-white" />
        )}
      </div>


      <div className={`absolute top-8 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${toggle ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <div className="mt-10">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 ${
                active === item.name && "text-cyan-400"
              }`}
              onClick={() => {
                setActive(item.name)
                setToggle(!toggle)
              }}
            >
              <item.icon className="w-6 h-6 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
