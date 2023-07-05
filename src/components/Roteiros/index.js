import { styled } from "styled-components";
import { Titulo } from "../Titulo";
import { ListaRoteiros } from "./dados";
import { Container } from "../Container";

const RoteirosContainer = styled.section`
    padding: 1em;
    text-align:center;

    ul{
        width:100%;
        display:flex;
        flex-direction: column;
        gap:1em;
        margin-top:1em;
        text-align: start;
        padding: 0 1em;

        @media (min-width: 1080px){
            flex-flow: row wrap;
            gap: 2em;
            padding:2em;
            justify-content: center;
        }
    }
    ul li::before {
        position:absolute;
        content:'';
        height:5px;
        border-radius:50%;
        background-color:#F6AF25; 
        display: inline-block;
        width: 5px; 
        margin-left: -13px;
        margin-top: 10px;
    }

    ul li{
        font-size: 20px;
        font-family: 'Roboto', Sans-serif;
        font-weight:300;
        letter-spacing: 2px;
        line-height: 1.3;
    }
`


const Roteiros = (props) => {
    return(
        <RoteirosContainer data-aos={props.efeito}>
            <Container>
                <Titulo cor='#F6AF25'>Roteiros</Titulo>
                <ul>
                    {ListaRoteiros.map( (item) => {
                        return(
                            <li key={item.nome}>{item.nome}</li>
                        )
                    })}
                </ul>
            </Container>
        </RoteirosContainer>
    )
}

export default Roteiros;