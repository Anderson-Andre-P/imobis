import React from "react";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    // <Contain>
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <StatusBar
          style="light"
          backgroundColor="transparent"
          translucent={true}
        />
        <Home />
      </View>
    </ThemeProvider>
    // </Contain>
  );
}
