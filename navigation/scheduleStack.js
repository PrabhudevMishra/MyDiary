import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "../screens/scheduler";
import ScheduleDetails from "../screens/scheduleDetails";

const Stack = createStackNavigator();

const ScheduleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scheduler" component={ScheduleScreen} />
      <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
