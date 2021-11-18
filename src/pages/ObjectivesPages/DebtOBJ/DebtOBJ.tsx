import { StatusBar } from "expo-status-bar";
import React from "react";
import debtImg from "../../../../assets/debt.png";
import { SafeAreaView, Text, View, Image, ImageBackground } from "react-native";
import { Button } from "../../../../src/components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import bckImage from "../../../../assets/blueBck.jpg";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
export function DebtOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <ImageBackground
      source={bckImage}
      resizeMode="cover"
      style={styles.bckImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Quitar minhas dividas</Text>
        <StatusBar style="auto" />
        <View style={{ flex: 2, alignItems: "center" }}>
          <Text style={styles.descriptionTextOBJ}>
            Sair do vermelho é uma tarefa que demanda comprometimento e
            disciplina, mas não se preocupe, vamos te ajudar com isso.
          </Text>
          <Image
            source={debtImg}
            style={styles.debtImage}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={{ marginBottom: "10%" }}>
          <Button title={"Vamos la!"} onPress={handlePress} />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
