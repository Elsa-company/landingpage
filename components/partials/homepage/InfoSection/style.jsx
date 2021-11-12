import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ""});
    background-size: cover;
    position: relative;
    padding: 80px 0;
`

export const InfoHead = styled.div`
margin-bottom: 50px;
`

export const InfoHeadH1 = styled.h1`
 font-size: 36px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 20px;
`


export const InfoHeadP = styled.p`
 font-size: 24px;
            text-align: center;
            color: #fff;
`

export const InfoCardWrapper = styled.div`
    margin-bottom: 24px;
`

export const InfoCardWrapperTitle = styled.div`
    margin-bottom: 50px;
`

export const InfoCardWrapperTitleH2 = styled.div`
    background-image: linear-gradient(110deg, #5CE579 , #579CFE );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-align: center;
    font-size: 48px;
`



export const CardGroupItemPercent = styled.div` 
 background-image: linear-gradient(110deg, #5CE578 , #579CFF );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-size: 64px;
    font-weight: 600;
    text-align: center;
`

export const CardGroupItemContent = styled.div` 
    color: #333;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
`

export const CardGroupItem = styled.div` 
    background-color: #fff;
    border-radius: 25px;
    padding: 50px 35px;
`

export const CardGroup = styled.div` 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`

export const InfoFooter = styled.div` 

`

export const InfoFooterP = styled.div` 
color: #fff;
            font-size: 18px;
            text-align: center;
`