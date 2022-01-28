import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  boxHeaderTransaction: {
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
  boxFooter: {
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
  bckImageTransaction: {
    alignItems: "center",
  },
  boxTres: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 0,
  },
  boxQuatro: {
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "#575151",
    flex: 1,
    backgroundColor: "#fff",
  },

  boxCinco: {
    overflow: "hidden",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    height: Dimensions.get("window").height * 0.048,
    // position: "relative",
    backgroundColor: "white",
  },
  transaction: {
    flex: 1,

    padding: 24,
  },
});
