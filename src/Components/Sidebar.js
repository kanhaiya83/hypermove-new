import { Link, NavLink, Route, Routes } from "react-router-dom";
const SideNavBar = ({ isOpen,links }) => {
   
    return (
      <div className={`pte-sidebar ${isOpen && "open"}`}>
        <div className="btns-wrapper">
          {links.map((l) => {
            const { text, href } = l;
            return (
              <NavLink
                end={true}
                to={href}
                className={({ isActive }) => {
                  return isActive && "active";
                }}
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  };


export default SideNavBar