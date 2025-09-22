import styled from 'styled-components';

export const Container = styled.div`
    max-height: 500px;
    max-width: 100%;
    margin: 0 auto;
    overflow-y: auto; 
    background-color: #2C3034;
`;

export const ContainerTable = styled.div`
    margin: 0 auto;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    
    thead {
        position: sticky;
        top: 0;
        z-index: 1;

    }
`;