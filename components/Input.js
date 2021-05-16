import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../assets/colors";
const { pinkAirbnb, grey, lightGrey, goldenAirbnb } = colors;

const Input = ({ placeholder, setFunction, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={(text) => {
        setFunction(text);
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomColor: pinkAirbnb,
    borderBottomWidth: 1,
    width: "70%",
    marginTop: 30,
    height: 40,
  },
});
