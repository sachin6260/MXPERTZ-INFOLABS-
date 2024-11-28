import React from "react";
import "./Navbar.css";  
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
             <div className="logo">BrainyLingo</div>
            
             <div className="menu">
             <NavLink to="/" activeClassName="active-link">Home</NavLink>
             <a href="#">LeaderBoard</a>
                <a href="#">Daily Quiz</a> 
                <a href="#">Genre</a>

                
            </div>
            
             <button className="signout">Sign Out</button>
        </div>
    );
};

export default Navbar;
