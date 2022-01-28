import { Dimensions, StyleSheet } from "react-native";
import { fonts } from "../../styles/globalstyles";
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 24,
    width: 300,
    marginBottom: 20,
  },
  flexDir: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  negativeAmount: {
    fontSize: 20,
    marginTop: 2,
    fontFamily: fonts.heading,
    color: "red",
  },
  positiveAmount: {
    fontSize: 20,
    marginTop: 2,
    fontFamily: fonts.heading,
    color: "green",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 19,
  },
  categoryName: {
    color: "black",
    fontSize: 14,
    marginLeft: 17,
  },
  date: {
    color: "black",
    fontSize: 14,
  },
});
