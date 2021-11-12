import styled from "styled-components";
import Button from "~/components/elements/Button";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

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
    
`

export const TabItem = styled(TabPane)`
    
`