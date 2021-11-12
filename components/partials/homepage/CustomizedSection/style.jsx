import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ""});
    background-size: cover;
    background-position: 0 75%;
    padding: 80px 0;
`

export const TitleWrapper = styled.div`
    margin-bottom: 80px;
`

export const TitleWrapperH1 = styled.div`
    text-align: center;
    font-size: 36px;
    color: #333;
    margin-bottom: 25px;
`

export const TitleWrapperP = styled.div`
    text-align: center;
            font-size: 24px;
            color: #333;
`

export const CustomizedContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 0 60px;
`

export const ListFunction = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
`

export const ListFunctionItem = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 1px solid rgba($color: #333, $alpha: 0.33);

    p {
        margin-left: 15px;
        margin-bottom: 0;
        font-size: 24px;
        color: #333;
        opacity: ${props => props.active ? "100%" : "33%"};
        font-weight: ${props => props.active ? "500" : "400"};
    }
`

export const Image = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }
`

export const QuoteWrapper = styled.div`
   display: grid;
    grid-template-rows: 0.8fr 1fr;
    grid-template-columns: 1fr;

`

export const QuoteWrapperTitle = styled.div`
    h5 {
        font-size: 18px;
        color: #333;
        font-weight: 400;
        margin-bottom: 16px;
    }

    p {
        font-size: 18px;
        color: #4294FF;
        font-weight: 400;

        img {
            margin-left: 10px;
            width: 20px;
            height: 20px;
        }
    }

`

export const QuoteWrapperMain = styled.div`
    background: rgba(35, 141, 224, 0.05);
    box-shadow: 0px 22px 34px 10px rgba(0, 0, 0, 0.05);
    border-radius: 24px ;
    padding: 20px;
    position: relative;

    svg {
        position: absolute;
        top: 20px;
        left: -20px;
    }
`

export const QuoteWrapperMainHead = styled.div`
     p {
        font-size: 18px;
        color: #333;
        font-weight: 400;
    }
`

export const QuoteWrapperMainBottom = styled.div`
    display: grid;
    grid-template-columns:  auto 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
`

export const QuoteWrapperMainBottomName = styled.div`
    h4 {
        color: #333;
        font-size: 14px;
    }
    p {
        margin-bottom: 0;
        font-size: 14px;
    }
`