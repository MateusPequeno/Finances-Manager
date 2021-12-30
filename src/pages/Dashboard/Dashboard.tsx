import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../../components/Heading/Heading";
import { CategoryGraph } from "../../pages/Graphs/CategoryGraph/CategoryGraph";
import { GoalsGraph } from "../../pages/Graphs/GoalsGraph/GoalsGraph";
import { Box } from "../../styles/globalstyles";
import { IncomesMinusExpenses } from "../Graphs/IncomesMinusExpenses/IncomesMinusExpenses";
import { AdvicesGenerator } from "../Advices/Advices";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Log to show data "inside" local storage aka AsyncStorage.
AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (error, stores) => {
    stores.map((result, i, store) => {
      console.log("Dados :", { [store[i][0]]: store[i][1] }, "\n");
      return true;
    });
  });
});

export function Dashboard() {
  const dispatch = useDispatch();
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

  const dispatchDashboard = useDispatch();
  const { transactions } = useSelector((state) => state.trs);
  const prices = transactions.map((transaction: any) => transaction.price);
  const balance = prices.reduce(
    (prev: number, cur: number) => (prev += cur),
    0
  );
  const expense =
    prices
      .filter((price: number) => price < 0)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * -1;
  const income = expense + balance;

  return (
    <ScrollView style={{ backgroundColor: "#a8a6b6" }}>
      <Heading />
      <View style={styles.container}>
        <Box style={styles.boxSaldo}>
          <View style={styles.card}>
            <Text style={styles.saldoGeral} onPress={handleBalancePress}>
              Saldo Geral:
            </Text>
            <Text
              onPress={handleBalancePress}
              style={[
                styles.saldoGeral,
                { color: balance > 0 ? "#000000" : "#FF4500" },
              ]}
            >
              R$ :{Math.round(balance * 100) / 100}
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
                <Text style={styles.despesaValor}>
                  R$ : {Math.round(expense * 100) / 100}
                </Text>
              </View>
              <SimpleLineIcons
                name="arrow-up-circle"
                size={50}
                color={"green"}
                onPress={handleIncomesIconPress}
              />
              <View style={styles.textosIncAndDebt}>
                <Text style={styles.rendimento}> Rendimentos </Text>
                <Text style={styles.rendimentoValor}>
                  R$ :{Math.round(income * 100) / 100}
                </Text>
              </View>
            </View>
          </View>
        </Box>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.despesasCatego}>Despesas por categoria:</Text>
        {expense > 0 ? (
          <CategoryGraph />
        ) : (
          <Text style={styles.descriptionTextOBJ}>
            Nehuma despesa registrada
          </Text>
        )}
      </View>
      <Text style={styles.despesasCatego}>Metas/objetivos:</Text>
      <GoalsGraph />
      <Text style={styles.despesasCatego}>Gráfico rendimento - despesas:</Text>
      <IncomesMinusExpenses />
      <Text style={styles.despesasCatego}>Definir Limites de gastos:</Text>
      <Box style={styles.boxLimite}>
        <Text style={styles.despesasCatego}> Limite de gastos : {balance}</Text>
        <Text style={styles.despesasCatego}> Gastos atuais : {expense}</Text>
      </Box>
      <Text style={styles.despesasCatego}>
        Gráfico de desempenho dos rendimentos:
      </Text>
      <Text style={styles.despesasCatego}>
        Gráfico de desempenho das despesas:
      </Text>
      <Text style={styles.despesasCatego}>Dicas personalizadas:</Text>
      <AdvicesGenerator />
    </ScrollView>
  );
}
