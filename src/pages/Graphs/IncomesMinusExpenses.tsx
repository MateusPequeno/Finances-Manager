import React from "react";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 1,
  color: (opacity = 0) => `#000000`,
};

export function IncomesMinusExpenses() {
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

  const data = {
    labels: ["Despesas", "Rendimentos", "Saldo"],
    datasets: [
      {
        data: [expense, income, balance],
      },
    ],
  };

  return (
    <BarChart
      style={{ alignSelf: "center", borderRadius: 25 }}
      data={data}
      width={Dimensions.get("window").width * 0.95}
      height={220}
      yAxisLabel="$"
      chartConfig={chartConfig}
      fromZero={true}
      showBarTops={true}
      showValuesOnTopOfBars={true}
      withInnerLines={false}
    />
  );
}
