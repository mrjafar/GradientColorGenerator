import React, { useState } from "react";
import { toast } from "react-toastify";


const GradientColor = () => {
  const [btn1, setBtn1] = useState("#23424a");
  const [btn2, setBtn2] = useState("#e3bf1d");
  const [bgColor, setBgColor] = useState(
    "linear-gradient(to right, #23424a, #e3bf1d)"
  );

  const hexValues = () => {
    const myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
      colors += myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
  };

  const handleBtn1 = () => {
    const rgb1 = hexValues();
    setBgColor(`linear-gradient(to right, ${rgb1}, ${btn2})`);
    setBtn1(rgb1);
  };

  const handleBtn2 = () => {
    const rgb2 = hexValues();
    setBgColor(`linear-gradient(to right, ${btn1}, ${rgb2})`);
    setBtn2(rgb2);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`background-image: ${bgColor};`);
    toast.success("Gradient color copied.")
  };

  return (
    <section className="container" style={{ backgroundImage: bgColor }}>
      <div className="btns">
        <button className="btn1" onClick={handleBtn1}>
          {btn1}
        </button>
        <button className="btn2" onClick={handleBtn2}>
          {btn2}
        </button>
      </div>
      <h2>Copy your code here:</h2>
      <div className="copy-code" onClick={handleCopy}>
        background-image: linear <br /> -gradient(to right, {btn1}, {btn2});
      </div>
    </section>
  );
};

export default GradientColor;
