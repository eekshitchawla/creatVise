import React from "react";
import './Access.css'
import Popup from 'reactjs-popup';
import PopupPage from "../PopupPage/PopupPage";


const Access = () => {
    return <>
        <div id="accessContainer">
            <Popup trigger={
                <div id="popupContainer">
                    <PopupPage />
                </div>
            }>{
                    close => (
                        <div id="popupContainer">
                            <PopupPage />
                        </div>
                    )
                }
            </Popup>
        </div>
    </>;
};

export default Access;
