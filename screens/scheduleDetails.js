import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TimePicker } from "react-native-simple-time-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class ScheduleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
    };
  }

  render() {
    return (
      <View>
        <TimePicker
          value={(this.state.hours, this.state.minutes)}
          onChange={(h, m) => {
            this.setState({
              hours: h,
              minutes: m,
            });
          }}
          isAmpm={true}
        />

        <View>
          <TextInput
            style={styles.formTextInput}
            onChangeText={(txt) => {
              this.setState({
                noteDetails: txt,
              });
            }}
            placeholder="Choose your time slot"
          />
          <TextInput
            style={styles.formTextInput}
            multiline={true}
            onChangeText={(txt) => {
              this.setState({
                noteDetails: txt,
              });
            }}
            placeholder="Write your task for the selected time slot"
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
});
