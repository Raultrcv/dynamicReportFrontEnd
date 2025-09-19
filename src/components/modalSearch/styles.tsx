import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ContainerModal = styled.div`
  width: 450px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0;
  flex: 1;
  text-align: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  padding: 0;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    color: #EC6271;
    background-color: #FFF;
    box-shadow: none;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 8px 12px;
  background-color: #f9f9f9;
  margin-bottom: 15px;
  
  input, select, .multi-select-value {
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
  
  .icon {
    margin-right: 8px;
    color: #555;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #ccc;
  
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`

`;

export const SecondaryButton = styled(Button)`

`;