import { styled } from "styled-components";

export const Titulo = styled.h3`
    color:${props => props.cor || '#F6AF25'};
    font-size:3em;
    font-family: 'Roboto', Sans-serif;
    font-weight:${props => props.peso || '300'};
    width:100%;
    margin: ${props => props.espacamento ||"0"};
    text-align: ${props => props.alinhamento || "center"};
    line-height: 1.5;

    @media (min-width: 720px){
        font-size: 4em;
        line-height: 1.3;
    }
`