import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import UserImg from "../../assets/UserAvatar.png";
import fonts from "../styles/fonts";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export function Dashboard() {
  //ARMAZENAR ESTADO
  const navigation = useNavigation();
  function handleBalancePress() {
    navigation.navigate("BalanceInsert");
  }
  function handleIncomesIconPress() {
    navigation.navigate("IncomesInsert");
  }
  function handleOutcomesIconPress() {
    navigation.navigate("OutcomesInsert");
  }
  const [userName, setUserName] = useState<string>();
  const [userBalance, setUserBalance] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@pcc-app:user");
      setUserName(user || "");
    }
    loadStorageUserName();
  }, [userName]);
  useEffect(() => {
    async function loadStorageUserBalance() {
      const balance = await AsyncStorage.getItem("@pcc-app:balance");
      setUserBalance(balance || "");
    }
    loadStorageUserBalance();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.greeting}>Olá</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <Image source={UserImg} style={styles.image} />
        </View>
        <View style={styles.card}>
          <Text style={styles.saldoGeral} onPress={handleBalancePress}>
            Saldo Geral:
          </Text>
          <Text onPress={handleBalancePress} style={styles.saldoGeral}>
            R$ :{userBalance}
          </Text>
          <AntDesign name="eye" size={20} color="grey" />
          <View style={styles.incomesAndDebt}>
            <SimpleLineIcons
              name="arrow-down-circle"
              size={50}
              color={"red"}
              onPress={handleOutcomesIconPress}
            />
            <View style={styles.textosIncAndDebt}>
              <Text style={styles.despesa}> Despesas </Text>
              <Text style={styles.despesaValor}> R$ : 4500.00 </Text>
            </View>
            <SimpleLineIcons
              name="arrow-up-circle"
              size={50}
              color={"green"}
              onPress={handleIncomesIconPress}
            />
            <View style={styles.textosIncAndDebt}>
              <Text style={styles.rendimento}> Rendimentos </Text>
              <Text style={styles.rendimentoValor}> R$ : 6000.00 </Text>
            </View>
          </View>
        </View>
        <Text style={styles.despesasCatego}>Despesas por categoria:</Text>
        <Text style={styles.despesasCatego}>Metas/objetivos:</Text>
        <Text style={styles.despesasCatego}>
          Gráfico rendimento - despesas:
        </Text>
        <Text style={styles.despesasCatego}>Definir Limites de gastos:</Text>
        <Text style={styles.despesasCatego}>
          Gráfico de desempenho dos rendimentos:
        </Text>
        <Text style={styles.despesasCatego}>
          Gráfico de desempenho das despesas:
        </Text>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    padding: 20,
    backgroundColor: "#1932B1",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: "#ffffff",
    fontFamily: fonts.text,
    marginTop: 10,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: "#ffffff",
    lineHeight: 40,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  saldoGeral: {
    fontSize: 25,
    fontFamily: fonts.text,
  },

  incomesAndDebt: {
    marginTop: 6,
    flexDirection: "row",
  },
  despesa: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "red",
    fontWeight: "bold",
  },
  despesaValor: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "red",
    fontWeight: "bold",
  },
  textosIncAndDebt: {
    flexDirection: "column",
  },
  rendimento: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "green",
    fontWeight: "bold",
  },
  rendimentoValor: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "green",
    fontWeight: "bold",
  },
  despesasCatego: {
    fontSize: 20,
    fontFamily: fonts.montText,
    color: "black",
    fontWeight: "bold",
    padding: 28,
  },
});
