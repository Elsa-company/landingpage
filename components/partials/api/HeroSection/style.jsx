import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    height: 1200px;
    background-image: url(${props => props.background || ''});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
`

export const Content = styled.div` 
    left: 200px;
    top: 130px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
`

export const H1 = styled.h1` 
    color: #fff;
    font-size: 52px;
    margin-top: 100px;
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