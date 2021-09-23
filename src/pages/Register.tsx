import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import fonts from "../styles/fonts";

export function Register() {
  //Determinando o padrão de blur e preenchimento como falso.
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>(); // para tipar o dado se coloca o string
  const [balance, setBalance] = useState<string>();
  const navigation = useNavigation();
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputChange(value: string) {
    setIsFilled(!!value); //value passa a ser um conteudo lógico, 1 verdadeiro 0 falso
    //Caso tenha conteúdo será verdadeiro, se não tiver falso.
    setName(value);
  }
  function handleInputChangeBalance(value: string) {
    setIsFilled(!!value); //value passa a ser um conteudo lógico, 1 verdadeiro 0 falso
    //Caso tenha conteúdo será verdadeiro, se não tiver falso.
    setBalance(value);
  }
  async function handleSubmit() {
    if (!name) return Alert.alert("Me diga seu nome antes de continuarmos 😂");
    if (!balance)
      return Alert.alert("Me diga seu saldo mesmo que seja 0 ou negativo 😂");
    //chave da informação , segundo elemento é o valor
    //Async pois não é imediato e await para aguardar
    try {
      await AsyncStorage.setItem("@pcc-app:user", name);
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
      Alert.alert("Não foi possível salvar o nome de usuário");
    }
  }
  return (
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
                  //&& seria o então
                ]}
                placeholder="Digite seu nome"
                placeholderTextColor="grey"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <Text style={styles.title}>Qual o seu Saldo total atual?</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: "#FFC062" },
                ]}
                placeholder=" 10000.00  "
                placeholderTextColor="grey"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChangeBalance}
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
    paddingHorizontal: 20,
    alignItems: "center",
  },
  emoji: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fcfcfc",
    backgroundColor: "#ffffff",
    color: "#000",
    width: "100%",
    fontSize: 18,
    marginTop: 15,
    padding: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  title: {
    marginTop: 20, // Espaço o titulo do icone
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.heading,
  },
  subTitle: {
    marginTop: 10, // Espaço o titulo do icone
    fontSize: 25,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.text,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 0,
  },
});
