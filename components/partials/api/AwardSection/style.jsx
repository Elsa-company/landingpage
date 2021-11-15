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
        color: #fff;
    }
`

export const GroupCompany = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 30px;
    margin-bottom: 100px;
`

export const Company = styled.div `
    background: #fff;
    padding: 35px 30px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
`

export const CompanyThumb = styled.div `
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CompanyDesc = styled.div `
    text-align: center;
    margin-bottom: auto;
    p {
        font-size: 24px;
        margin: 0;
        color: #333;
    }
`

export const GroupAward= styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0 24px;
    margin-bottom: 100px;
`

export const FromWrapper = styled.div `
    /* text-align: center; */
    display: flex;
    justify-content: center;
`
export const FromGroup= styled.div`
    background-color: #fff;
    border-radius: 24px;
    padding: 30px;

    max-width: 670px;
    text-align: center;
`

export const FromBody = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 30px;
    
    input.ant-input {
        border-radius: 55px;
    }

    .ant-select-selector {
        border-radius: 55px !important;
    }

    textarea.ant-input {
        border-radius: 24px;
    }

    .ant-row:nth-child(7) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    
`