import styled from "styled-components";
import Sliderconteiner from "./Sliderconteiner";
import Checkbox from "./Checkbox";
function Maincont() {
  return (
    <Mainconts>
      <Sliderconteiner />
      <Checkbox />
    </Mainconts>
  );
}
const Mainconts = styled.div`
  background-color: #24232c;
  padding: 21px 16px 16px;
`;
export default Maincont;
