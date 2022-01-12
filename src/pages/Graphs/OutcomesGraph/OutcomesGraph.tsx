import React, { useRef, useState } from "react";
import { Text, View, SectionList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../../../styles/globalstyles";
import styles from "./styles";
import { Colors, ProgressBar } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `#000000`,
};

export function OutcomesGraph() {
  const { transactions } = useSelector((state) => state.trs);

  const incomesInJan = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 0
  );
  const incomesInFev = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 1
  );

  const incomesInMar = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 2
  );
  const incomesInAbr = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 3
  );
  const incomesInMai = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 4
  );
  const incomesInJun = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 5
  );
  const incomesInJul = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 6
  );
  const incomesInAgo = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 7
  );
  const incomesInSet = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 8
  );

  const incomesInOut = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 9
  );

  const incomesInNov = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 10
  );

  const incomesInDez = transactions.filter(
    (transaction) =>
      transaction.price < 0 && new Date(transaction.addedTime).getMonth() === 11
  );

  const totalIncomesJan =
    incomesInJan
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesFev =
    incomesInFev
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesMar =
    incomesInMar
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesAbr =
    incomesInAbr
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesMai =
    incomesInMai
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesJun =
    incomesInJun
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesJul =
    incomesInJul
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomesAgo =
    incomesInAgo
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomeSet =
    incomesInSet
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomeOut =
    incomesInOut
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomeNov =
    incomesInNov
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const totalIncomeDez =
    incomesInDez
      .map((saldo) => saldo.price)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * 1;

  const data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: [
          totalIncomesJan * -1,
          totalIncomesFev * -1,
          totalIncomesMar * -1,
          totalIncomesAbr * -1,
          totalIncomesMai * -1,
          totalIncomesJun * -1,
          totalIncomesJul * -1,
          totalIncomesAgo * -1,
          totalIncomeSet * -1,
          totalIncomeOut * -1,
          totalIncomeNov * -1,
          totalIncomeDez * -1,
        ],
        strokeWidth: 2,
      },
    ],
  };
  return (
    <Box style={styles.boxCategoryGraph}>
      <LineChart
        data={data}
        width={Dimensions.get("window").width * 0.9}
        height={220}
        chartConfig={chartConfig}
      />
    </Box>
  );
}
