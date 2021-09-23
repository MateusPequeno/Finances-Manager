import { StatusBar } from "expo-status-bar";
import React from "react";
import investingImg from "../../assets/investing.png";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Button } from "../../src/components/Button";
import { ScrollView } from "react-native-gesture-handler";
import fonts from "../styles/fonts";

export function InvestOBJ() {
  return (
    <>
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
              diferentes tipos de investimento, para ajudar em sua organização,
              vamos juntar todos em nosso aplicativo, facilitando sua
              organização.
            </Text>
          </View>
          <Image
            source={investingImg}
            style={styles.image}
            resizeMode="contain"
          />
          <Button title={"Vamos la!"} onPress={() => {}} />
        </SafeAreaView>
      </ScrollView>
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
});
