import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../assets/colors";
const { pinkAirbnb, grey, lightGrey, goldenAirbnb } = colors;

const RedirectButton = ({ text, screen }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RedirectButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: grey,
  },
});
