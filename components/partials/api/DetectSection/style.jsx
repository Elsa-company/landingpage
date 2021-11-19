import styled from "styled-components";
import Button from "~/components/elements/Button";
import { Tabs, Progress } from 'antd';
const { TabPane, } = Tabs;

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ''});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    padding: 80px 0;
`

export const Title = styled.h1`
    
    margin-bottom: 60px;
    
    h1 {
        text-align: center;
        font-size: 48px;
        color: #333;
    }

    h2 {
        text-align: center;
        font-size: 48px;
        color: #333;
        margin-bottom: 20px;
    }
    p {
        text-align: center;
        font-size: 24px;
        color: #333;
    }
`

export const GroupCard = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 64px;
    margin-bottom: 60px;
`

export const Card = styled.div`
    box-shadow: 0px 22px 34px 10px rgba(0, 0, 0, 0.05);
    border-radius: 32px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`

export const CardHead = styled.div`
    background: ${props => props.background};
    border-radius: 32px 32px 0 0;
    padding: 20px 10px;
    text-align: center;
    color: #fff;
    font-size: 24px;
`

export const CardNoti = styled.div`
    background-color: ${props => props.background};
    padding: 10px 20px;
    color: #121131;
    font-size: 24px;
    p {
        margin: 0;
    }
`

export const CardContent = styled.div`
    background-color: #fff;
    border-radius: 0 0 32px 32px ;
    height: 500px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ContentImage = styled.div`
    flex: 1;
   
`

export const ContentButton = styled.div` 
    margin-bottom: auto;
    background: linear-gradient(180deg, #29F4FF, #5257FF);
    border-radius: 123px;
    padding: 10px 40px;
    text-align: center;
    p {
        margin: 0;
        text-transform: uppercase;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        img {
            max-width: 32px;
        }
    }
`

export const GroupPrice = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 30px;

`

export const Price = styled.div`
     box-shadow: 0px 22px 34px 10px rgba(0, 0, 0, 0.05);
     border-radius: 24px;
     background-color: #fff;
`

export const PriceHead = styled.div`
 background: linear-gradient(110deg, #4294FF, #35CDFF);
 border-radius: 24px 24px 0 0 ;
text-align: center;
padding: 10px 0;
 h3 {
     font-size: 24px;
 }
`

export const PriceContent = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fff;
    border-radius: 0 0 24px 24px ;
`

export const PriceContentWrapper = styled.div`
    
    p {
        svg {
            margin-right: 10px;
        }
    }
    &:first-child {
        border-right: 1px solid rgba(24, 16, 74, 0.2);
    }

    padding: 0 20px;
`

export const PriceContentHead = styled.div`
    border-bottom: 1px solid rgba(24, 16, 74, 0.2);
    

`

export const PriceContentMiddle = styled.div`
    border-bottom: 1px solid rgba(24, 16, 74, 0.2);
    padding: 20px 0;
    p {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const PriceContentFotter = styled.div`
    padding: 20px 0;
    p {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const PriceContentMiddleP = styled.p`
    text-decoration: line-through;
    color: #B4B4B4;
`

export const PriceContentHeadTitle = styled.h3`
    background-image: ${props => props.color};
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
`

export const PriceContentLine = styled.div `
    display: grid;
    
    grid-template-columns: 16px auto;
    margin-bottom: 16px;

    gap: 0 10px;

    p {
        text-decoration: ${props => props.underline ? "line-through" : "" };
        color: ${props => props.underline ? "#B4B4B4" : "#333" } ;
    }
`

export const PriceContentHeadPrice = styled.h1`
    color: #333;
    font-weight: 400;
    font-size: 74px;
    margin-bottom: 8px;
    span {
        font-size: 16px;
    }
`

export const PriceContentHeadDesc = styled.p`
    color: #3AB9FF;
    margin-bottom: 32px;
`

export const PriceContentHeadButon = styled.button`
    border:  ${props => props.background == "#fff" ? "1px solid #3ABBFF" : "none"};
    background:  ${props => props.background};
    color:  ${props => props.color};
    text-align: center;
    font-weight: 600;
    border-radius: 73px;
    padding: 10px 30px;
    margin-bottom: 14px;
`