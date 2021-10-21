import {
  RectButton,
  Swipeable,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import React from "react";
import { View } from "react-native";
import theme, { Box } from "../components/theme";
import styles from "../styles/cssconfig";
import { Feather } from "@expo/vector-icons";

interface ExpenseProps {
  onTap: any;
  index: number;
  onDelete: any;
  item: {
    addedTime: Date;
    id: number;
    title: string;
    price: number;
  };
}
export default function Expense({
  onTap,
  index,
  onDelete,
  item,
}: ExpenseProps) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onTap();
      }}
    >
      <Swipeable
        overshootRight={false}
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
        </Box>
      </Swipeable>
    </TouchableWithoutFeedback>
  );
}
