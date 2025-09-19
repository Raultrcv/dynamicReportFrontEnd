import styled from 'styled-components';

export const Container = styled.div``;

export const NameReport = styled.span`
  padding: 1rem;
  line-height: 1.75rem;
  margin-top: 0;
  margin-left: 150px;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const Title = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 1rem; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  & > button:not(:last-child) {
    margin-right: 5px; 
  }
`;

export const OpenModal = styled.button`
  background-color: #343a40;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  padding: 0.5rem;
`;

export const ButtonExcel = styled.button`
  background-color: #343a40;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  padding: 0.5rem;
`;

export const Logo = styled.span`
  background-color: purple;
  text-align: center;
  width: 50px;
  display: inline-block;
`;