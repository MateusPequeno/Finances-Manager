import { StatusBar } from "expo-status-bar";
import React from "react";
import debtImg from "../../assets/debt.png";
import { SafeAreaView, Text, View, Image, ImageBackground } from "react-native";
import { Button } from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import bckImage from "../../assets/blueBck.jpg";
import styles from "../styles/cssconfig";
export function DebtOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <>
      <ImageBackground
        source={bckImage}
        resizeMode="cover"
        style={styles.bckImage}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.headerText}>Quitar minhas dividas</Text>
            <StatusBar style="auto" />
          </View>
          <View>
            <Text style={styles.descriptionTextOBJ}>
              Sair do vermelho é uma tarefa que demanda comprometimento e
              disciplina, mas não se preocupe, vamos te ajudar com isso.
            </Text>
          </View>
          <Image source={debtImg} style={styles.image} resizeMode="contain" />
          <Button title={"Vamos la!"} onPress={handlePress} />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
