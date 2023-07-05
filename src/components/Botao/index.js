import { styled} from "styled-components"

const Btn = styled.button`
    background-color: #F6AF25;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color:#FFF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 16px;
    text-transform:uppercase;
    width:140px;
    `
const Botao = (props) => {
   return(
     <Btn data-aos={props.efeito}>{props.children}</Btn>
   )
}

export default Botao;