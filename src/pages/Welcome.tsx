import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import bckPng from "../../assets/coinsBck.jpg";
import { SafeAreaView, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../src/components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles/cssconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Welcome() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@tcc-app:user");
      setUserName(user || "");
    }
    loadStorageUserName();
  }, [userName]);
  async function handleStart() {
    try {
      let value = await AsyncStorage.getItem("@tcc-app:user");
      //If the name is not null we go to the dashboard directly
      if (value != null) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("Objectives");
      }
    } catch (error) {
      console.log("Failed to retrieve user name.");
    }
  }

  //Clear AsyncStorage Function
  const multiRemoveAsyncStorageData = async () => {
    const keys = ["@tcc-app:user"];
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      // remove error
    }
    console.log("Done");
  };
  return (
    <ImageBackground source={bckPng} resizeMode="cover" style={styles.bckImage}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Bem vindo {"\n"}
          {userName}
        </Text>
        <StatusBar style="auto" />
        <Text style={styles.descriptionTextMain}>
          Vamos te ajudar a alcançar a independência financeira, organizando
          suas finanças
          {"\n"}😊
        </Text>
        <TouchableOpacity style={{ marginBottom: "20%" }}>
          <Button title={"Continuar"} onPress={handleStart} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
