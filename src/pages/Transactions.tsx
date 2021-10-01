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
import { Button } from "../../src/components/Button";
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

export function Transactions() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.trs);
  const DATA = Object.values(
    transactions.reduce((acc, item) => {
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
    .filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });
  // Animation Values
  const active = useValue(0);

  const onDelete = (id: any) => {
    dispatch(deleteTransaction(id));
  };
  const renderHeader = () => {
    return <Box style={styles.boxHeading}></Box>;
  };
  const renderFooter = () => {
    return <Box style={styles.boxFooter}></Box>;
  };

  return (
    <>
      <ImageBackground
        source={bckImage}
        resizeMode="cover"
        style={styles.bckImage}
      >
        <Heading />

        <Top />
        <Box
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            height: Dimensions.get("window").width * 0.8,
          }}
        >
          <SectionList
            sections={DATA}
            alignItems="center"
            justifyContent="center"
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderSectionFooter={renderFooter}
            renderSectionHeader={renderHeader}
            renderItem={({ item }) => {
              const index = item.id;
              return (
                <Box key={index} overflow="hidden" style={styles.box}>
                  <Animated.View style={styles.animatedView}>
                    <Expense
                      onTap={() => {
                        active.setValue(index);
                      }}
                      {...{ index, onDelete, item, allDates }}
                    ></Expense>
                  </Animated.View>
                </Box>
              );
            }}
          />
        </Box>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bckImage: {
    flex: 1,
  },
  box: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    height: 40,
    borderRadius: 80,
    position: "relative",
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
  },
  animatedView: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    padding: 5,
    fontFamily: fonts.text,
  },
  boxHeading: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#575757",
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  boxFooter: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    paddingBottom: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 16,
  },
});
