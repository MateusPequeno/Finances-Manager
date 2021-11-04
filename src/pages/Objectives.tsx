import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, ImageBackground } from "react-native";
import { Button } from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import bckImage from "../../assets/blueBck.jpg";
import styles from "../styles/cssconfig";

export function Objectives() {
  const navigation = useNavigation();
  function handleSaving() {
    navigation.navigate("SavingOBJ");
  }
  function handleOrg() {
    navigation.navigate("OrgOBJ");
  }
  function handleInvest() {
    navigation.navigate("InvestOBJ");
  }
  function handleDebt() {
    navigation.navigate("DebtOBJ");
  }
  return (
    <ImageBackground
      source={bckImage}
      resizeMode="cover"
      style={styles.bckImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Qual o seu objetivo?</Text>

        <View style={styles.objectivesView}>
          <Text style={styles.descriptionTextOBJ}>
            Cuidar das suas finanças fica mais fácil se soubermos seu objetivo.
          </Text>
          <Button title={"Quitar minhas dividas"} onPress={handleDebt} />
          <Button title={"Começar a poupar"} onPress={handleSaving} />
          <Button title={"Começar a investir"} onPress={handleInvest} />
          <Button title={"Organizar finanças"} onPress={handleOrg} />
        </View>
      </View>
    </ImageBackground>
  );
}
