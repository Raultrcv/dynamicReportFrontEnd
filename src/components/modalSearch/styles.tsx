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
  justify-content:space-between;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0;
  left: 50%;
  transform: translateX(115%)
  `;

export const CloseButton = styled.button`
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #FF3030;
    background-color: #FFF;
    box-shadow: none;
    transform: scale(1.1);
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;