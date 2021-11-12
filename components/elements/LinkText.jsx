import styled from "styled-components";
import nextIcon from '~/public/static/img/icons/next-icon.png'

const LinkStyle = styled.div`
    margin-bottom: 25px;
    font-size: 24px;
    font-weight: 400;
    color: #4294FF;

    img {
        margin-left: 10px;
    }
`

 const LinkText = (props) => {
    return (
        <LinkStyle>
            {props.text} <img src={nextIcon} alt="Elsa - next icon" />
        </LinkStyle>
    )
}

export default LinkText