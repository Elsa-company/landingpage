import styled from "styled-components";
import Button from "~/components/elements/Button";
import { Tabs, Progress } from 'antd';
const { TabPane,  } = Tabs;

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ''});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    padding: 80px 0;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    color: #333;
    margin-bottom: 60px;

`

export const InputOutputSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 0 120px;
`

export const Input = styled.div`
    text-align: left;
`



export const InputTitle = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-align: left;
    color: #333;
    margin-bottom: 36px;
`

export const InputList = styled.div`
   
`

export const InputItem = styled.div`
    font-size: 20px;
    display: list-item;
    list-style: disc;
    margin-left: 20px;
`

export const Output = styled.div`
    
`

export const OutputTitle = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-align: left;
    color: #333;
    margin-bottom: 36px;
`

export const OutputList = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
`

export const OutputItem = styled.div`
    display: flex;
    
`

export const ItemCircle = styled.div`
    height: 40px;
    width: 40px;
    background-color: ${props => props.active ? "#2091F9" : "#3DAEFF"  };
    border-radius: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
`

export const ItemText = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    opacity: ${props => props.active ? 1 : 0.6};
    font-size: 20px;
`

export const TabSection = styled.div`
    margin-top: 60px;
`

export const Tab = styled(Tabs)`
    .ant-tabs-nav-list {
        width: 100%;
        display: grid !important; 
        grid-template-columns: repeat(6, 1fr);
        gap: 0 12px;

        .ant-tabs-tab {
            background-color: #EFEFF4;
            color: #1C1D21;
        }
    }

    .ant-tabs-nav-operations {
        display: none !important;
    }

    .ant-tabs-nav {
        margin: 0 !important;
    }

    .ant-tabs-content-holder {
        border-left: 2px #E6E6E6 solid;
        border-right: 2px #E6E6E6 solid;
        border-bottom: 2px #E6E6E6 solid;
        border-radius: 0  0 24px 24px;
    }
    .ant-tabs-tab-active {
        background-color: #fff !important;
        border-left: 2px #E6E6E6 solid !important;
        border-right: 2px #E6E6E6 solid !important;
        border-top: 2px #E6E6E6 solid !important;
    }
`

export const TabItem = styled(TabPane)`
    
`

export const TabContent = styled.div `
    padding: 20px;
`

export const TabTitle = styled.div `
    color: #121131;
    font-size: 26px;
    font-weight: 600;

    
`

export const TabDesc = styled.div `
    color: #8181A5;
    font-size: 16px;
    font-weight: 500;
    b {
        color: #FF9500;
    }
`

export const TabScores = styled.div `
    margin-top: 40px;
    display: grid;
    grid-template-columns: 200px auto;
    gap: 0 30px;

    .percent {
        color: #478DFF;
        font-weight: 600;
        font-size: 40px;
    }
    p {
        font-size: 14px;
        color: #121131;
        font-weight: 600;
    }
`

export const ScoreWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    p {
        color: #8181A5;
        font-size: 16px;
        font-weight: 500;
    }
`

export const ImageWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 9px;
`

export const TabStyleWrapper = styled.div `
    display: grid;
    grid-template-columns: 270px auto;
    gap: 0 9px;
    padding: 20px;
`

export const TabStyleLeft = styled.div `
   
`

export const TabStyleRight = styled.div `
    
`


export const TabStyleLine = styled.div `
    align-self: center;
    width: 100%;
    height: 4px;
    background-color: ${props => props.color};
`

export const TitleWrapper = styled.div `
    display: grid;
    grid-template-columns: 300px auto;
    gap: 0 30px;
    margin-top: 50px;
    h4 {
        align-self: center;
        color: #575579;
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        text-align: center;
    }
`