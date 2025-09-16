import {
  Overlay,
  ContainerModal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  InputGroup,
  Input,
  Icon,
  ModalFooter,
  PrimaryButton,
  SecondaryButton
} from "./styles";
import { MdClose, MdOutlineDirectionsCar } from 'react-icons/md';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <Overlay onClick={onClose}>
      <ContainerModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Painel de Seleção</ModalTitle>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </ModalHeader>

        <InputGroup>
          <Input placeholder="Equipamento" />
          <Icon><MdOutlineDirectionsCar /></Icon>
        </InputGroup>

        <ModalFooter>
          <SecondaryButton>LIMPAR</SecondaryButton>
          <PrimaryButton>ENVIAR</PrimaryButton>
        </ModalFooter>
      </ContainerModal>
    </Overlay>
  );
}
