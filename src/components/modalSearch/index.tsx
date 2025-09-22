// Exemplo de como usar os novos estilos no seu componente
import React from "react";
import {
  Overlay,
  ContainerModal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ButtonContainer,     
} from "./styles";
import { MdClose } from "react-icons/md";

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <Overlay onClick={onClose}>
      <ContainerModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Painel de Seleção</ModalTitle>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </ModalHeader>


        {children}

        <ButtonContainer>
        </ButtonContainer>
      </ContainerModal>
    </Overlay>
  );
}