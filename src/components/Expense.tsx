import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, { eq } from "react-native-reanimated";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import theme, { Box } from "../components/theme";
import styles from "../styles/cssconfig";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Expense = ({ onTap, index, onDelete, item }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onTap();
      }}
    >
      <Animated.View>
        <Box style={styles.box}>
          <View style={[StyleSheet.absoluteFill, {}]}>
            <Animated.View style={styles.animView}>
              <Animated.Text>{item.title}</Animated.Text>
              <Animated.Text
                style={{
                  color: item.price > 0 ? "#009BFC" : "#FF4500",
                  opacity: 1,
                }}
              >
                {item.price > 0 ? `R$:${item.price}` : `R$:${item.price}`}
              </Animated.Text>
            </Animated.View>
          </View>
          <Animated.View style={styles.animView2}>
            <Text>
              <TouchableOpacity
                onPress={() => {
                  onDelete(index);
                }}
              >
                <MaterialCommunityIcons name="delete" size={35} color={"red"} />
              </TouchableOpacity>
            </Text>
          </Animated.View>
        </Box>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Expense;
