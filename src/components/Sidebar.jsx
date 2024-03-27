import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAward } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaBars, FaCrown } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
const Sidebar = ({ children }) => {
  const [isopen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isopen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AiFillHome />,
    },
    {
      path: "/About",
      name: "About",
      icon: <FaAward />,
    },
    {
      path: "/Prices",
      name: "Prices",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      path: "/Trade",
      name: "Trade",
      icon: <FaCrown />,
    },
    {
      path: "/Wallet",
      name: "Wallet",
      icon: <SlWallet />,
    },
  ];

  return (
    <div>
      <div className="container">
        <div
          style={{ width: isopen ? "18.75rem" : "4rem" }}
          className="sidebar"
        >
          <div className="top_section">
            <h1 style={{ display: isopen ? "block" : "none" }} className="logo">
              <Link style={{color:"white"}} to={"/"} >
                 Logo
              </Link>
            </h1>
            <div
              style={{ marginLeft: isopen ? "3rem" : "0rem" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((el, i) => {
            return (
              <NavLink
                to={el.path}
                key={i}
                className={"link"}
                activeclassName="active"
              >
                <div className="icon">{el.icon}</div>
                <div
                  style={{ display: isopen ? "block" : "none" }}
                  className="link_text"
                >
                  {el.name}
                </div>
              </NavLink>
            );
          })}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
