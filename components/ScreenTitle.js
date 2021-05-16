import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../assets/colors";
const { pinkAirbnb, grey, lightGrey, goldenAirbnb } = colors;

const ScreenTitle = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default ScreenTitle;

const styles = StyleSheet.create({
  text: {
    color: grey,
    fontSize: 26,
  },
});
