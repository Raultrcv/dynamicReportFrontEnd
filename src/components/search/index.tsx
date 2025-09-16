import { Container } from "./styles";
import React from "react";

interface MyComponentProps {
  children: React.ReactNode;
  onClick?: () => void; // <- Adiciona a prop onClick
}

const Search: React.FC<MyComponentProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
};

export default Search;
