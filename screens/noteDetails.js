import React from "react";
import {
  Alert,
  requireNativeComponent,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import db from "../config";
import firebase from "firebase";
export default class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      noteDetails: "",
      userId: firebase.auth().currentUser.email,
    };
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.formTextInput}
          multiline={true}
          onChangeText={(txt) => {
            this.setState({
              noteDetails: txt,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            db.collection("notes").add({
              note_details: this.state.noteDetails,
              user_id: this.state.userId,
            });
            Alert.alert("Note saved sucessfully.");
            this.props.navigation.navigate("Notes");
          }}
          style={styles.noteSaveBtn}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "blue",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
  },
  noteSaveBtn: {
    marginTop: 40,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "yellow",
    shadowColor: "#000",
    borderRadius: 30,
  },
});
