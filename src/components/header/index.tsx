import { HeaderMenu, ItemHeader } from "./styles";


interface HeaderProps {
    onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps){
    return (
        <HeaderMenu>
            <ItemHeader size={36} onClick={onToggleSidebar} />
        </HeaderMenu> 
    )
}
