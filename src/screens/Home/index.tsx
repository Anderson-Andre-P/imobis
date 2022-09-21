import React from "react";
import { Header } from "../../components/Header";
import { Imovel } from "../../components/Imovel";
import { Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

export function Home() {
  function openScreen() {
    navigation.navigate("onboarding");
  }

  const navigation = useNavigation();

  const route = useRoute();

  return (
    <Container>
      <Header />
      <Imovel />
      <Imovel />
    </Container>
  );
}
