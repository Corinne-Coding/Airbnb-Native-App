import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Platform,
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../assets/colors";
const { pinkAirbnb, grey, lightGrey, goldenAirbnb } = colors;

// Components
import ConnectionButton from "../components/ConnectionButton";
import Input from "../components/Input";
import Logo from "../components/Logo";
import MultiLineInput from "../components/MultiLineInput";
import RedirectButton from "../components/RedirectButton";
import ScreenTitle from "../components/ScreenTitle";

const SignUpScreen = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Logo size="large" />

        <ScreenTitle text="Sign up" />

        <Input
          setFunction={setEmail}
          placeholder="email"
          secureTextEntry={false}
        />

        <Input
          setFunction={setUserName}
          placeholder="username"
          secureTextEntry={false}
        />

        <MultiLineInput
          setFunction={setDescription}
          placeholder="Describe yourself in a few words"
        />

        <Input
          setFunction={setPassword}
          placeholder="password"
          secureTextEntry={true}
        />

        <Input
          setFunction={setConfirmPassword}
          placeholder="confirm password"
          secureTextEntry={true}
        />

        <View style={styles.view}>
          <Text>error message</Text>
          <ConnectionButton text="Sign up" />
          <RedirectButton
            text="Already have an account ? Sign in"
            screen="SignIn"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    paddingTop: 30,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  view: {
    marginTop: 40,
    alignItems: "center",
  },
});
