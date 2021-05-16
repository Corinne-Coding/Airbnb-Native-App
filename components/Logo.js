import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = ({ size }) => {
  return (
    <Image
      style={
        size === "large"
          ? [styles.largeLogo, styles.mgb]
          : [styles.smallLogo, styles.mgb]
      }
      resizeMode="contain"
      source={require("../assets/logo-airbnb.png")}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  largeLogo: {
    height: 80,
    width: 100,
  },
  smallLogo: {
    height: 40,
    width: 40,
  },
  mgb: {
    marginBottom: 10,
  },
});
