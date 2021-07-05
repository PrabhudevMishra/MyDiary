import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
export default class ScheduleScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ScheduleDetails");
          }}
          style={styles.createButton}
        >
          <Icon name="edit-3" type="feather" size="30" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#00bbff",
    shadowColor: "#000",
    borderRadius: 50,
    margin: 10,
  },
});
