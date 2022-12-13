import styled from "styled-components";

interface Prop{
    isChosen : boolean
}

export const Border = styled.div<Prop>`
    border : solid ;  
    border-radius : 10px;      
    border-color :  orange;
    &:hover{
        border-color :  black;
        font-weight:bold;
    }
    
`