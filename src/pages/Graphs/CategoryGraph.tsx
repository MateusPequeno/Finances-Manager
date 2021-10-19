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

  const data = [
    {
      name: title[0],
      price: price[0],
      color: "#fff",
      //color: { fill :('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7) },
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
      color: "#f1e31f",
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
  ];
  return (
    <View>
      <PieChart
        data={data}
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
