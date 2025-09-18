import { useEffect, useState } from "react";
import { Container, ItemMenu, Title, Options, LinkMenu, Icon } from "./styles";



interface ManifestLink {
  name: string;
  path: string;
}


export default function Sidebar() {
  const [manifests, setManifests] = useState<ManifestLink[]>([]);


  useEffect(() => {
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

  return (
    <Container>
        <Title>Tracevia ITS</Title>{/**Tradução*/}
        <ItemMenu>
            {manifests.map((m) => (
          <Options key={m.path}>
            <LinkMenu to={`/${m.path}`}> <Icon size={25}/>  {m.name}</LinkMenu>
          </Options>
        ))}
        </ItemMenu>
    </Container>
)
}
