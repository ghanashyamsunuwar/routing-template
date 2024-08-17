import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SidebarItem({ item }) {
    const nevigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    const handleSubclick = (path) => {
        nevigate(path)
    }
  if (item.childrens) {
    return (
      <div className={open ? "sidebarmain open" : 'sidebarmain'}>
        <span className="" onClick={handleClick}>{item.title}</span>
        <div className="sidebarsub" onClick={handleSubclick}>
          {item.childrens.map((child, index) => (
            // <SidebarItem key={index} item={child} />
            <div key={index} className="sidebar-subitem" onClick={() => handleSubclick(child.path)}>
                {child.title}
              </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebarmain">
        <span>{item.title}</span>
      </div>
    );
  }
}

export default SidebarItem;
