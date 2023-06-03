import React from "react";
import './Navbar.css'
import avatar from '../../assets/avatar.png'

const Navbar = () => {
    return <>
        <div id="navbarContainer">
            <span id="">
                <span id="creatViseNavbar">Creatvise</span>
                <span id="">ZONE</span>
            </span>
            <span id="links">
                <a id="linkNav" href="/home">File</a>
                <a id="linkNav" href="/home">Edit</a>
                <a id="linkNav" href="/home">Image</a>
                <a id="linkNav" href="/home">Layer</a>
                <a id="linkNav" href="/home">Select</a>
                <a id="linkNav" href="/home">Filter</a>
                <a id="linkNav" href="/home">View</a>
                <a id="linkNav" href="/home">Window</a>
            </span>
            <span id="acc">
                <span className="toggle-button">
                    <span className="slider"></span>
                </span>
                <span><img id="accImg" src={avatar} alt="" /></span>
            </span>
        </div>

    </>;
};

export default Navbar;
