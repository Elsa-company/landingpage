import styled from "styled-components";

const PieWrapper = styled.div `
  float: left;
  margin: 15px;
  position: relative;
`

const Pie = styled.div `
    width: 100%;
    height: 100%;
    clip: rect(0, 1em, 1em, 1em / 2);
    left: 0;
    position: absolute;
    top: 0;
`

const HalfCircle = styled.div`
    border: (1em / 10) solid #3498db;
    border-radius: 50%;
    clip: rect(0, 1em / 2, 1em, 0);
    left: 0;
    position: absolute;
    top: 0;
`

const Lable = styled.span`
    background: #34495e;
    border-radius: 50%;
    bottom: calc(calc(1em *4) / 10);
    color: #ecf0f1;
    cursor: default;
    display: block;
    font-size: calc(1em  / 4);
    left: calc(calc(1em *4) / 10);
    line-height: calc(calc(1em * 4) * .70);
    position: absolute;
    right: calc(calc(1em *4) / 10);
    text-align: center;
    top: calc(calc(1em *4) / 10);
`


 const CirclePercent = (props) => {
    return (
        <PieWrapper>
            <Pie>

            </Pie>
        </PieWrapper>
    )
}

export default CirclePercent