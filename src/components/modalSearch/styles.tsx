// styles.js
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
  width: 550px;
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
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #555A5F;
  border-radius: 15px;
  padding-left: 35px;
  box-sizing: border-box;
  font-size: 16px;

  &::placeholder {
    color: #000;
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #000;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 15px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

export const PrimaryButton = styled(Button)`
  background-color: #343A40;
  color: white;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  background-color: #343A40;
  color: #FFF;
  border: 1px solid #ccc;
`;