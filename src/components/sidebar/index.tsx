import { useEffect, useState } from "react";
import { Container, ItemMenu, Title, Options, LinkMenu, Icon, CloseIcon, Concessionaire } from "./styles";

interface ManifestLink {
    name: string;
    path: string;
}

interface SidebarProps {
    onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
    const [manifests, setManifests] = useState<ManifestLink[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);

        const token = localStorage.getItem("token");
        console.log("token", token);
        fetch("http://localhost:8080/manifests", {
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
        })
            .then((res) => res.json())
            .then(setManifests);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 300); 
    };

    return (
        <Container $isOpen={isOpen}> 
            <CloseIcon onClick={handleClose} />
            <Title>Tracevia ITS</Title>
            <Concessionaire>Via Paulista</Concessionaire>
            <ItemMenu>
                {manifests.map((m) => (
                    <Options key={m.path}>
                        <LinkMenu to={`/${m.path}`} onClick={handleClose}>
                            <Icon size={25} /> {m.name}
                        </LinkMenu>
                    </Options>
                ))}
            </ItemMenu>
        </Container>
    );
}