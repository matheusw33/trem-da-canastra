import { styled } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ImgGuia from '../../imagens/guia.svg';
import ImgRestaurante from '../../imagens/restaurante.svg';
import ImgPontoTuristico from '../../imagens/ponto-turistico.svg';
import ImgNatureza from '../../imagens/natureza.svg';

const SecaoAtrativos = styled.section`

    display:flex;
    flex-wrap: wrap;
    padding: 4em 1em 2em 1em;
    justify-content:center;
    gap: 16px;
    align-items:center;
    box-sizing:border-box;
    
    div{
        display:flex;
        flex-direction:column;
        padding:10px;
        border: 1px solid #000;
        width: 40%;
        align-items:center;
        justify-content:center;
        border-radius: 10px;
        gap:10px;

        @media (min-width: 1080px){
            width: 200px;
        }
    }
    
    img{
        width:40px;
    }
`

const Atrativos = () => {
    useEffect( ()=> {
        AOS.init({
            duration:2000,
        })
    }, []);
    return(
        <SecaoAtrativos>
            <div data-aos="fade-right">
                <img src={ImgGuia} alt=""/>
                <span>Guia turistico</span>
            </div>
            <div data-aos="fade-left">
                <img src={ImgRestaurante} alt=""/>
                <span>Restaurantes</span>
            </div>
            <div data-aos="fade-right">
                <img src={ImgPontoTuristico} alt=""/>
                <span>Pontos Turísticos</span>
            </div>
            <div data-aos="fade-left">
                <img src={ImgNatureza} alt=""/>
                <span>Muita natureza</span>
            </div>
        </SecaoAtrativos>
    )
}

export default Atrativos;