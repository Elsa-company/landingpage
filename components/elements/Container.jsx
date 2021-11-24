import styled from "styled-components";

const Container = styled.div` 
    max-width: 1460px;
    margin: 0 auto;

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