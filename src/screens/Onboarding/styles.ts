import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const TextInit = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 38px;
`;

export const ImageInit = styled.Image`
  width: 300px;
  height: 150px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 112px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const IconButton = styled(Feather)``;
