import moment from "moment";
import React from "react";
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
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../store/actions/transactionActions";
export interface TransactionCardProps {
  title: string;
  price: string;
  category: string;
  addedTime: string;
  type: "positive" | "negative";
  id: number;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props): JSX.Element {
  const dispatch = useDispatch();
  const handleRemoveTransaction = (id: Number) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexDir}>
        <Text style={styles.title}>{data.title}</Text>
        {Number(data.price) > 0 ? (
          <Text style={styles.positiveAmount}>R$:{data.price}</Text>
        ) : (
          <Text style={styles.negativeAmount}>R$: {data.price}</Text>
        )}
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>
          {moment(data.addedTime).format("DD MMM YYYY")}
        </Text>
        <Feather
          name="trash"
          size={25}
          color={"red"}
          onPress={() => {
            handleRemoveTransaction(data.id);
          }}
        />
      </View>
    </View>
  );
}
