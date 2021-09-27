import { StatusBar } from "expo-status-bar";
import React from "react";
import bckPng from "../../assets/coinsBck.jpg";
import { SafeAreaView, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../src/components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles/cssconfig";

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
            <Text style={styles.descriptionTextMain}>
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
