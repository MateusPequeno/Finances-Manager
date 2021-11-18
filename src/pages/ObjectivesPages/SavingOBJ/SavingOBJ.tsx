import { StatusBar } from "expo-status-bar";
import React from "react";
import savingImage from "../../../../assets/saving.png";
import { SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { Button } from "../../../../src/components/Button/Button";
import bckImage from "../../../../assets/blueBck.jpg";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
export function SavingOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Começar a {"\n"}poupar</Text>
        <StatusBar style="auto" />
        <Text style={styles.descriptionTextOBJ}>
          Com disciplina, consciência, comprometimento e atenção mais nosso app
          você conseguira poupar dinheiro para conquistar seus objetivos!
        </Text>
        <Image
          source={savingImage}
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
