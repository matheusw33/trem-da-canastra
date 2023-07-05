import { styled } from "styled-components";
import { Titulo } from "../Titulo";
import { CampoTexto } from "../CampoTexto";
import { ListaRoteiros } from "../Roteiros/dados";
import Botao from "../Botao";
import Logo from "../Logo";
import LogoWhatsapp from '../../imagens/whatsapp.svg';
import LogoEmail from '../../imagens/email.svg';
import { Container } from "../Container";

const Formulario = styled.form`
    padding: 15px;
    display:flex;
    flex-direction: column;
    gap:1em;
    margin-bottom:2em;

    @media (min-width: 1080px){
        width:60%;
    }

    label{
        font-size: 20px;
        font-family: 'Roboto', Sans-serif;
        font-weight:300;
        letter-spacing: 2px;
        line-height: 1.3;
        }
`

    

const SelecaoDeRoteiro = styled.select`
    width:100%;
    padding: 15px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #DCDCDC;
    font-size:20px;
    font-family: 'Roboto', Sans-serif;
    font-weight:300;
    letter-spacing: 2px;
    line-height: 1.3;
`
const CaixaTelefone = styled.div`
    background-color: #F6AF25; 
    text-align:center;
    padding: 2em 0; 

    h4{
        font-size: 20px;
        font-family: 'Roboto', Sans-serif;
        font-weight:500;
        letter-spacing: 2px;
        line-height: 1.3;
        color:#FFF;
        margin-bottom:1em;
    }

    @media (min-width:1080px){
        padding:2em;
        display:flex;
        flex-direction:column;
        justify-content: center;
    }
`
const WhatsApp = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    gap:10px;
    justify-content:center;
    margin: 1em 0 ;

    img{
        width:30px;
    }

    span{
        font-size: 25px;
        font-family: "Roboto", Sans-serif;
        color:#FFF;
        overflow:hidden;
    }
`
const Email = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    gap:5px;
    justify-content:center;
    margin: 1em 0 ;

    img{
        width:30px;
    }

    span{
        font-size: 25px;
        font-family: "Roboto", Sans-serif;
        color:#FFF;
        overflow:hidden;
    }
`
const ContatoDiv = styled.div`
    @media (min-width: 1080px){
        display:flex;
        justify-content: space-between;
        padding: 2em;
    }
    
`

const Contato = (props) => {
    return(
        <Container data-aos={props.efeito}>
            <Titulo espacamento='2em 0 1em 0'>Entre em contato</Titulo>
            <ContatoDiv>
                <Formulario>
                    <div>
                        <label for='Nome'>Nome</label>
                        <CampoTexto id='Nome' type='text' required="required" />
                    </div>
                    <div>
                        <label for ='email'>E-mail</label>
                        <CampoTexto id='email' type='email' required="required" />
                    </div>
                    <div>
                        <label for='telefone'>Telefone</label>
                        <CampoTexto id='telefone' type='tel' required="required" />
                    </div>   
                    <div>
                        <SelecaoDeRoteiro>
                            {ListaRoteiros.map( (item) => {
                                return(
                                    <option key={item.nome} required="required">{item.nome}</option>
                                )
                            })}
                        </SelecaoDeRoteiro>
                    </div>
                    <Botao>Enviar</Botao>
                </Formulario> 
                <CaixaTelefone>
                    <h4>Agência Responsável:</h4>
                    <Logo/>
                    <WhatsApp>
                        <img src={LogoWhatsapp} />
                        <span>(35)9 9941-3332</span>
                    </WhatsApp>
                    <Email>
                        <img src={LogoEmail} />
                        <span>Contato@exemplo.com.br</span>
                    </Email>
                </CaixaTelefone>
            </ContatoDiv>
        </Container>        
    )
}

export default Contato;