import React, { useRef } from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export function CategoryGraph(item: { title: string; price: number }) {
  const titleRef = useRef(null);
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.trs);
  const price = transactions.map((transaction: any) => transaction.price);
  const title = transactions.map((transaction: any) => transaction.title);

  const DATA = Object.values(
    transactions.reduce((acc: any, item: any) => {
      if (!acc[item.id] && item.price < 0) {
        acc[item.id] = {
          name: item.title,
          data: [],
          price: item.price,
          color: (
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16) +
            "000000"
          ).slice(0, 7),
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        };
      }
      //Condição para inserir no gráfico.
      if (acc[item.price] < 0) {
        acc[item.id].data.push(item);
      }
      return acc;
    }, {})
  );
  return (
    <PieChart
      data={DATA}
      width={Dimensions.get("window").width}
      height={220}
      chartConfig={chartConfig}
      accessor={"price"}
      backgroundColor={"transparent"}
      paddingLeft={"10"}
      center={[10, 10]}
      absolute
    />
  );
}
