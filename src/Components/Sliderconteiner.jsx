import { useState } from "react";
import styled from "styled-components";

function Slidercontainer() {
  const [change, setchange] = useState(0);

  return (
    <Slidermain change={change}>
      <div className="slider-text">
        <span>Character Length</span>
        <p className="slider-value">{change}</p>
      </div>
      <div className="slider1">
        <input
          type="range"
          min="0"
          step="1"
          max="20"
          onChange={(e) => setchange(parseInt(e.target.value, 10))}
          value={change}
          className="slider"
        />
      </div>
    </Slidermain>
  );
}

const Slidermain = styled.div`
  margin-bottom: 32px;
  .slider-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
    p {
      color: #a4ffaf;
      font-feature-settings: "clig" off, "liga" off;

      font-family: "JetBrains Mono";
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .slider {
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: ${(props) =>
      `linear-gradient(to right, #A4FFAF ${props.change * 5}%, #ddd ${
        props.change * 5
      }%)`};
    outline: none;
    margin: 5px 0;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #ffffff;
      border: 2px solid #ffffff;
      cursor: pointer;
    }
  }
`;

export default Slidercontainer;
