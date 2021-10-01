import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
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
import styles from "../styles/cssconfig";
import bckImage from "../../assets/blueBck.jpg";

export function BalanceInsert() {
  //Determinando o padrão de blur e preenchimento como falso.
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
    setIsFilled(!!value); //value passa a ser um conteudo lógico, 1 verdadeiro 0 falso
    //Caso tenha conteúdo será verdadeiro, se não tiver falso.
    setBalance(value);
  }
  async function handleSubmit() {
    try {
      if (!balance)
        return Alert.alert("Me diga seu saldo mesmo que seja 0 ou negativo 😂");
      await AsyncStorage.setItem("@pcc-app:balance", balance);
      //Definindo a chave para salver o usuário assim como seu nome
      navigation.navigate("Dashboard", {
        title: "Prontinho",
        subtitle: "Teste Teste Teste",
        buttonTitle: "Começar",
        icon: "smile",
        nextScreen: "Dashboard",
      });
    } catch {
      Alert.alert("Não foi possível salvar o saldo de usuário");
    }
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
                    //&& seria o então
                  ]}
                  placeholder="00.00"
                  placeholderTextColor="white"
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
