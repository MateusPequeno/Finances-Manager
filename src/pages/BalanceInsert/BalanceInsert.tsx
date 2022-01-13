import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import bckImage from "../../../assets/blueBck.jpg";

export function BalanceInsert() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [balance, setBalance] = useState<string>();
  const navigation = useNavigation();
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!balance);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setBalance(value);
  }

  return (
    <ImageBackground
      source={bckImage}
      resizeMode="cover"
      style={styles.bckImage}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <View style={styles.form}>
                <Text style={styles.emoji}>😀</Text>
                <Text style={styles.title}>Atualize seu saldo </Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" },
                  ]}
                  placeholder="00.00"
                  placeholderTextColor="white"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                />
                <View style={styles.footer}>
                  <Button title="Continuar" onPress={() => {}} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
