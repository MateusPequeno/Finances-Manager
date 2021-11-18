import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalstyles";

export default StyleSheet.create({
  boxCategoryGraph: {
    backgroundColor: colors.boxColor,
    alignSelf: "center",
    overflow: "hidden",
    flex: 1,
    //width: Dimensions.get("window").width * 0.95,
    borderRadius: 30,
    padding: 10,
  },
});
