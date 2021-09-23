import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import fonts from "../styles/fonts";

export function BalanceInsert() {
  //Determinando o padrão de blur e preenchimento como falso.
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [balance, setUserBalance] = useState<Float32List>(); // para tipar o dado se coloca o string
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
    setUserBalance(value);
  }
  async function handleSubmit() {
    try {
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}>😀</Text>
              <Text style={styles.title}>Qual seu saldo atual ?</Text>
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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1932B1",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  emoji: {
    fontSize: 30,
  },
  input: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  title: {
    marginTop: 20, // Espaço o titulo do icone
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.heading,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 0,
  },
});
