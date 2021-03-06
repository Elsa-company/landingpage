import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
     background-image: url(${props => props.background || ""});
    background-size: cover;
    padding: 80px 0;
`


export const Title = styled.div`
    margin-bottom: 70px;
        h2 {
            font-size: 36px;
            text-align: center;
            margin-bottom: 24px;
            color: #333;
        }
        p {
            font-size: 24px;
            text-align: center;
            color: #333;
            margin-bottom: 14px;
    }
`

export const Gallery = styled.div` 
    padding: 80px 0;
    .slick-arrow  {
        display: none !important;
    }
`

export const Content = styled.div`
    margin-bottom: 200px;
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
    box-shadow: 0 22px 34px 10px rgba(0,0,0, 0.05);
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

export const AwardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 0 30px;
    margin-bottom: 80px;
    
`

export const AwardsItem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 20px;
    
    background-color: #fff;
    box-shadow: 0 22px 34px 10px rgba(0,0,0, 0.05);
    border-radius: 24px;
    padding: 60px 40px 30px 40px;
`

export const AwardsItemThumb = styled.div`
     display: flex;
                justify-content: center;
                max-height: 150px;
    /* img {
        object-fit: cover;
    } */
`

export const AwardsItemBody = styled.p`
    font-size: 24px;
    color: #333;
    text-align: center;
    padding: 0 20px;
`