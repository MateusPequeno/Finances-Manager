import React from "react";
import investingImg from "../../../../assets/investing.png";
import bckImage from "../../../../assets/blueBck.jpg";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function InvestOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Começar a investir</Text>
        <Text style={styles.descriptionTextOBJ}>
          Uma máxima no mundo dos investimenos é a diversificação, o que leva o
          investidor a ter diversos tipos de investimento, para ajudar em sua
          organização, vamos juntar todos em nosso aplicativo.
        </Text>
        <Image
          source={investingImg}
          style={styles.debtImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={{ marginBottom: "15%" }}>
          <Button title={"Vamos la!"} onPress={handlePress} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
