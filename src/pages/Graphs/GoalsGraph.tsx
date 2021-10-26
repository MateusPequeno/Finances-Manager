import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  SectionList,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../components/Button";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import theme, { Box } from "../../components/theme";
import { useValue } from "react-native-reanimated";
import {
  deleteTransaction,
  addTransaction,
  addGoal,
} from "../../store/actions/transactionActions";
import styles from "../../styles/cssconfig";
import moment from "moment";
import { Colors, ProgressBar } from "react-native-paper";
import { justifyContent } from "styled-system";

export function GoalsGraph() {
  const navigation = useNavigation();
  function handleGoalsPress() {
    navigation.navigate("GoalsInsert");
  }
  const dispatch = useDispatch();
  const { transactions, goals } = useSelector((state) => state.trs);
  const prices = transactions.map((transaction: any) => transaction.price);
  const balance = prices.reduce(
    (prev: number, cur: number) => (prev += cur),
    0
  );

  const DATA = Object.values(
    goals.reduce((acc: any, item: any) => {
      if (!acc[item.id])
        acc[item.id] = {
          goalTitle: item.id,
          data: [],
          goalPrice: item.price,
        };
      acc[item.id].data.push(item);
      return acc;
    }, {})
  );

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      bounces={false}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => {
        const index = item.id;
        const progressGoal = balance / item.goalPrice;
        var goalPercentage = progressGoal * 100;
        if (goalPercentage >= 100) {
          goalPercentage = 100;
          var goalConcluded = "Parabéns, você bateu essa meta!";
        }
        return (
          <TouchableOpacity onPress={handleGoalsPress} style={styles.container}>
            <Box style={styles.boxGoals}>
              <Text style={styles.goalTitleText}> {item.goalTitle} </Text>
              <Text style={styles.goalAchieved}>{goalConcluded}</Text>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ProgressBar
                  style={{ width: 325, marginBottom: 20 }}
                  progress={progressGoal}
                  color={Colors.red800}
                />
                <View
                  style={{
                    height: 45,
                    position: "relative",
                    width: Dimensions.get("window").width * 0.65,
                    flexDirection: "row",
                    overflow: "hidden",
                    paddingHorizontal: 24,
                  }}
                >
                  <Text>
                    R$ : {Math.round(balance * 100) / 100}/ R$: {item.goalPrice}
                  </Text>

                  <Text style={{ marginLeft: 50 }}>
                    {Math.round(goalPercentage)} %
                  </Text>
                </View>
              </View>
            </Box>
          </TouchableOpacity>
        );
      }}
      sections={DATA}
    />
  );
}
