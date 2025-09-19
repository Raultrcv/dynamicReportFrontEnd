// Exemplo de como usar os novos estilos no seu componente
import React from "react";
import {
  Overlay,
  ContainerModal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  StyledInputContainer, // Importa o novo componente
  ButtonContainer,      // Importa o novo container de botões
  PrimaryButton,        // Importa o botão primário
  SecondaryButton,      // Importa o botão secundário
} from "./styles";
import { MdClose } from "react-icons/md";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa"; // Exemplo de ícones

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
          <SecondaryButton>Limpar</SecondaryButton>
          <PrimaryButton>Enviar</PrimaryButton>
        </ButtonContainer>
      </ContainerModal>
    </Overlay>
  );
}