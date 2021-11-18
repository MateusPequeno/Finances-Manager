import { Dimensions, StyleSheet } from "react-native";
import { fonts, colors } from "../../styles/globalstyles";

export default StyleSheet.create({
  bckImage: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  boxSaldo: {
    backgroundColor: colors.boxColor,
    overflow: "hidden",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 30,
    flex: 1,
    marginTop: 10,
  },
  card: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  saldoGeral: {
    fontSize: 25,
    fontFamily: fonts.text,
  },
  incomesAndDebt: {
    marginTop: 6,
    flexDirection: "row",
  },
  despesa: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "red",
    fontWeight: "bold",
  },
  textosIncAndDebt: {
    flexDirection: "column",
  },
  despesaValor: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "red",
    fontWeight: "bold",
  },
  rendimento: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "green",
    fontWeight: "bold",
  },
  rendimentoValor: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "green",
    fontWeight: "bold",
  },
  despesasCatego: {
    fontSize: 20,
    fontFamily: fonts.montText,
    color: "black",
    fontWeight: "bold",
    padding: 28,
  },
  descriptionTextOBJ: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontFamily: fonts.text,
  },
  boxLimite: {
    backgroundColor: colors.boxColor,
    overflow: "hidden",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 30,
    flex: 1,
    marginTop: 10,
  },
});
