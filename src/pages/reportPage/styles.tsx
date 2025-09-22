import styled from 'styled-components';
import LogoConcessionaire from "../../assets/via_paulista.webp";

export const Container = styled.div`
`;

export const NameReport = styled.span`
  padding: 1rem;
  line-height: 1.75rem;
  margin-top: 0;
  margin-left: 150px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
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

export const Logo = styled.div`
  background-image: url(${LogoConcessionaire});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  text-align: center;
  left: 48.5%;
  width: 45px;
  height: 45px;
  display: inline-block;
  border-radius: 4px;
`;

export const Options = styled.option`
  color: black;
  font-size: 15px;
  border: 10px solid red;
  `;

export const SubmitButton = styled.button`
`;

export const ModalInput = styled.div`
  padding: 16px;
`;

export const Params = styled.div`
  margin-bottom: 16px;
`;

export const DateTime = styled.input`
  border: 1px solid #000;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  width: 88%;
  height: 35px;
  border-radius: 25px;
  background-color: #FFF;
  color: #000;

  &::-webkit-calendar-picker-indicator {
    filter: brightness(0);
    cursor: pointer;
    padding-right: 10px;
    font-size: 20px;
  }
  `;

export const Number = styled.input`
  border: 1px solid #000;
  padding: 0.25rem 0.5rem;
`;