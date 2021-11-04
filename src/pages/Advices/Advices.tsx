import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/cssconfig";

import { Box } from "../../components/theme";

export function AdvicesGenerator() {
  const [adviceText, setAdviceText] = useState<string>();
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
  useEffect(() => {
    if (expense > balance) {
      setAdviceText(
        "Voce deve dar prioridade para quitação de todas as suas difividas, pois especialistas afirmam com confiança que esse deve ser o primeiro passo primordial a fim de conquistar a independencia financeira"
      );
    } else if (income > balance && income > expense) {
      setAdviceText(
        "Você está indo bem, seu rendimento está maior que seu saldo para o periodo, continue assim"
      );
    } else if (income > expense) {
      setAdviceText(
        "Você está indo muito bem, seu rendimento está maior que seus gastos para o periodo, continue assim"
      );
    }
  }, [expense, income, balance]);
  return (
    <Box style={styles.boxLimite}>
      <Text style={styles.advicesText}>{adviceText}</Text>
    </Box>
  );
}
