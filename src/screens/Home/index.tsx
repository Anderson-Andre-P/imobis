import React from "react";
import { Header } from "../../components/Header";
import { Imovel } from "../../components/Imovel";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Imovel />
      <Imovel />
    </Container>
  );
}
