import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding-top: 20px;
  align-items: center;
`;

export const Head = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Data = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 500;
`;

export const ProfileAvatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;
