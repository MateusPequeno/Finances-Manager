import React, { useRef } from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart, PieChart, StackedBarChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import { ProgressBar, Colors } from "react-native-paper";
import styles from "../../styles/cssconfig";

export function GoalsGraph(item: { title: string; prices: number }) {
  const titleRef = useRef(null);
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.trs);
  const prices = transactions.map((transaction: any) => transaction.price);
  const title = transactions.map((transaction: any) => transaction.title);
  const balance = prices.reduce(
    (prev: number, cur: number) => (prev += cur),
    0
  );

  const progressGoal = balance / 200000;
  //25
  return (
    <>
      <Text style={styles.despesasCatego}> Casa Própia </Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ProgressBar
          style={{ width: 350 }}
          progress={progressGoal}
          color={Colors.red800}
        />
      </View>
    </>
  );
}
