import styled from 'styled-components'
import { CgMenu } from "react-icons/cg";


export const HeaderMenu = styled.div`
    width: 100vw;
    background-color: #0E0E10;
    height: 71px;
`;


export const ItemHeader = styled(CgMenu)`
    cursor: pointer;
    color:white;
    margin: 15px 0 0 12px;

    &:hover {
        color: #EC6271;
        transform: scale(1.2);
    }
`;