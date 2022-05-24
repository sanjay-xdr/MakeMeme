import React from 'react'
import { NavLink } from 'react-router-dom';

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    color: isActive ? "red" : ""
  });

export default function Navbar() {
  return (
    <div>
  <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/memes">
          Memes
        </NavLink>
        ||
        {/* <NavLink style={getActiveStyle} to="/about">
          About
        </NavLink>
        ||  
         <NavLink style={getActiveStyle} to="/contribute">
          contribute
        </NavLink> */}
        ||
      
      </nav>
    </div>
  )
}
