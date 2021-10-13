import { StatusBar } from "expo-status-bar";
import React from "react";
import savingImage from "../../assets/saving.png";
import { SafeAreaView, Text, View, Image, ImageBackground } from "react-native";
import { Button } from "../../src/components/Button";
import bckImage from "../../assets/blueBck.jpg";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/cssconfig";
export function SavingOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Começar a poupar</Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <Text style={styles.descriptionTextOBJ}>
            Com disciplina, consciência, comprometimento e atenção mais nosso
            app você conseguira poupar dinheiro para conquistar seus objetivos!
          </Text>
        </View>
        <Image source={savingImage} style={styles.image} resizeMode="contain" />
        <Button title={"Vamos la!"} onPress={handlePress} />
      </SafeAreaView>
    </ImageBackground>
  );
}
