import { Container } from "./styles";
import React from "react";

interface MyComponentProps {
    children: React.ReactNode;
}

const Search: React.FC<MyComponentProps> = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Search;