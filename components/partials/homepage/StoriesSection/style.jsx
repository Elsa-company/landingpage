import styled from "styled-components";
import Button from "~/components/elements/Button";

export const SectionWrapper = styled.section`
    background-image: url(${props => props.background || ""});
    background-size: cover;
    padding: 80px 0;
`


export const Title = styled.h1`
    color: #333;
    font-size: 36px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 54px;

    &:first-child {
        margin-bottom: 120px;
    }
`

export const EducationWrapper = styled.div`
     display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    justify-content: center;
    margin-bottom: 250px;
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
                       
`

export const EducationContentHeadTitle = styled.div`
    font-size: 24px;
    
    margin: 0;
    padding-bottom: 24px;
    color: #333;
                       
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