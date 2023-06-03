import React from "react";
import './PopupPage.css'
import PopNavbar from "./PopNavbar/PopNavbar";
import Details from "./Details/Details";

const PopupPage = () => {

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
    },
    {
      shape: `<i class="fi fi-ts-rectangle-vertical"></i>`,
      title: 'Instagram Square',
      dimension: '1080 X 1080 pixels'
    },
  ]

  const cards = contents.map((content, index) => (
    <div key={index} className="cardNavbar">
      <div className="shape" dangerouslySetInnerHTML={{ __html: content.shape }} />
      <div className="title">{content.title}</div>
      <div className="dimension">{content.dimension}</div>
    </div>
  ));

  return <>
    <div id="popupPageContainer">
      <div id="catalogue">
        <PopNavbar />
        <div id="pageContent">
          {cards}
        </div>
      </div>
      <div id="details">
        <Details />
      </div>
    </div>
  </>;
};

export default PopupPage;
