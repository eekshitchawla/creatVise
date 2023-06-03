import React from "react";
import Navbar from "../Navbar/Navbar";
import './HomeScreen.css'
import cat from '../../assets/cat.png'
import Popup from 'reactjs-popup';
import PopupPage from "../PopupPage/PopupPage";

const HomeScreen = () => {
    return <>
        <Navbar />
        <div id="homePageBody">
            <div id="leftContainer">
                <div id="tabs">
                    <div id="homeTab"><i className="fi fi-rr-home"></i> Home</div>
                    <div id="myFilesTab"><i className="fi fi-rr-folder-open"></i> My Files</div>
                    <div id="deletedFilesTab"><i className="fi fi-rr-trash  "></i> Deleted Files</div>
                    <div id="starredTab"> <i className="fi fi-rr-star"></i> Starred</div>
                </div>
                <div id="storage">
                    <div id="icon"><i class="fi fi-rr-cloud"></i> Storage</div>
                    <hr id="storagehr" />
                    <span id="storageTxt">
                        0MB of 500MB used
                    </span>
                </div>
            </div>
            <div id="middleContainer">
                <div id="fileCreating">
                    <div className="fileCreatingClass">
                        <i className="fi fi-rr-plus"></i>
                        <div id="popupHandle">

                            <Popup trigger={
                                <div id="partition">
                                    <div id="headingFileCreate">New File</div>
                                    <div className="subTextFile">A perfect canvas for your  ideas  </div>
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
                    </div>
                    <div className="fileCreatingClass" id="importFileContainer">
                        <i className="fi fi-rr-plus"></i>
                        <div id="partition">
                            <div id="headingFileCreate">Import File</div>
                            <div className="subTextFile">Import files from other Canvas </div>
                        </div>
                    </div>
                </div>
                <div id="recentFilesContainer">
                    <div id="recentFilesContext">
                        <div id="recentFilesHeading">Recent Files</div>
                        <div id="recentFilesText">A new file id the perfect canvas for your ideas. So why wait? Create a new file now and start expressing youtrself in a whole new way</div>
                    </div>
                    <div id="buttons">
                        <div id="selectCalender">
                            <i className="fi fi-rr-calendar"></i><div id="selectText">Select</div>
                        </div>
                        <div id="dropdowns">
                            <div id="yearsDropdrown">
                                <select name="Years" id="yearSelect">
                                    <option value="All years">All Years</option>
                                    <option value="3 years">Last 3 Years</option>
                                    <option value="1 year">Last 1 Year</option>
                                </select>
                            </div>
                            <div id="monthsDropdown">
                                <select name="Months" id="monthSelect">
                                    <option value="All months">All Months</option>
                                    <option value="Last 12 months">Last 12 months</option>
                                    <option value="Last 6 months">Last 6 months</option>
                                    <option value="Last 3 months">Last 3 months</option>
                                </select>
                            </div>
                        </div>
                        <div id="icons">
                            <i className="leftPad fi fi-rr-grid"></i>
                            <i className="leftPad fi fi-rr-menu-burger"></i>
                        </div>
                    </div>
                </div>
                <div id="hrline">
                    <hr id="recenthr" />
                </div>
                <div id="lightOpacityArea">
                    <img src={cat} alt="" />
                    <div id="catText">A new file id the perfect canvas for your ideas. So why wait? Create a new file now and start expressing youtrself in a whole new way</div>
                </div>
            </div>
            <div id="rightContainer">
                <div className="rightContent">
                    <div className="rightHeading">
                        Who has Access
                        <i className="fi fi-rr-plus"></i>
                    </div>
                    <div id="accessContent">Select Files to View</div>
                </div>
                <hr id="accesshr" />
                <div className="rightContent">
                    <div className="rightHeading">
                        Recently Opened by:
                    </div>
                    <div id="accessContent">Select Files to View</div>
                </div>
                <hr id="accesshr" />
            </div>
        </div>
    </>;
};

export default HomeScreen;
