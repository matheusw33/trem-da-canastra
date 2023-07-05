import { styled } from "styled-components";


const ImgRedesSociais = styled.img`
        width: 25px;
        height: 25px;
`
const ItemRedeSocial = (props) => {
    return(
            <li>
                <a href={props.link}>
                    <ImgRedesSociais src={props.img}/>
                </a>
            </li>
    )
}

export default ItemRedeSocial;