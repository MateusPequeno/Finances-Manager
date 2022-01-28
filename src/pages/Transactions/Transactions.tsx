import React from "react";
import bckImage from "../../../assets/blueBck.jpg";
import {
  Text,
  View,
  ImageBackground,
  SectionList,
  StyleSheet,
  Animated,
  ScrollView,
  FlatList,
} from "react-native";
import { Top } from "../../components/Top/Top";
import { Heading } from "../../components/Heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../../styles/globalstyles";
import Expense from "../../components/Expense/Expense";
import { useValue } from "react-native-reanimated";
import { deleteTransaction } from "../../store/actions/transactionActions";
import { TransactionCard } from "../../components/TransactionCard";
import styles from "./styles";
import moment from "moment";

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
    .map(({ addedTime }) => addedTime)
    .filter(function (value: any, index: any, array: string | any[]) {
      return array.indexOf(value) == index;
    });

  const active = useValue(0);

  const Prices = ({ time }) => {
    const prices = transactions
      .filter(({ addedTime }) => addedTime == time)
      .map(({ price }) => {
        return price;
      });
    const sum = eval(prices.join("+"));

    return <Text>{sum > 0 ? `$${sum}` : `- $${Math.abs(sum)}`}</Text>;
  };

  const onDelete = (id: Number) => {
    dispatch(deleteTransaction(id));
  };

  const renderFooter = () => {
    return <Box style={styles.boxFooter}></Box>;
  };

  return (
    <ImageBackground source={bckImage} style={styles.bckImageTransaction}>
      <Heading />
      <Top />
      <View style={styles.boxTres}>
        <View style={styles.transaction}>
          <FlatList
            data={transactions}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TransactionCard data={item} />}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
