import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import bckImage from "../../assets/blueBck.jpg";
import styles from "../styles/cssconfig";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@shopify/restyle";

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
      <Text style={styles.topText}>Novembro</Text>
      <View style={styles.rowConfig}>
        <Text style={styles.topText}> Rendimentos</Text>
        <Text style={styles.topText}> $: {income}</Text>
        <Text style={styles.topText}> Despesas</Text>
        <Text style={styles.topText}> $: -{expense}</Text>
        <Text style={styles.topText}> Saldo</Text>
        <Text style={styles.topText}> $: {balance}</Text>
      </View>
    </View>
  );
}
