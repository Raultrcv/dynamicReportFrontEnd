import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from "react-icons/fa6";

export const Icon = styled(FaCircleArrowRight)`
  transform: translateY(5px);
  margin-right: 10px;
`;

export const Container = styled.div`
  width: 350px;
  flex-shrink: 0;
  background-color: #0E0E10;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  padding-left:30px;
  font-size: 20px;
  margin-bottom: 1.5rem;
  margin-top: 0;
`;

export const ItemMenu = styled.ul`
  margin: 1rem 0 0; 
  padding: 0; 
  list-style-type: none; 
`;

export const Options = styled.li`
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export const LinkMenu = styled(Link)`
  color: #FFF;
  display: block; 
  padding: 10px;
  margin-left: 10px;
  text-decoration: none;
  widtt:100%;
  font-size: 17px;

  &:hover {
    background-color: #FFFFFF;
    color: #EC6271;
  }  
`;