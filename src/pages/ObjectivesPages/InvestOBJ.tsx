import { StatusBar } from "expo-status-bar";
import React from "react";
import investingImg from "../../../assets/investing.png";
import bckImage from "../../../assets/blueBck.jpg";
import { SafeAreaView, Text, View, Image, ImageBackground } from "react-native";
import { Button } from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/cssconfig";

export function InvestOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.headerText}>Começar a investir</Text>
          </View>
          <View>
            <Text style={styles.descriptionTextOBJ}>
              Uma máxima no mundo dos investimenos é a diversificação, o que
              leva o investidor a ter diversos tipos de investimento, para
              ajudar em sua organização, vamos juntar todos em nosso aplicativo.
            </Text>
          </View>
          <Image
            source={investingImg}
            style={styles.image}
            resizeMode="contain"
          />
          <Button title={"Vamos la!"} onPress={handlePress} />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}
