import { useState } from "react";
import styled from "styled-components";

function Sliderconteiner() {
  const [showe, setshowe] = useState(0);
  return (
    <Slidermain>
      <div className="slider-text">
        <span>Character Length</span>
        <p className="slider-value">{showe}</p>
      </div>
      <div className="slider1">
        <input
          type="range"
          min="0"
          max="20"
          onChange={(e) => setshowe(e.target.value)}
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
    height: 8px;
    border-radius: 5px;
    background: white;
    outline: none;
    margin: 5px 0;
  }
`;
export default Sliderconteiner;
