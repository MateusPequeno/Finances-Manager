import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button/Button";
import bckImage from "../../../assets/blueBck.jpg";
import styles from "./styles";

export function Register() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [balance, setBalance] = useState();
  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }
  function handleInputChangeBalance(value: React.SetStateAction<undefined>) {
    setIsFilled(!!value);
    setBalance(value);
  }
  /*<Text style={styles.title}>Qual o seu Saldo total atual?</Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" },
                  ]}
                  placeholder="10000.00"
                  placeholderTextColor="grey"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChangeBalance}
                />*/
  async function handleSubmit() {
    if (!name) return Alert.alert("Me diga seu nome antes de continuarmos 😂");
    /* (if (!balance)
    return Alert.alert("Me diga seu saldo mesmo que seja 0 ou negativo 😂");
    */
    try {
      await AsyncStorage.setItem("@tcc-app:user", name);
      //  await AsyncStorage.setItem("@tcc-app:balance", JSON.stringify(balance));
      navigation.navigate("Dashboard");
    } catch {
      Alert.alert("Não foi possível salvar o nome de usuário");
    }
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <View style={styles.form}>
                <Text style={styles.emoji}>😀</Text>
                <Text style={styles.title}>
                  Como podemos {"\n"}
                  chamar você?
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" },
                  ]}
                  placeholder="Digite seu nome"
                  placeholderTextColor="grey"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                />
                <View style={styles.footer}>
                  <Button title="Continuar" onPress={handleSubmit} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
