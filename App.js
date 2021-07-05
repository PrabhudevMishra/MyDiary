import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DashboardScreen from "./screens/dashboardscreen";
import WelcomeScreen from "./screens/welcomeScreen";

export default function App() {
  return <AppContainer />;
}

const switchNaviagtor = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  DashboardScreen: { screen: DashboardScreen },
});

const AppContainer = createAppContainer(switchNaviagtor);
