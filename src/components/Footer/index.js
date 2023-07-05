import styled from 'styled-components';
import { Container } from '../Container';

const Rodape = styled.footer`    
    background-color: #000;
    color:#FFF;
    Padding: 2em;
    }
`   
const Colunas = styled.div`
    
    font-weight:300;
    font-family: 'Roboto', Sans-serif;
    width: 200px;
    margin-bottom: 2em;

    h4{
        font-size: 25px;
        margin-bottom:1em;
        overflow:hidden;
    }

    ul{
        display:flex;
        flex-direction: column;
        gap:1em;

        li{
            overflow:hidden;
        }

        a{
            color: #FFF;
            text-decoration: none;
            cursor:pointer;
        }
`

const Footer = (props) => {
    return(
        <Rodape>
            <Container data-aos={props.efeito} alinhamento="space-between" display='flex' wrap='wrap' gap='2em'>
                <Colunas>
                    <h4>Matheus Cruz</h4>
                    <ul>
                        <li>28 Anos</li>
                        <li>Rio de Janeiro</li>
                        <li>(21) 99153-7608</li>
                        <li>matheusw3314@gmail.com</li>
                    </ul>
                </Colunas>
                <Colunas>
                    <h4>Skills</h4>
                    <ul>
                        <li>React - Em progresso</li>
                        <li>JavaScript</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                    </ul>
                </Colunas>
                <Colunas>
                    <h4>Redes Socias</h4>
                    <ul>
                        <li><a target="_blank" href="https://www.linkedin.com/in/matheuscruzw16/">Linkedin</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/rlxmts/">Instagram</a></li>
                        <li><a target="_blank" href="https://github.com/matheusw33">Github</a></li>
                        <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5521991537608">WhatsApp</a></li>
                    </ul>
                </Colunas>  
            </Container>          
        </Rodape>
    )
};

export default Footer; 