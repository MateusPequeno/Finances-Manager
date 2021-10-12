import {
  RectButton,
  Swipeable,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated, { eq } from "react-native-reanimated";
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import theme, { Box } from "../components/theme";
import styles from "../styles/cssconfig";
import { TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Expense = ({ onTap, index, onDelete, item }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onTap();
      }}
    >
      <Swipeable
        //overshootRight = {false}
        renderRightActions={() => (
          <Animated.View>
            <View>
              <RectButton
                style={styles.buttonRemove}
                onPress={() => {
                  onDelete(index);
                }}
              >
                <Feather name="trash" size={25} color={"#FFFFFF"} />
              </RectButton>
            </View>
          </Animated.View>
        )}
      >
        <Box style={styles.box}>
          <View style={{ flex: 1 }}>
            <Animated.View style={styles.animView}>
              <Animated.Text>{item.title}</Animated.Text>
              <Animated.Text
                style={{
                  color: item.price > 0 ? "#009BFC" : "#FF4500",
                }}
              >
                {item.price > 0 ? `R$:${item.price}` : `R$:${item.price}`}
              </Animated.Text>
            </Animated.View>
          </View>
          <Animated.View style={styles.animView2}></Animated.View>
        </Box>
      </Swipeable>
    </TouchableWithoutFeedback>
  );
};
/*
<Text>
<TouchableOpacity
  onPress={() => {
    onDelete(index);
  }}
>
  <MaterialCommunityIcons name="delete" size={35} color={"red"} />
</TouchableOpacity>
</Text>
*/

export default Expense;
