import styled from 'styled-components';
import { CgMenu } from "react-icons/cg";
import { PiUserCircleFill } from "react-icons/pi";
import { MdNotificationsNone } from "react-icons/md";

export const HeaderMenu = styled.div`
  width: 100vw;
  background-color: #0E0E10;
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemHeader = styled(CgMenu)`
  cursor: pointer;
  color: white;
  margin-left: 20px;

  &:hover {
    color: #EC6271;
    transform: scale(1.2);
  }
`;

export const UserIcon = styled(PiUserCircleFill)`
  cursor: pointer;
  color: white;
  margin-right: 10px;


  &:hover {
    transform: scale(1.1);
  }
`;

export const Notification = styled(MdNotificationsNone)`
  cursor: pointer;
  color: white;

  &:hover {
    transform: scale(1.1);
    color: #EC6271;
  }
`;