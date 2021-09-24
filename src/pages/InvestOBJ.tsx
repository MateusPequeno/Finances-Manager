import { StatusBar } from "expo-status-bar";
import React from "react";
import investingImg from "../../assets/investing.png";
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
import { ScrollView } from "react-native-gesture-handler";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/native";

export function InvestOBJ() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Register");
  }
  return (
    <>
      <ImageBackground source={blueBck} style={styles.blueBck}>
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.headerText}>Começar a investir</Text>
              <StatusBar style="auto" />
            </View>
            <View>
              <Text style={styles.descriptionText}>
                Uma máxima no mundo dos investimenos é a diversificação, porém
                isso pode deixar as coisas confusas, diversas corretoras com
                diferentes tipos de investimento, para ajudar em sua
                organização, vamos juntar todos em nosso aplicativo, facilitando
                sua organização.
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
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    fontFamily: fonts.heading,
  },
  image: {
    width: 200,
    height: Dimensions.get("window").width * 0.7,
  },
  descriptionText: {
    fontSize: 25,
    //textAlign: "justify",
    textAlign: "center",
    color: "white",
    padding: 10,
    fontFamily: fonts.text,
  },
  blueBck: {
    flex: 1,
  },
});
