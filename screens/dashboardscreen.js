import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TopTabNavigator from "../navigation/topTabNavigator";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}
