import { styled } from "styled-components";
import Logo from "../Logo";
import ItemRedeSocial from "../RedesSociais";
import LogoInstagram from '../../imagens/instagram.png';
import LogoFacebook from '../../imagens/facebook.png';
import LogoWhatsapp from '../../imagens/whatsapp.png';
import IconeFechar from   '../../imagens/fechar-preto.svg';
import IconeMenu from '../../imagens/hamburger-brancoo.svg';
import { useState } from "react";
import { Container } from "../Container";


const Cabecalho = styled.header`
    position:absolute;
    width:100%;
    top:0;
    right:0;
`
const MenuCaixa = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding:16px;
`
const ListaMenu = styled.ul`
    align-items: center;
    background-color: rgba(255, 255, 255, .95);
    display:flex;
    flex-direction: column;
    gap: 1em;  
    height:100vh;
    padding-top:16px;
    position: fixed;
    right:${props => props.visibilidade};
    top:0;
    transition: .3s;
    width: 70vw;
    
    li{
        text-align:center;
        width:100%;
    }
    
    a{
        color: #000;
        display:block;
        font-family: 'Ysabeau SC', sans-serif;
        font-size: 23px;
        padding: 16px;
        letter-spacing:2px;
        text-decoration:none;
    }
    a:hover{
        background-color: #FFF;
    }
`
const ListaRedesSociais = styled.ul`
    display: flex;
    border-top: 1px solid #000;
    justify-content: center;
    padding: 16px 0;
    width:100%;

    li{
        width: 50px;

        a{
            display:block;
            padding:0;
            width:100%;
        }
    }
`
const ImgFechar = styled.img`
    position:absolute;
    width:35px;
    top: 0;
    right: 0;
    padding:10px;
`
const ImgMenu = styled.img`
    width:35px;
`

const Menu = () => {

    const [visibilidadeMenu, setVisibilidadeMenu] = useState('-90%');
    const abrirMenu = () =>{
       return setVisibilidadeMenu('0');
    };
    const fecharMenu = () => {
        return setVisibilidadeMenu('-90%');
    };
    return (
        <Cabecalho>
            <Container>
                <MenuCaixa>
                    <Logo />
                    <ImgMenu src={IconeMenu} onClick={abrirMenu}/>
                </MenuCaixa>
                <ListaMenu
                    visibilidade={visibilidadeMenu}
                >
                    <ImgFechar onClick={fecharMenu} src={IconeFechar} />
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Passeios</a></li>
                    <li><a href="#">Galeria de fotos</a></li>
                    <li><a href="#">Contato</a></li>
                    <ListaRedesSociais>
                        <ItemRedeSocial
                            img={LogoFacebook}
                            link="https://www.facebook.com/tremdacanastra/"
                        />
                        <ItemRedeSocial
                            img={LogoInstagram}
                            link="https://www.instagram.com/tremdacanastra/"
                        />
                        <ItemRedeSocial
                            img={LogoWhatsapp}
                            link="https://api.whatsapp.com/send?phone=5535999413332&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20no%20site%20Zandaia!"
                        />
                    </ListaRedesSociais>
                </ListaMenu>
            </Container>
        </Cabecalho>
    );
};

export default Menu;