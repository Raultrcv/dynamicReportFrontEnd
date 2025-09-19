import type React from "react";
import {
  Overlay,
  ContainerModal,
  ModalHeader,
  ModalTitle,
  CloseButton,

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
          <ModalTitle>Painel de Seleção</ModalTitle>{/**Tradução */}
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </ModalHeader>

        {children && <div>{children}</div>}


      </ContainerModal>
    </Overlay>
  );
}
