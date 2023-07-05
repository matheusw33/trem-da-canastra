import { styled } from "styled-components";

const LogoEstilo = styled.h1`
    color:${props => props.cor || '#FFF'};
    background:transparent;
    font-family: 'Ysabeau SC', sans-serif;
    font-size:2em;
    overflow:hidden;

    @media (min-width: 1080px){
        font-size:3em;
    }
`

const Logo = (props) => {
    return(
    <LogoEstilo cor={props.cor}>Trem da Canastra</LogoEstilo>
    )
} 

export default Logo;