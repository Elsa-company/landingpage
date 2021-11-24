import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    height: 600px;
    background-image: url(${props => props.background || ''});

    @media only screen and (max-width: 560px) {
        background-size: cover;
        background-position: center;
    }
`

export const Content = styled.div` 
    background: rgba(0, 14, 66, 0.75);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const H1 = styled.h1` 
    color: #fff;
    font-size: 48px;
    margin-top: 100px;
    margin-bottom: 40px;

    @media only screen and (max-width: 560px) {
        font-size: 32px;
        margin-bottom: 16px;
        text-align: center;
    }

    @media only screen and (max-width: 414px) {
        font-size: 32px;
        margin-bottom: 16px;
        text-align: center;
    }

    @media only screen and (max-width: 375px) {
        font-size: 32px;
        margin-bottom: 16px;
        text-align: center;
    }
`

export const P = styled.p` 
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-bottom: 45px;

    @media only screen and (max-width: 560px) {
        font-size: 16px;
        margin-bottom: 24px;
        text-align: center;
    }

    @media only screen and (max-width: 414px) {
        font-size: 16px;
        margin-bottom: 24px;
        text-align: center;
    }

    @media only screen and (max-width: 375px) {
        font-size: 16px;
        margin-bottom: 24px;
        text-align: center;
    }
`

export const ButtonHero = styled(Button)`
    font-weight: 500;
    font-size: 24px;
    padding: 22px 40px;
    width: auto;

    @media only screen and (max-width: 560px) {
        font-size: 18px;
        text-align: center;
    }

    @media only screen and (max-width: 414px) {
        font-size: 18px;
        text-align: center;
    }

    @media only screen and (max-width: 375px) {
        font-size: 18px;
        text-align: center;
    }
`

