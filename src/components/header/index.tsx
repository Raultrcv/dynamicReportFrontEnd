import { 
    HeaderMenu,
    ItemHeader,
    Notification,
    UserIcon,
    RightIcons
} from "./styles";


interface HeaderProps {
    onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps){
    return (
        <HeaderMenu>
            <ItemHeader size={36} onClick={onToggleSidebar} />
            <RightIcons>
                <Notification size={25} />
                <UserIcon size={36} />
            </RightIcons>
        </HeaderMenu> 
    )
}
