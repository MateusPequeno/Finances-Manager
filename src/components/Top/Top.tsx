import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../../styles/globalstyles";
import moment from "moment";

export function Top() {
  const dispatch = useDispatch();
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
    <View style={styles.containerTop}>
      <Box style={styles.boxHeader}>
        <Text style={styles.topText}>{moment().format("LL")}</Text>
        <View style={styles.rowConfig}>
          <View style={styles.columnConfig}>
            <Text style={styles.topText}> Rendimentos</Text>
            <Text style={styles.rendimento}>
              $: {Math.round(income * 100) / 100}
            </Text>
          </View>
          <View style={styles.columnConfig}>
            <Text style={styles.topText}> Despesas</Text>
            <Text style={styles.despesa}>
              $: -{Math.round(expense * 100) / 100}
            </Text>
          </View>
          <View style={styles.columnConfig}>
            <Text style={styles.topText}> Saldo</Text>
            <Text style={styles.saldoLista}>
              $: {Math.round(balance * 100) / 100}
            </Text>
          </View>
        </View>
      </Box>
    </View>
  );
}
