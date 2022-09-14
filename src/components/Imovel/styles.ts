import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImageContent = styled.View`
  width: 100%;
  padding: 0 20px;
`;

export const HouseImage = styled.Image`
  padding: 20px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const DataHouse = styled.View`
  display: flex;
  flex-direction: row;
  width: 350px;
  padding: 10px 10px;
`;

export const HouseContent = styled.View`
  background-color: white;
  align-items: flex-start;
  /* width: 100%; */
  border: 1px solid #aaa;
  /* margin-left: 40px; */
  /* margin-right: 40px; */
  margin: 0 20px;
`;

export const TypeHouse = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const TypeAnunce = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Price = styled.Text`
  padding: 0 10px;
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Bedrooms = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Restrooms = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Vacancies = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Address = styled.Text`
  border: 1px solid #aaa;
  width: 350px;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  color: ${({ theme }) => theme.colors.text};
`;
