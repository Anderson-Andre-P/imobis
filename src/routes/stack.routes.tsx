import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Onboarding } from "../screens/Onboarding";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="onboarding"
        component={Onboarding}
        options={{
          title: "Tela sobre",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#222",
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela inicial",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
