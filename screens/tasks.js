import firebase from "firebase";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  CheckBox,
} from "react-native";
import { Icon, ListItem } from "react-native-elements";
import db from "../config";

export default class TaskScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      tasks: [],
      task: "",
      isTaskDone: false,
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addTask = () => {
    if (this.state.task.length > 0) {
      var userId = this.state.userId;
      var randTaskId = this.createUniqueId();
      db.collection("tasks").add({
        task_name: this.state.task,
        task_id: randTaskId,
        user_id: userId,
        isTaskDone: false,
      });
      this.setState({
        task: "",
      });
    } else {
      Alert.alert("Please write your task.");
    }
  };

  updateTaskDoneStatus = () => {
    db.collection("tasks").doc(doc.id).update({
      isTaskDone: true,
    });
  };

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.task_name}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        leftElement={
          <CheckBox
            value={this.state.isTaskDone}
            onValueChange={this.updateTaskDoneStatus}
            //style={styles.checkStyle}
          />
        }
        rightElement={
          <TouchableOpacity
            onPress={() => {
              this.deleteTask(item);
            }}
          >
            <Icon name="delete" type="MaterialCommunityIcons" color="#000" />
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  keyExtractor = (item, index) => index.toString();

  getTaskDetails = () => {
    db.collection("tasks")
      .where("user_id", "==", this.state.userId)
      .onSnapshot((snapshot) => {
        var taskList = [];
        snapshot.docs.map((doc) => {
          var task = doc.data();
          task["doc_id"] = doc.id;
          taskList.push(task);
          console.log(taskList);
        });
        this.setState({
          tasks: taskList,
        });
      });
  };

  deleteTask = (item) => {
    db.collection("tasks")
      .doc(item.doc_id)
      .delete()
      .then(() => {
        Alert.alert("Task successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  componentDidMount() {
    this.getTaskDetails();
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={[
              styles.formTextInput,
              { flex: 0.7, marginBottom: 16, marginLeft: 40 },
            ]}
            placeholder={"Write your task"}
            onChangeText={(txt) => {
              this.setState({ task: txt });
            }}
            value={this.state.task}
          />

          <TouchableOpacity
            onPress={() => {
              this.addTask();
            }}
            style={{ flex: 0.3 }}
          >
            <Icon name="add-to-list" type="entypo" size="30" />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.tasks}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: "80%",
    height: 40,
    alignSelf: "center",
    borderColor: "blue",
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 20,
    padding: 5,
  },

  checkStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
