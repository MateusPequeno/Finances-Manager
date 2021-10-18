import React from "react";
import bckImage from "../../assets/blueBck.jpg";
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
import { Button } from "../components/Button";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Top } from "../components/Top";
import { Heading } from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import theme, { Box } from "../components/theme";
import fonts from "../styles/fonts";
import Expense from "../components/Expense";
import { useValue } from "react-native-reanimated";
import {
  deleteTransaction,
  addTransaction,
} from "../store/actions/transactionActions";
import styles from "../styles/cssconfig";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Transactions() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.trs);

  const DATA = Object.values(
    transactions.reduce((acc: any, item: any) => {
      if (!acc[item.addtime])
        acc[item.addtime] = {
          title: item.addtime,
          data: [],
          price: item.price,
        };
      acc[item.addtime].data.push(item);
      return acc;
    }, {})
  );

  const allDates = transactions
    .map(({ addedtime }) => addedtime)
    .filter(function (value: any, index: any, array: string | any[]) {
      return array.indexOf(value) == index;
    });

  const active = useValue(0);

  const Prices = ({ time }) => {
    const prices = transactions
      .filter(({ addedtime }) => addedtime == time)
      .map(({ price }) => {
        return price;
      });
    const sum = eval(prices.join("+"));

    return <Text>{sum > 0 ? `$${sum}` : `- $${Math.abs(sum)}`}</Text>;
  };

  const onDelete = (id: Number) => {
    dispatch(deleteTransaction(id));
  };

  const renderHeader = ({ section: { data } }) => {
    return (
      <Box style={styles.boxHeaderTransaction}>
        <Text>{moment(data[0].addedtime, "x").format("DD MMM YYYY")}</Text>
        <Prices time={data[0].addedtime} />
      </Box>
    );
  };

  const renderFooter = () => {
    return <Box style={styles.boxFooter}></Box>;
  };

  return (
    <ImageBackground
      source={bckImage}
      resizeMode="cover"
      style={styles.bckImageTransaction}
    >
      <Heading />
      <Top />
      <Box style={styles.boxTres}>
        <SectionList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            const index = item.id;
            return (
              <Animated.View
                style={{ borderRadius: 20, backgroundColor: "red" }}
              >
                <Box style={styles.boxQuatro}>
                  <Animated.View style={{ backgroundColor: "white" }}>
                    <Expense
                      onTap={() => {
                        active.setValue(index);
                      }}
                      {...{ index, onDelete, item, allDates }}
                    >
                      <Box style={styles.boxCinco}>
                        <View style={[StyleSheet.absoluteFill, {}]}>
                          <Animated.View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                              alignItems: "center",
                              height: 50,
                              paddingHorizontal: 8,
                            }}
                          ></Animated.View>
                        </View>
                      </Box>
                    </Expense>
                  </Animated.View>
                </Box>
              </Animated.View>
            );
          }}
          renderSectionFooter={renderFooter}
          renderSectionHeader={renderHeader}
          sections={DATA}
        />
      </Box>
    </ImageBackground>
  );
}
