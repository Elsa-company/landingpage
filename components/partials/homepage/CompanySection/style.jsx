import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    padding-bottom: 80px;
`

export const Gallery = styled.div` 
    padding: 80px 0;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(10, 1fr);
        grid-template-areas: "box1 box1 box2 box2 box3 box3 box4 box4 box5 box5"
            "empt box6 box6 box7 box7 box8 box8  box9 box9 emp2"
        ;
        grid-template-rows: 1fr 1fr;

        img:nth-child(1) {
            grid-area: box1;
        }

        img:nth-child(2) {
            grid-area: box2;
        }

        img:nth-child(3) {
            grid-area: box3;
        }

        img:nth-child(4) {
            grid-area: box4;
        }

        img:nth-child(5) {
            grid-area: box5;
        }

        img:nth-child(6) {
            grid-area: box6;
        }

        img:nth-child(7) {
            grid-area: box7;
        }

        img:nth-child(8) {
            grid-area: box8;
        }

        img:nth-child(9) {
            grid-area: box9;
        }
`

export const Traditional = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 0 40px;
`

export const TraditionalLeft = styled.div` 

`
export const TraditionalRight = styled.div` 

`
export const TraditionalTitle = styled.h1` 
    margin-top: 20px;
    font-size: 36px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 25px;
`

export const TraditionalDesc = styled.p` 
    max-width: 500px;
    font-size: 24px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 25px;
    line-height: 2;
`

export const ButtonCustom = styled(Button)`
    padding: 15px 40px ;
`