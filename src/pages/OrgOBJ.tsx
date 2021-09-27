import { StatusBar } from "expo-status-bar";
import React from "react";
import organizeImg from "../../assets/management.png";
import bckImage from "../../assets/blueBck.jpg";
import { SafeAreaView, Text, View, Image, ImageBackground } from "react-native";
import { Button } from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/cssconfig";

export function OrgOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <>
      <ImageBackground source={bckImage} style={styles.bckImage}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.headerText}>Organizar finanças</Text>
            <StatusBar style="auto" />
          </View>
          <View>
            <Text style={styles.descriptionTextOBJ}>
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
