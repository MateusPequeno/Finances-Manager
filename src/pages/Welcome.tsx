import { StatusBar } from "expo-status-bar";
import React from "react";
import welcomeImage from "../../assets/budget.png";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../src/components/Button";
import fonts from "../../src/styles/fonts";

export function Welcome() {
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate("Register");
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Bem vindo!</Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <Image
            source={welcomeImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.descriptionText}>
            Vamos te ajudar a alcançar a independência financeira, organizando
            suas finanças
            {"\n"}😊
          </Text>
        </View>

        <Button title={"Continuar"} onPress={handleStart} />
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
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    fontFamily: fonts.heading,
  },
  image: {
    // Dimensions para adaptar a imagem para diferentes dispositivos com diferentes resoluções
    height: Dimensions.get("window").width * 0.7,
  },
  descriptionText: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    marginTop: 10,
    fontFamily: fonts.text,
  },
});
