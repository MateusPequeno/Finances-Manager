import { StatusBar } from "expo-status-bar";
import React from "react";
import welcomeImage from "../../assets/budget.png";
import bckPng from "../../assets/coinsBck.jpg";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../src/components/Button";
import fonts from "../../src/styles/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Welcome() {
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate("Objectives");
  }
  return (
    <>
      <ImageBackground
        source={bckPng}
        resizeMode="cover"
        style={styles.bckImage}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.headerText}>Bem vindo!</Text>
            <StatusBar style="auto" />
          </View>
          <View></View>
          <View>
            <Text style={styles.descriptionText}>
              Vamos te ajudar a alcançar a independência financeira, organizando
              suas finanças
              {"\n"}😊
            </Text>
          </View>
          <TouchableOpacity>
            <Button title={"Continuar"} onPress={handleStart} />
          </TouchableOpacity>
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
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    fontFamily: fonts.heading,
  },
  descriptionText: {
    fontSize: 25,
    textAlign: "center",
    color: "#FFC062",
    marginTop: 300,
    paddingHorizontal: 50,
    fontFamily: fonts.heading,
    fontWeight: "bold",
  },
  bckImage: {
    flex: 1,
    justifyContent: "center",
  },
});
