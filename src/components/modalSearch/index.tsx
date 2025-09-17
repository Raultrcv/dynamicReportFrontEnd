import type React from "react";
import {
  Overlay,
  ContainerModal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalFooter,
  PrimaryButton,
  SecondaryButton
} from "./styles";
import { MdClose } from "react-icons/md";

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode; // recebe conteúdo externo
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

        {children && <div>{children}</div>}

        <ModalFooter>
          <SecondaryButton>LIMPAR</SecondaryButton>
          <PrimaryButton>ENVIAR</PrimaryButton>
        </ModalFooter>
      </ContainerModal>
    </Overlay>
  );
}
