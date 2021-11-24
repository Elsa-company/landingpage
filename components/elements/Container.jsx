import styled from "styled-components";

const Container = styled.div` 
    max-width: 1960px;
    margin: 0 auto;

    @media only screen and (max-width: 1920px) {
        max-width: 1460px;
    }

    @media only screen and (max-width: 1536px) {
        max-width: 1166px;
    }

    @media only screen and (max-width: 1440px) {
        max-width: 1166px;
    }

    @media only screen and (max-width: 1366px) {
        max-width: 1166px;
    }

    @media only screen and (max-width: 560px) {
        padding: 0 20px;
    }

    @media only screen and (max-width: 414px) {
        padding: 0 25px;
    }

    @media only screen and (max-width: 375px) {
        padding: 0 20px;
    }
`

export default Container