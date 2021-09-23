import { StatusBar } from "expo-status-bar";
import React from "react";
import organizeImg from "../../assets/management.png";
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

export function OrgOBJ() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Organizar finanças</Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <Text style={styles.descriptionText}>
            Para ter maior organização, vamos te mostrar gráficos de suas
            despesas, rendimentos, desenvolvimento e relação entre
            rendimentos-despesas.
          </Text>
        </View>
        <Image source={organizeImg} style={styles.image} resizeMode="contain" />
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
    fontFamily: fonts.heading,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
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
