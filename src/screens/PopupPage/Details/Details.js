import React from "react";
import './Details.css'

const Details = () => {
    return <>
        <div id="detailsContainer">
            <label><h2 id="detailsHeading">Details</h2></label>
            <div id="projNameDiv"><input id="projName" type="text" /></div>
            <label id="widthLabel" htmlFor="width">Width</label>
            <div id="widthInputContainer">
                <input id="inputWidth" type="text" />
                <select name="width" id="widthSelect">
                    <option value="pixel">Pixel</option>
                    <option value="pixel">Pixel</option>
                    <option value="pixel">Pixel</option>
                </select>
            </div>
            <div id="heightNorient">
                <div id="heightContainer">
                    <label id="heightHeading">Height</label>
                    <input type="text" id="heightInput" />
                </div>
                <div id="orientContainer">
                    <label id="orientHeading">Orientation</label>
                    <div id="orientIcons">
                        <button id="oreint"><i class="fi fi-rr-arrows-h-copy"></i></button>
                        <button id="oreint"><i class="fi fi-rr-arrows-h"></i></button>
                    </div>
                </div>
            </div>
            <label id="resolution">Resolution</label>
            <div id="widthInputContainer">
                <input id="inputWidth" type="text" />
                <select name="width" id="widthSelect">
                    <option value="pixel">Pixel</option>
                    <option value="pixel">Pixel</option>
                    <option value="pixel">Pixel</option>
                </select>
            </div>
            <label htmlFor="" id="colorMode">Color Mode</label>
            <div id="colorModeInputs">
                <input id="colorName" type="text" />
                <input id="colorBit" type="text" />
            </div>
            <label htmlFor="" id="bgColor">Background Color</label>
            <div id="colorsContainers">
                <input type="text" id="colorName" />
                <div id="color"></div>
            </div>
            <div id="checkboxContainer">
                <input type="checkbox" name="save" id="savingCheckbox" />
                <div id="checkboxTxt">Save as Preset</div>
            </div>
            <div id="btns">
                <button id="oreint">Close</button>
                <button id="oreint">Create</button>
            </div>
        </div>
    </>;
};

export default Details;
