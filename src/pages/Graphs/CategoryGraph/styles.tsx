import { StyleSheet } from "react-native";
const boxColor = "#e6e2f8";

export default StyleSheet.create({
  boxCategoryGraph: {
    backgroundColor: boxColor,
    alignSelf: "center",
    overflow: "hidden",
    flex: 1,
    //width: Dimensions.get("window").width * 0.95,
    borderRadius: 30,
    padding: 10,
  },
});
