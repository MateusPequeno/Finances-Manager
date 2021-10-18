import React, { useRef, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { useValue } from "react-native-reanimated";
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

export function CategoryGraph(item: { title: any }) {
  const titleRef = useRef(null);
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.trs);
  const price = transactions.map((transaction: any) => transaction.price);
  const title = transactions.map((transaction: any) => transaction.title);
  const i = 0;
  return (
    <View>
      <PieChart
        data={[
          {
            name: title[i],
            price: price[i],
            color: "#0b0c0e",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: title[4],
            price: price[4],
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: title[5],
            price: price[5],
            color: "purple",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: title[6],
            price: price[6],
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: title[8],
            price: price[8],
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: title[3],
            price: price[3],
            color: "rgb(129, 172, 30)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
        accessor={"price"}
        backgroundColor={"transparent"}
        paddingLeft={"10"}
        center={[10, 10]}
        absolute
      />
    </View>
  );
}
