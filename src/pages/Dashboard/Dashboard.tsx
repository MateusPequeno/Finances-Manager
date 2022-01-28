import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons, AntDesign, Feather } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../../components/Heading/Heading";
import { CategoryGraph } from "../../pages/Graphs/CategoryGraph/CategoryGraph";
import { GoalsGraph } from "../../pages/Graphs/GoalsGraph/GoalsGraph";
import { Box } from "../../styles/globalstyles";
import { IncomesMinusExpenses } from "../Graphs/IncomesMinusExpenses/IncomesMinusExpenses";
import { AdvicesGenerator } from "../Advices/Advices";
import { IncomesGraph } from "../Graphs/IncomesGraph/IncomesGraph";
import { OutcomesGraph } from "../Graphs/OutcomesGraph/OutcomesGraph";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

// Log to show data "inside" local storage aka AsyncStorage.
/* AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (error, stores) => {
    stores.map((result, i, store) => {
      console.log("Dados :", { [store[i][0]]: store[i][1] }, "\n");
      return true;
    });
  });
}); */

export function Dashboard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleIncomesIconPress() {
    navigation.navigate("IncomesInsert");
  }

  function handleOutcomesIconPress() {
    navigation.navigate("OutcomesInsert");
  }
  function handleGoalsPress() {
    navigation.navigate("GoalsInsert");
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

  const [hideData, setHideData] = useState(true);

  function changeHideDataStatus() {
    setHideData((prev) => !prev);
  }

  async function createNotifications() {
    //Notifications.cancelAllScheduledNotificationsAsync();

    const notificationId = Notifications.scheduleNotificationAsync({
      content: {
        title: "Boa noite! 📅",
        body: "Não esqueça de atualizar suas transações hoje! 💰 ",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        hour: 22,
        minute: 0,
        repeats: true,
      },
    });
    const notificationMonthEnd = Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá! 📅",
        body: "O mês ta acabando, não esqueça de atualizar suas transações desse mês! 🏦",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        seconds: 2628000,
      },
    });

    const notificationYearsEnding = Notifications.scheduleNotificationAsync({
      content: {
        title: "Obrigado! 😃",
        body: "Hoje faz um ano que está usando o FinancesManager!",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        seconds: 31536000,
      },
    });

    console.log("Finalizou createNotification");
  }
  useEffect(() => {
    createNotifications();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#443C8A" }}>
      <Heading />
      <View style={styles.container}>
        <Box style={styles.boxSaldo}>
          <View style={styles.card}>
            <Text style={styles.saldoGeral}>Saldo Geral:</Text>
            {hideData ? (
              <Text
                style={[
                  styles.saldoGeral,
                  { color: balance > 0 ? "#000000" : "#FF4500" },
                ]}
              >
                R$ :{Math.round(balance * 100) / 100}
              </Text>
            ) : (
              <Text
                style={[
                  styles.saldoGeral,
                  { color: balance > 0 ? "#000000" : "#FF4500" },
                ]}
              >
                R$ :
              </Text>
            )}
            {hideData ? (
              <Feather
                name="eye"
                size={20}
                color="black"
                onPress={() => {
                  changeHideDataStatus();
                }}
              />
            ) : (
              <Feather
                name="eye-off"
                size={20}
                color="black"
                onPress={() => {
                  changeHideDataStatus();
                }}
              />
            )}
            <View style={styles.incomesAndDebt}>
              <SimpleLineIcons
                name="arrow-down-circle"
                size={50}
                color={"red"}
                onPress={handleOutcomesIconPress}
              />
              <View style={styles.textosIncAndDebt}>
                <Text style={styles.despesa}> Despesas </Text>
                {hideData ? (
                  <Text style={styles.despesaValor}>
                    R$ : {Math.round(expense * 100) / 100}
                  </Text>
                ) : (
                  <Text style={styles.despesaValor}>R$ :</Text>
                )}
              </View>
              <SimpleLineIcons
                name="arrow-up-circle"
                size={50}
                color={"green"}
                onPress={handleIncomesIconPress}
              />
              <View style={styles.textosIncAndDebt}>
                <Text style={styles.rendimento}> Rendimentos </Text>
                {hideData ? (
                  <Text style={styles.rendimentoValor}>
                    R$ :{Math.round(income * 100) / 100}
                  </Text>
                ) : (
                  <Text style={styles.rendimentoValor}>R$ :</Text>
                )}
              </View>
            </View>
          </View>
        </Box>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.despesasCatego}>Gráfico de despesas:</Text>
        {expense > 0 ? (
          <CategoryGraph />
        ) : (
          <Text style={styles.descriptionTextOBJ}>
            Nehuma despesa registrada
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={handleGoalsPress} style={styles.goalsView}>
        <Text style={styles.despesasCatego}>Metas/objetivos: </Text>
        <AntDesign
          name="pluscircleo"
          size={28}
          color="#FFC062"
          style={styles.plusIcon}
        />
      </TouchableOpacity>
      <GoalsGraph />
      <Text style={styles.despesasCatego}>Gráfico rendimento - despesas:</Text>
      <IncomesMinusExpenses />
      <Text style={styles.despesasCatego}> Limites de gastos:</Text>
      <Box style={styles.boxLimite}>
        <Text style={styles.limitText}>Limite de gastos : {balance}</Text>
        <Text style={styles.limitText}> Gastos atuais : {expense}</Text>
      </Box>
      <Text style={styles.despesasCatego}>
        Gráfico de desempenho dos rendimentos:
      </Text>
      <IncomesGraph />
      <Text style={styles.despesasCatego}>
        Gráfico de desempenho das despesas:
      </Text>
      <OutcomesGraph />
      <Text style={styles.despesasCatego}>Dicas personalizadas:</Text>
      <AdvicesGenerator />
    </ScrollView>
  );
}
