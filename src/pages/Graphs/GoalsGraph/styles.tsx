import { Dimensions, StyleSheet } from "react-native";
import { fonts, colors } from "../../../styles/globalstyles";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  boxGoals: {
    backgroundColor: colors.boxColor,
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
  buttonRemove: {
    width: 35,
    height: 28,
    backgroundColor: "#E83F5B",
    marginLeft: 325,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
});
