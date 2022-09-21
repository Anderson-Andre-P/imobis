import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  TextInit,
  ImageInit,
  Button,
  IconButton,
  TextButton,
} from "./styles";

export function Onboarding() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("home", {});
  }

  return (
    <Container>
      <Content>
        <TextInit>Encontre um novo lar para você e sua família</TextInit>

        <ImageInit source={require("../../assets/houseInit.png")} />

        <Button title="Entrar" onPress={openScreen}>
          {/* <IconButton /> */}
          <TextButton>Entrar</TextButton>
        </Button>
      </Content>
    </Container>
  );
}
