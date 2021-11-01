import React, { useRef } from "react";
import { View, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/cssconfig";

import { Box } from "../../components/theme";

export function AdvicesGenerator() {
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
    <Box style={styles.boxLimite}>
      {expense > income ? (
        <Text style={styles.advicesText}>
          Gastos maiores que rendimentos, você deve quitar todas as suas dividas
          o mais rápido possível.
        </Text>
      ) : (
        <Text style={styles.advicesText}>TESTE 2</Text>
      )}
    </Box>
  );
}
