import { StyleSheet } from "react-native";
const boxColor = "#e6e2f8";
import fonts from "../../styles/fonts";
export default StyleSheet.create({
  containerTop: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxHeader: {
    paddingHorizontal: 25,
    backgroundColor: boxColor,
    // flexDirection: "row",
    justifyContent: "space-between",
    //borderBottomWidth: 1,
    //borderBottomColor: "#ff0000",
    padding: 8,
    marginTop: 10,
    borderRadius: 10,
  },
  topText: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontFamily: fonts.text,
  },
  rowConfig: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnConfig: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  rendimento: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "green",
    fontWeight: "bold",
  },
  despesa: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "red",
    fontWeight: "bold",
  },
  saldoLista: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "black",
    fontWeight: "bold",
  },
});
