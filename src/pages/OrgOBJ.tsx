import { StatusBar } from "expo-status-bar";
import React from "react";
import organizeImg from "../../assets/management.png";
import blueBck from "../../assets/blueBck.jpg";
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
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/native";

export function OrgOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <>
      <ImageBackground source={blueBck} style={styles.blueBck}>
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
          <Image
            source={organizeImg}
            style={styles.image}
            resizeMode="contain"
          />
          <Button title={"Vamos la!"} onPress={handlePress} />
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
  blueBck: {
    flex: 1,
  },
});
