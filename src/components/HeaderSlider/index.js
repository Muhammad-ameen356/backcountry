import React, { useState } from "react";
import style from "./style.module.scss";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideObj = [
    { text: "3 days only! Extra 20% off Select" },
    { text: "3 days only! Extra 2110% off Select" },
    { text: "3 days only! Extra 2022% off Select" },
  ];

  const handleClick = () => {
    if ((slideObj.length -1) === currentSlide) {
      setCurrentSlide(0);
      console.log("upper wala", currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
      console.log("necha wala", currentSlide);
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        <div>
          <AiOutlineLeft
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => handleClick()}
          />
        </div>
        <div className={style.text}>{slideObj[currentSlide]?.text}</div>
        <div>
          <AiOutlineRight
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
