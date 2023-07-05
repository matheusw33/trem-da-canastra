import { styled } from "styled-components";

export const Container = styled.div`

    display:${props => props.display || 'block'};
    flex-wrap: ${props => props.wrap || ''};
    gap: ${props => props.gap || '0'};
    
    @media (min-width: 1080px){
        width:80%;
        margin:0 auto;
    }
`