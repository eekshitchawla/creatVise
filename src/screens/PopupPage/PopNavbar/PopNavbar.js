import React from "react";
import './PopNavbar.css'

const PopNavbar = ({ setMenuClicked }) => {
    return <>
        <div id="popNavbarContainer">
            <div id="navbarTile" onClick={
                () => {
                    setMenuClicked('print')
                }
            }>Print</div>
            <div id="navbarTile" onClick={
                () => {
                    setMenuClicked('social')
                }
            }>Social Media</div>
            <div id="navbarTile" > Photo</div>
            <div id="navbarTile" > Web</div>
            <div id="navbarTile" > Mobile</div>
            <div id="navbarTile" > Art&Illustration</div>
        </div>
    </>;
};

export default PopNavbar;
