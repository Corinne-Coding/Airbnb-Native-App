import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../assets/colors";
const { pinkAirbnb, grey, lightGrey, goldenAirbnb } = colors;

const ConnectionButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ConnectionButton;

const styles = StyleSheet.create({
  btn: {
    borderColor: pinkAirbnb,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 14,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  btnText: {
    fontSize: 18,
    color: grey,
  },
});
