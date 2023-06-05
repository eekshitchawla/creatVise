import React, { useState } from "react";
import Details from "./Details/Details";
import './PopupPage.css'
import PopNavbar from "./PopNavbar/PopNavbar";

const PopupPage = ({ close }) => {

  const [menuClicked, setMenuClicked] = useState('social');
  console.log("close" + close)


  const contents = [
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    }
  ]
  const contentsP = [
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'A1',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'A2',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    }
  ]

  const cards = (menuClicked === 'print' ? contentsP : contents).map((content, index) => (
    <div key={index} className="cardNavbar">
      <div className="shape" dangerouslySetInnerHTML={{ __html: content.shape }} />
      <div className="title">{content.title}</div>
      <div className="dimension">{content.dimension}</div>
    </div>
  ));

  return <>
    <div id="popupPageContainer">
      <div id="catalogue">
        <PopNavbar setMenuClicked={
          setMenuClicked
        } />
        <div id="pageContent">
          {menuClicked === 'social' && cards}
          {menuClicked === 'print' && cards}
        </div>
      </div>
      <div id="details">
        <Details />
      </div>
      <button id="closeBtnPopup" onClick={close}>Close</button>  {/* css */}
    </div>
  </>;
};

export default PopupPage;