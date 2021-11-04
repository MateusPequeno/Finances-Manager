import React, { useRef } from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/cssconfig";
import { Box } from "../../components/theme";

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

export function CategoryGraph() {
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
    <Box style={styles.boxCategoryGraph}>
      <PieChart
        data={DATA}
        width={Dimensions.get("window").width * 0.9}
        height={Dimensions.get("window").height * 0.3}
        chartConfig={chartConfig}
        accessor={"price"}
        backgroundColor={"transparent"}
        // center={[10, 10]}
        absolute
      />
    </Box>
  );
}
