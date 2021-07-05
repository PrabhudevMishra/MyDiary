import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import db from "../config";
import firebase from "firebase";
export default class NoteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      noteDetails: [],
      userId: firebase.auth().currentUser.email,
    };
  }
  renderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.note_details}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        bottomDivider
      />
    );
  };
  keyExtractor = (item, index) => index.toString();
  getNoteDetails = () => {
    db.collection("notes")
      .where("user_id", "==", this.state.userId)
      .onSnapshot((snapshot) => {
        var notes = snapshot.docs.map((doc) => doc.data());
        this.setState({
          noteDetails: notes,
        });
      });
  };
  componentDidMount() {
    this.getNoteDetails();
  }
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("NoteDetails");
            }}
            style={styles.createButton}
          >
            <Icon
              name="circle-with-plus"
              type="entypo"
              size="40"
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.noteDetails}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
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
