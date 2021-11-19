import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ''});
    background-size: cover;
    background-repeat: no-repeat;
    /* position: relative; */
    min-height: 1200px;
    
`

export const Content = styled.div` 
    padding-top: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
`

export const H1 = styled.h1` 
    color: #fff;
    font-size: 52px;
    margin-bottom: 40px;
`

export const P = styled.p` 
    color: #fff;
    opacity: 0.33;
    font-size: 24px;
    text-align: center;
    margin-bottom: 45px;
`

export const ButtonHero = styled(Button)`
    font-weight: 500;
    font-size: 24px;
    padding: 22px 40px;
    width: auto;
`

export const InfoHead = styled.div`
    margin-top: 150px;
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



export const CardGroupItemPercent = styled.h1` 
    color: ${props => props.color };
    background-image: ${props => props.color ? "" : "linear-gradient(110deg, #5CE578 , #579CFF )"};
    background-clip: ${props => props.color ? "" : "text"};;
    -webkit-background-clip: ${props => props.color ? "" : "text"};
    -moz-background-clip: ${props => props.color ? "" : "text"};;
    -webkit-text-fill-color: ${props => props.color ? "" : "transparent"};;
    -moz-text-fill-color: transparent;
    font-size: ${props => props.fontSize};
    font-weight: 600;
    text-align: center;
    flex: 1;
    margin-bottom: 0;

`

export const CardGroupItemContent = styled.p` 
    color: #333;
    text-align: center;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin-bottom: auto;
    flex: 1;
`

export const CardGroupItem = styled.div` 
    background-color: #fff;
    border-radius: 25px;
    padding: 50px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 325px;
`

export const CardGroup = styled.div` 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`

export const InfoFooter = styled.div` 
    padding-bottom: 100px;
`

export const InfoFooterP = styled.div` 
color: #fff;
            font-size: 18px;
            text-align: center;
`
