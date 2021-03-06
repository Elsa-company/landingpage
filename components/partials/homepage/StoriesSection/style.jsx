import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ""});
    background-size: cover;
    padding: 80px 0;
    background-position: center;
    @media only screen and (max-width: 560px) {
        padding: 60px 0;
        
    }

    @media only screen and (max-width: 414px) {
        padding: 60px 0;
    }

    @media only screen and (max-width: 375px) {
        padding: 60px 0;
    }
`


export const Title = styled.h1`
    color: #333;
    font-size: 48px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 54px;

    &:first-child {
        margin-bottom: 120px;
    }

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

    @media only screen and (max-width: 560px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 414px) {
        
    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const EducationWrapper = styled.div`
     display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    justify-content: center;
    margin-bottom: 250px;

    @media only screen and (max-width: 560px) {
        gap: 8rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const EducationItem = styled.div`
    background-color: #fff;
    padding: 80px 30px 24px 30px;
    position: relative;
    box-shadow: 0 22px 34px 10px rgba(0,0,0, 0.05);
    border-radius: 24px;

    
`

export const EducationThumb = styled.div`
    img {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 0;
        right: calc(50% - 130px);
    }
`

export const EducationContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const EducationContentHead = styled.div`
    flex: 1;
`

export const EducationContentHeadButton = styled.div`
    

    margin-bottom: 24px;
    button {
        color: #4294FF;
        font-size: 20px;
        font-weight: 600;
        padding: 8px 30px;
        background-color: rgba($color: #4294FF, $alpha: 0.17);
        width: auto;
        border: none;
        border-radius: 65px;
    }

    @media only screen and (max-width: 560px) {
        button {
            font-size: 16px;
        }
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
                       
`

export const EducationContentHeadTitle = styled.div`
    font-size: 24px;
    
    margin: 0;
    padding-bottom: 24px;
    color: #333;

    @media only screen and (max-width: 560px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
                       
`

export const EducationContentFooter = styled.div`
    border-top: 1px solid rgba(0,0,0, 0.33);
    /* flex: 1; */
    margin-bottom: auto;
    p {
        margin: 0;
        color: #4294FF;
        font-size: 24px;
        img {
            max-width: 20px;
            margin-left: 10px;
        }
    }
`

export const AwardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 0 30px;
    margin-bottom: 80px;

    @media only screen and (max-width: 560px) {
        margin-bottom: 0;
        gap: 8rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
    
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

    @media only screen and (max-width: 560px) {
        grid-template-rows: auto auto;
        gap:3rem;
        padding: 40px;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
`

export const AwardsItemThumb = styled.div`
     /* display: flex;
                justify-content: center; */
                max-height: 150px;
                .lazyload-wrapper {
                    display: flex;
                    justify-content: center;
                    height: 100%;
                    img {
                        height: 100%;
                    }
                }
    /* img {
        object-fit: cover;
    } */
`

export const AwardsItemBody = styled.p`
    font-size: 24px;
    color: #333;
    text-align: center;
    padding: 0 20px;

    @media only screen and (max-width: 560px) {
        font-size: 16px;
        margin: 0;
    }

    @media only screen and (max-width: 414px) { 
        
    }

    @media only screen and (max-width: 375px) {
        
    }
`