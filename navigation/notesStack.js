import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NoteScreen from "../screens/notes";
import NoteDetail from "../screens/noteDetails";

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={NoteScreen} />
      <Stack.Screen name="NoteDetails" component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default NotesStack;
