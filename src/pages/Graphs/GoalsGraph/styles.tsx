import { Dimensions, StyleSheet } from "react-native";
const boxColor = "#e6e2f8";
import fonts from "../../../styles/fonts";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  boxGoals: {
    backgroundColor: boxColor,
    alignSelf: "center",
    overflow: "hidden",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 30,
    marginBottom: 10,
  },
  goalTitleText: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: "#6d5151",
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 28,
    marginTop: 5,
  },
  goalAchieved: {
    fontSize: 16,
    fontWeight: "900",
    marginLeft: 33,
    marginBottom: 5,
    fontFamily: fonts.montText,
  },
});
