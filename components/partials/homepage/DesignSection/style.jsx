import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
     background-image: url(${props => props.background || ""});
    background-size: cover;
    padding: 80px 0;
`


export const Title = styled.div`
    margin-bottom: 110px;
        h2 {
            font-size: 36px;
            text-align: center;
            margin-bottom: 24px;
        }
        p {
            font-size: 24px;
            text-align: center;
            color: #fff;
            margin-bottom: 14px;

           
    }
`


export const Content = styled.div`
    
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 0 3rem;
`

export const CardItem = styled.div`
    background-color: #fff;
    border-radius: 25px;
    padding: 35px 45px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;

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
        font-size: 24px;
        font-weight: 600;
    }

    p {
        text-align: center;
        font-size: 18px;
    }

`
