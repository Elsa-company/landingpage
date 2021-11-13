import styled from "styled-components";
import Button from "~/components/elements/Button";


export const SectionWrapper = styled.section`
    padding-bottom: 80px;
`

export const Gallery = styled.div` 
    padding: 80px 0;
`

export const Traditional = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 0 40px;
`

export const TraditionalLeft = styled.div` 

`
export const TraditionalRight = styled.div` 

`
export const TraditionalTitle = styled.h1` 
    margin-top: 20px;
    font-size: 36px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 25px;
`

export const TraditionalDesc = styled.p` 
    max-width: 500px;
    font-size: 24px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 25px;
    line-height: 2;
`

export const ButtonCustom = styled(Button)`
    padding: 15px 40px ;
`

