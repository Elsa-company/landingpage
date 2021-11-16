import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    padding: 100px 0;
    background-image: url(${props => props.background || ''});
    background-size: cover;
`

export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardImage = styled.div`    

`


export const CardContent1 = styled.div`
   background-color: #F4F8FF;
   width: 80%;
   height: 100%;
`

export const CardContent1Tag = styled.h4`
    color: #4294FF;
    font-size: 22px;
    font-weight: 600;
`

export const CardContent1Title = styled.h1`
    color: #333;
    font-size: 36px;
    font-weight: 600;
`

export const CardContent1Desc = styled.p`
     color: #333;
    font-size: 24px;
    font-weight: 400;
`
