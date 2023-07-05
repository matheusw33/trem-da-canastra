import { styled } from "styled-components";
import { Titulo } from "../Titulo";
import { Data } from "./dados"; 
import { useState } from "react";
import BtnFecharImg from  '../../imagens/fechar-branco.svg';

const GaleriaConteirner = styled.section`
    padding-top: 2em;
    text-align:center;

    div{
        display:flex;
        flex-wrap:wrap;
    }
`
const ImgContainer = styled.div`
    width: 50%;
    display:flex;
    img{
        width:100%;
        object-fit: cover;
        height:300px;
    }
    img:hover {
        opacity: .8;
    }

    @media (min-width: 1080px){
        width:33%;
    }
`

const BoxImg = styled.div`
    position:fixed;
    height:100vh;
    width: 100vw;
    left:0;
    bottom: ${props => props.visivel || '-100vh'};
    z-index:999;
    display: flex;
    align-items: center;
    justify-content:center;
    padding:2em;
    background-color: rgba(0,0,0, .7);
    transition: .5s;
`
const IconFechar = styled.img`
    width:30px;
    position: absolute;
    top: 25px;
    right:25px;
    cursor:pointer;
`

const Galeria = (props) => {

const [boxVisivel, setBoxVisivel] = useState('-100vh');
const [imgSelecionada, setImgSelecionada] = useState('');

const pegarImagem = (img) => {
    setImgSelecionada(img);
    setBoxVisivel('0');
};

const fecharBox = () => {
    setImgSelecionada('');
    setBoxVisivel('-100vh');
};
    return (
        <GaleriaConteirner data-aos={props.efeito}>
            <Titulo espacamento=" 0 0 1em 0">Veja algumas imagens</Titulo>
            <BoxImg visivel={boxVisivel}>
                <IconFechar src={BtnFecharImg} onClick={fecharBox} />
                <div>
                    <img src={imgSelecionada} />
                </div>
            </BoxImg>
            <div>
                {Data.map( (item, index) => {
                    return(
                        <ImgContainer key={index}  onClick={() => pegarImagem(item.img)}>
                            <img src={item.img} />
                        </ImgContainer>
                        )
                })}
            </div>
        </GaleriaConteirner>
    )
}

export default Galeria;