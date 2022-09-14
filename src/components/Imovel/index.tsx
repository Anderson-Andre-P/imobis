import React from "react";

import {
  Container,
  ImageContent,
  HouseImage,
  HouseContent,
  TypeHouse,
  DataHouse,
  TypeAnunce,
  Price,
  Bedrooms,
  Restrooms,
  Vacancies,
  Address,
} from "./styles";

export function Imovel() {
  return (
    <Container>
      <ImageContent>
        <HouseImage source={require("../../assets/house.png")} />
      </ImageContent>
      <HouseContent>
        <DataHouse>
          <TypeHouse>Casa • </TypeHouse>
          <TypeAnunce>Venda</TypeAnunce>
        </DataHouse>
        <Price>R$ 199.999</Price>
        <DataHouse>
          <Bedrooms>4 quartos</Bedrooms>
          <Restrooms> • 2 banheiros</Restrooms>
          <Vacancies> • 2 vagas</Vacancies>
        </DataHouse>
      </HouseContent>
      <Address>Rua Miguel Januário - Santa Isabel</Address>
    </Container>
  );
}
