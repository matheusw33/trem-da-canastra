import { styled } from "styled-components";
import BannerImg from "../../imagens/banner.jpeg";
import { Titulo } from "../Titulo";
import Botao from "../Botao";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Container } from "../Container";


const SecaoBanner = styled.section`
    background-image: url(${(props) => props.url});
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;    
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap:16px;
    justify-content:center;
    padding-left: 16px;    
    box-shadow: inset 0em 3em 1em 1em rgba(0, 0, 0, 0.1);
`

const Banner = () => {
    useEffect( ()=> {
        AOS.init({
            duration:2000,
        })
    }, []);
    return (
        <SecaoBanner url={BannerImg}>
            <Container>
                <Titulo alinhamento="start" cor='#FFF' data-aos="fade-left">
                    Crie memórias extraordinárias
                </Titulo>
                <Botao efeito="fade-right">Saiba Mais</Botao>
            </Container>
        </SecaoBanner>
    )
}

export default Banner;