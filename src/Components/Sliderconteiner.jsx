import { useState } from "react";
import styled from "styled-components";

function Slidercontainer() {
  const [showe, setShowe] = useState(0);

  return (
    <Slidermain showe={showe}>
      <div className="slider-text">
        <span>Character Length</span>
        <p className="slider-value">{showe}</p>
      </div>
      <div className="slider1">
        <input
          type="range"
          min="0"
          step="1"
          max="20"
          onChange={(e) => setShowe(parseInt(e.target.value, 10))}
          value={showe}
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
  }
  .slider {
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: ${(props) =>
      `linear-gradient(to right, #A4FFAF ${props.showe * 5}%, #ddd ${
        props.showe * 5
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
