import { styled } from "styled-components";

export const Container = styled.div`

    display:${props => props.display || 'block'};
    flex-wrap: ${props => props.wrap || ''};
    gap: ${props => props.gap || '0'};
    justify-content: ${props => props.alinhamento || ""};
    
    @media (min-width: 1080px){        
        padding-left: calc((100% - 1400px)/2);
        padding-right: calc((100% - 1400px)/2);
        margin:0 auto;
    }
`