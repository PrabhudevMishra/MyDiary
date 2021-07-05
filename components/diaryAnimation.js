import React from "react";
import LottieView from "lottie-react-native";

export default class DiaryAnimation extends React.Component {
  render() {
    return (
      <LottieView
        source={require("../assets/9810-notes.json")}
        autoPlay
        loop
        style={{ width: "80%", alignSelf: 'center'}}
      />
    );
  }
}
