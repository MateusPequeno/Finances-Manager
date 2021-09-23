import { StatusBar } from "expo-status-bar";
import React from "react";
import debtImg from "../../assets/debt.png";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Button } from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import fonts from "../styles/fonts";

export function DebtOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("OutcomesInsert");
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Quitar minhas dividas</Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <Text style={styles.descriptionText}>
            Sair do vermelho é uma tarefa que demanda comprometimento e
            disciplina, mas não se preocupe, vamos te ajudar com isso.
          </Text>
        </View>
        <Image source={debtImg} style={styles.image} resizeMode="contain" />
        <Button title={"Vamos la!"} onPress={handlePress} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1932B1",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 50,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: Dimensions.get("window").width * 0.7,
  },
  descriptionText: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    padding: 10,
    fontFamily: fonts.text,
  },
});
