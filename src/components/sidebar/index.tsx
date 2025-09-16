import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, ItemMenu, Title } from "./styles";


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
        <Title>Relatórios</Title>{/**Tradução*/}
        <ItemMenu>
            {manifests.map((m) => (
          <li key={m.path}>
            <Link to={`/${m.path}`}>{m.name}</Link>
          </li>
        ))}
        </ItemMenu>
    </Container>
)
}
