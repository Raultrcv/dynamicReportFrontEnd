// Modal.jsx
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
import { MdClose, MdAccessTime, MdCalendarToday, MdOutlineDirectionsCar, MdOutlineRoute } from 'react-icons/md';

export default function Modal() {
  return (
    <Overlay>
      <ContainerModal>
        <ModalHeader>
          <ModalTitle>Painel de Seleção</ModalTitle>{/**Tradução */}
          <CloseButton>
            <MdClose />
          </CloseButton>
        </ModalHeader>

        <InputGroup>
          <Input placeholder="Equipamento" />
          <Icon><MdOutlineDirectionsCar /></Icon>
        </InputGroup>

        <ModalFooter>
          <SecondaryButton>LIMPAR</SecondaryButton>{/**Tradução */}
          <PrimaryButton>ENVIAR</PrimaryButton>{/**Tradução */}
        </ModalFooter>
      </ContainerModal>
    </Overlay>
  );
}