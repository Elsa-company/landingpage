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
    font-size: 48px;
    color: #333;
    margin-bottom: 25px;
    font-weight: 600;

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

    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const TitleWrapperP = styled.div`
    text-align: center;
    font-size: 32px;
    color: #333;
    
    @media only screen and (max-width: 1920px) {
        font-size: 32px;
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

    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const CustomizedContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 0 60px;

    @media only screen and (max-width: 560px) {
        display: none;
    }

    @media only screen and (max-width: 414px) {
        
    }

    @media only screen and (max-width: 375px) {
        
    }
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
    border-bottom: 1px solid rgba(51, 51, 51, 0.33);;
    cursor: pointer;
    p {
        margin-left: 15px;
        margin-bottom: 0;
        font-size: 28px;
        color: #333;
        opacity: ${props => props.active == "true" ? "100%" : "33%"};
        font-weight: ${props => props.active == "true" ? "500" : "400"};
    }
    @media only screen and (max-width: 1920px) {
        p {
        font-size: 28px;
        }
    }
    @media only screen and (max-width: 1536px) {
        p {
        font-size: 24px;
        }
    }

    @media only screen and (max-width: 1440px) {
        p {
        font-size: 24px;
        }
    }

    @media only screen and (max-width: 1366px) {
        p {
        font-size: 20px;
        }
    }
    @media only screen and (max-width: 560px) {
        p {
            font-size: 16px;  
        }
    }

    @media only screen and (max-width: 414px) {
        
    }

    @media only screen and (max-width: 375px) {
        
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
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;

`

export const QuoteWrapperTitle = styled.div`
    h5 {
        font-size: 24px;
        color: #333;
        font-weight: 400;
        margin-bottom: 16px;
        line-height: 1.5;
    }

    p {
        font-size: 18px;
        color: #4294FF;
        font-weight: 400;
        cursor: pointer;
        img {
            margin-left: 10px;
            width: 20px;
            height: 20px;
        }
    }

    @media only screen and (max-width: 1920px) {
        h5 {
            font-size: 24px;
        }
    }
    @media only screen and (max-width: 1536px) {
        h5 {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 1440px) {
        h5 {
            font-size: 18px;
        }
    }
    
    @media only screen and (max-width: 1366px) {
        h5 {
            font-size: 16px;
        }
    }
    @media only screen and (max-width: 560px) {
       
    }

    @media only screen and (max-width: 414px) {
        
    }

    @media only screen and (max-width: 375px) {
        
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

export const Collapse = styled.div`
    display: none;
    @media only screen and (max-width: 560px) {
        display: block;
    }

    @media only screen and (max-width: 414px) {
        
    }

    @media only screen and (max-width: 375px) {
        
    }

`

export const CollapseWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    /* gap: 3rem; */
`

export const CollapseItem = styled.div`
    border-bottom: 1px solid rgba(51, 51, 51, 0.33);
`

export const CollapseItemHeader = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px 0;
    cursor: pointer;
    p {
        margin-left: 15px;
        margin-bottom: 0;
        font-size: 24px;
        color: #333;
        opacity: ${props => props.active == "true" ? "100%" : "33%"};
        font-weight: ${props => props.active == "true" ? "500" : "400"};
    }
`
export const CollapseContent = styled.div`
    display: ${props => props.active == "true" ? "block" : "none"};
`