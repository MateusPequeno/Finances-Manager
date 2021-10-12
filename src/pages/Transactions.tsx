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
      <Box style={styles.boxHeader}>
        <Text>{moment(data[0].addedtime, "x").format("DD MMM YYYY")}</Text>
        <Prices time={data[0].addedtime} />
      </Box>
    );
  };

  const renderFooter = () => {
    return <Box style={styles.boxDois}></Box>;
  };

  return (
    <ImageBackground
      source={bckImage}
      resizeMode="cover"
      style={styles.bckImage}
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
                  <Animated.View style={styles.animatedView}></Animated.View>
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

const styles = StyleSheet.create({
  bckImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  boxHeader: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#575151",
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  boxDois: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#575151",
    paddingBottom: 8,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  boxTres: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  boxQuatro: {
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "#575151",
    height: 50,
    position: "relative",
    backgroundColor: "#fff",
  },

  boxCinco: {
    overflow: "hidden",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    height: 50,
    position: "relative",
    backgroundColor: "white",
  },
  animatedView: {
    fontSize: 12,
    color: "white",
    fontFamily: fonts.text,
    fontWeight: "900",
    position: "absolute",
    height: 50,
    width: "14%",
    right: -20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
