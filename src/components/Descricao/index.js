import { styled } from "styled-components";
import { Titulo } from "../Titulo";
import CanastraImg from '../../imagens/canastra.jpeg';
import Waves from '../../imagens/waves.svg';
import { Paragrafo } from "../Paragrafo";
import { Container } from "../Container";
const DescricaoContainer = styled.section`
    text-align:center;
    padding: 2em 1em;
    width: 100%;
    margin: 0 auto;
    box-sizing:border-box;

    img{
        width:100%;
    }
`
const DescricaoCaixa = styled.div`

    @media (min-width: 1080px){
        margin-top:1em;
        display:flex;
        align-items: center;
        text-align: start;
        padding: 2em;
}
`

const Descricao = (props) => {
    return(
    <DescricaoContainer data-aos={props.efeito}>
        <Container>
            <Titulo >Vive essa experiência!</Titulo>
            <DescricaoCaixa>
                <Paragrafo>Explore a beleza intocada da Serra da Canastra em passeios memoráveis que vão te surpreender a cada momento.</Paragrafo>
                <img src={CanastraImg} alt="Imagem da alto da Canastra" />
            </DescricaoCaixa>
        </Container>
    </DescricaoContainer>
    )
}

export default Descricao;