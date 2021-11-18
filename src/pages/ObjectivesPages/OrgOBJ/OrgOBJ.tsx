import { StatusBar } from "expo-status-bar";
import React from "react";
import organizeImg from "../../../../assets/management.png";
import bckImage from "../../../../assets/blueBck.jpg";
import { SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { Button } from "../../../../src/components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export function OrgOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Organizar finanças</Text>
        <StatusBar style="auto" />
        <Text style={styles.descriptionTextOBJ}>
          Para ter maior organização, vamos te mostrar gráficos de suas
          despesas, rendimentos, desenvolvimento e relação entre
          rendimentos-despesas.
        </Text>
        <Image
          source={organizeImg}
          style={styles.debtImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={{ marginBottom: "15%" }}>
          <Button title={"Vamos la!"} onPress={handlePress} />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
