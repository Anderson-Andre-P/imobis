import React from "react";
import { Text } from "react-native";
import { perfilImg } from "../../assets";
import { Container, Head, Data, Name, ProfileAvatar, Icon } from "./styles";

export function Header() {
  return (
    <Container>
      <Head>
        <Data>
          <ProfileAvatar source={require("../../assets/perfil.png")} />
          <Name>Bom dia, Anderson</Name>
        </Data>
        <Icon name="map-pin" />
      </Head>
    </Container>
  );
}
