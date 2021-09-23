import { StatusBar } from "expo-status-bar";
import React from "react";
import savingImage from "../../assets/saving.png";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Button } from "../../src/components/Button";
import fonts from "../styles/fonts";

export function SavingOBJ() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Começar a poupar</Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <Text style={styles.descriptionText}>
            Com disciplina, consciência, comprometimento e atenção mais nosso
            app você conseguira poupar dinheiro para conquistar seus objetivos!
          </Text>
        </View>
        <Image source={savingImage} style={styles.image} resizeMode="contain" />
        <Button title={"Vamos la!"} onPress={() => {}} />
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
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    fontFamily: fonts.heading,
  },
  image: {
    width: 322,
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
