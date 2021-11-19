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
    background-color: #2091F9;
    border-radius: 100%;
    color: #fff;
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
    font-size: 20px;
`

export const TabSection = styled.div`
    margin-top: 60px;
`

export const Tab = styled(Tabs)`
    box-shadow: 0px 22px 34px 10px rgba(0, 0, 0, 0.05);
    .ant-tabs-content-holder {
        box-shadow: 0px 22px 34px 10px rgba(0, 0, 0, 0.05);
    }
    .ant-tabs-nav-list {
        width: 100%;
        display: grid !important; 
        grid-template-columns: repeat(6, 1fr);
        gap: 0 12px;
        
        .ant-tabs-tab {
            background-color: #EFEFF4;
            color: #1C1D21;
            border-radius: 10px 10px 0 0 !important;

            &:nth-child(1).ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        color: #29F4FF;
                        font-weight: 600;
                    }
                
            }
            &:nth-child(2).ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        span {
                            color: #29F4FF;
                            font-weight: 600;
                        }
                    }
            }
            &:nth-child(3).ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        span {
                            color: #FC2AC2;
                            font-weight: 600;
                        }
                    }
            }
            &:nth-child(4).ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        span {
                            color: #FFF35C;
                            font-weight: 600;
                        }
                    }
            }
            &:nth-child(5).ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        span {
                            color: #FF52E3;
                            font-weight: 600;
                        }
                    }
            }
            &:nth-child(6).ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        span {
                            color: #FC2AC2;
                            font-weight: 600;
                        }
                    }
            }
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

export const TabContent = styled.div`
    padding: 20px;
`

export const TabTitle = styled.div`
    color: #121131;
    font-size: 26px;
    font-weight: 600;

    
`

export const TabDesc = styled.div`
    color: #8181A5;
    font-size: 16px;
    font-weight: 500;
    b {
        color: #FF9500;
    }
`

export const TabScores = styled.div`
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

export const ScoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    height: 100%;
    p {
        color: #8181A5;
        font-size: 16px;
        font-weight: 500;
    }
`

export const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 9px;
    height: 100%;
    img {
        height: 100%;
    }
`

export const TabStyleWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    gap: 0 30px;
    padding: 0 20px 20px 20px;
`

export const TabStyleLeft = styled.div`
   
`

export const TabStyleRight = styled.div`
    display: grid;
    grid-template-columns: ${props => props.column == 2 ? "1fr 1fr" : "1fr 1fr 1.2fr"};
    gap: 0 15px;
`


export const TabStyleLine = styled.div`
    align-self: center;
    width: 100%;
    height: 4px;
    background-color: ${props => props.color};
`

export const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    gap: 0 30px;
    margin-top: 30px;
    padding: 20px;
    h4 {
        align-self: center;
        color: #575579;
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        text-align: center;
    }
`

export const TabStyleRightItem = styled.div`
    border-right: 1px solid #E5E5EA;
    height: 95%;
    align-self: flex-end;
    &:last-child {
        border-right: none;
    }
    padding-right: 10px;
    display: flex;
    flex-direction: column;

`

export const TabStyleRightItemTitle = styled.h3`
    color: #121131;
    font-size: 16px;
    font-weight: 600;
    /* margin-bottom: 24px; */
    margin-top: auto;
    flex: 1;
    text-align: ${props => props.align == "left" ? "left" : "center"};
    img {
        margin-left: 15px;
        cursor: pointer;
    }
`

export const TabStyleRightItemImage = styled.div`
   flex: 1;
   text-align: center;
`

export const TabStyleRightItemDesc = styled.div`
    margin-top: auto;
`
export const TabStyleRightItemDescP = styled.p`
    
    &:last-child {
        
        margin-bottom: 50px;
    }
    color: ${props => props.underline ? "#33B6FF" : ""};
    text-decoration:  ${props => props.underline ? "underline" : "none"};

`

export const TabStyleRightItemErrors = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 15px;
`

export const TabStyleRightItemErrorsItem = styled.div`
    background-color: rgba(88, 86, 214, 0.15);
    color: #1C1D21;
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    p {
        margin: 0;
    }
`