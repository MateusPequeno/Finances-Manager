import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Button } from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import fonts from "../styles/fonts";
import blueBck from "../../assets/blueBck.jpg";

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
    <>
      <ImageBackground
        source={blueBck}
        resizeMode="cover"
        style={styles.blueBck}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.headerText}>Qual o seu objetivo?</Text>
            <StatusBar style="auto" />
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Cuidar das suas finanças fica mais fácil se soubermos seu
              objetivo.
            </Text>
          </View>

          <Button title={"Quitar minhas dividas"} onPress={handleDebt} />
          <Button title={"Começar a poupar"} onPress={handleSaving} />
          <Button title={"Começar a investir"} onPress={handleInvest} />
          <Button title={"Organizar finanças"} onPress={handleOrg} />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 300,
    height: Dimensions.get("window").width * 0.7,
  },
  descriptionText: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontFamily: fonts.text,
    padding: 10,
  },
  blueBck: {
    flex: 1,
    justifyContent: "center",
  },
});
