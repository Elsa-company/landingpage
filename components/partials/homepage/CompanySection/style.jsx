import styled from "styled-components";
import Button from "~/components/elements/Button";


export const SectionWrapper = styled.section`
    padding-bottom: 60px;

    @media only screen and (max-width: 560px) {
        background-size: cover;
        background-position: center;
    }
`

export const Gallery = styled.div` 
    padding: 60px 0;
`

export const TraditionalLeft = styled.div` 
    
`
export const TraditionalRight = styled.div` 

`

export const Traditional = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 0 40px;

    @media only screen and (max-width: 560px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        ${TraditionalRight} {
            order: 1;
        }
        ${TraditionalLeft} {
            order: 2;
        }
    }

    @media only screen and (max-width: 414px) {
      
    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const TraditionalTitle = styled.h1` 
    margin-top: 20px;
    font-size: 48px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 25px;

    @media only screen and (max-width: 1920px) {
        font-size: 48px;
    }
    @media only screen and (max-width: 1536px) {
        font-size: 36px;
    }

    @media only screen and (max-width: 1440px) {
        font-size: 36px;
    }

    @media only screen and (max-width: 1366px) {
        font-size: 32px;
    }

    @media only screen and (max-width: 560px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 414px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 375px) {
        font-size: 24px;
    }
`

export const TraditionalDesc = styled.p` 
    max-width: 500px;
    font-size: 28px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 25px;
    line-height: 2;

    @media only screen and (max-width: 1920px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 1536px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 1440px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 1366px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 560px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 414px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 375px) {
        font-size: 16px;
    }
`

export const ButtonCustom = styled(Button)`
    padding: 15px 40px ;
    @media only screen and (max-width: 1920px) {
        font-size: 24px;
    }
    @media only screen and (max-width: 1536px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 1440px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 1366px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 560px) {
        font-size: 18px;
    }

    @media only screen and (max-width: 414px) {
        font-size: 18px;
    }

    @media only screen and (max-width: 375px) {
        font-size: 18px;
    }
`

