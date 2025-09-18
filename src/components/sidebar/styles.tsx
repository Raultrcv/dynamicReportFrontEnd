import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


export const Icon = styled(FaCircleArrowRight)`
  transform: translateY(5px);
  margin-right: 10px;
`;

export const Container = styled.div`
  width: 350px;
  flex-shrink: 0;
  background-color: #0E0E10;
  color: #ffffff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const CloseIcon = styled(IoClose)`
    position: absolute; 
    top: 15px; 
    right: 20px; 
    cursor: pointer;
    color: white;
    font-size: 18px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: normal;
  padding-left:30px;
  font-size: 21.5px;
  margin-bottom: 1.5rem;
  margin-top: 5px;
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

export const Concessionaire = styled.div`
  background-color: yellow;
  text-align:center;
  padding:10px;
  font-size:18px;
  color:black;
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