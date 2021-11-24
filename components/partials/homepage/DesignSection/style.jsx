import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ""});
    background-size: cover;
    padding: 80px 0;

    @media only screen and (max-width: 560px) {
        padding: 60px 0;
        background-position: center;
    }

    @media only screen and (max-width: 414px) {
        padding: 60px 0;
    }

    @media only screen and (max-width: 375px) {
        padding: 60px 0;
    }
`


export const Title = styled.div`
    margin-bottom: 110px;
    h2 {
        font-size: 48px;
        text-align: center;
        margin-bottom: 24px;
    }
    p {
        font-size: 28px;
        text-align: center;
        color: #fff;
        margin-bottom: 14px; 
    }

    @media only screen and (max-width: 1920px) {
        h2 {
            font-size: 48px;
        }
        p {
            font-size: 28px;
        }
    }
    @media only screen and (max-width: 1536px) {
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 24px;
        }
    }

    @media only screen and (max-width: 1440px) {
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 24px;
        }
    }

    @media only screen and (max-width: 1366px) {
        h2 {
            font-size: 32px;
        }
        p {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 560px) {
        margin-bottom: 50px;
        h2 {
            font-size: 24px;
        }
        p {
            font-size: 16px;
        }
    }

    @media only screen and (max-width: 414px) {
        
    }

    @media only screen and (max-width: 375px) {
        
    }
`


export const Content = styled.div`
    
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3rem;

    @media only screen and (max-width: 560px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const CardItem = styled.div`
    background-color: #fff;
    border-radius: 25px;
    padding: 35px 45px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;

    @media only screen and (max-width: 560px) {
        padding: 25px;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }

`

export const CardHead = styled.div`
    text-align: center;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        object-fit: cover;
    }

`

export const CardBody = styled.div`
   h3{
        color: #333;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
    }

    p {
        text-align: center;
        font-size: 24px;
    }

    @media only screen and (max-width: 1920px) {
        h3 {
            font-size: 32px;
        }
        p {
            font-size: 24px;
        }
    }
    @media only screen and (max-width: 1536px) {
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 1440px) {
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 1366px) {
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
`
