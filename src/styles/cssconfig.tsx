import { Dimensions, StyleSheet } from "react-native";
import fonts from "../styles/fonts";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bckImage: {
    flex: 1,
  },
  headerText: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    fontFamily: fonts.heading,
  },
  descriptionText: {
    fontSize: 25,
    textAlign: "center",
    color: "#FFC062",
    marginTop: 10,
    paddingHorizontal: 20,
    fontFamily: fonts.heading,
    fontWeight: "bold",
  },
  descriptionTextMain: {
    fontSize: 25,
    textAlign: "center",
    color: "#FFC062",
    marginTop: 300,
    paddingHorizontal: 50,
    fontFamily: fonts.heading,
    fontWeight: "bold",
  },
  descriptionTextOBJ: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    padding: 5,
    fontFamily: fonts.text,
  },
  image: {
    width: 322,
    height: Dimensions.get("window").width * 0.7,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  emoji: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fcfcfc",
    backgroundColor: "#ffffff",
    color: "#000",
    width: "100%",
    fontSize: 18,
    marginTop: 15,
    padding: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  title: {
    marginTop: 20, // Espaço o titulo do icone
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.heading,
  },
  subTitle: {
    marginTop: 10, // Espaço o titulo do icone
    fontSize: 25,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.text,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 0,
  },
  containerDashboard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    padding: 20,
    backgroundColor: "#443C8A",
  },
  imageProf: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: "#ffffff",
    fontFamily: fonts.text,
    marginTop: 10,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: "#ffffff",
    lineHeight: 40,
  },
  card: {
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
  saldoLista: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "black",
    fontWeight: "bold",
  },
  despesaValor: {
    fontSize: 19,
    fontFamily: fonts.montText,
    color: "red",
    fontWeight: "bold",
  },
  textosIncAndDebt: {
    flexDirection: "column",
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
  dateButton: {
    backgroundColor: "#ffffff",
    height: 56,
    width: 344,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
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
  checkBox: {
    height: 50,
    width: 50,
  },
  picker: {
    color: "#000000",
    marginTop: 10,
    padding: 0,
    textAlign: "center",
  },
  extraPicker: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    height: "6%",
    fontSize: 50,
  },
  box: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    height: 50,
    //borderRadius: 80,
    position: "relative",
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    overflow: "hidden",
    paddingHorizontal: 24,
    borderBottomColor: "#776c6c",
  },
  boxHeader: {
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    // flexDirection: "row",
    justifyContent: "space-between",
    //borderBottomWidth: 1,
    //borderBottomColor: "#ff0000",
    padding: 8,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonRemove: {
    width: 50,
    height: 30,
    backgroundColor: "#E83F5B",
    marginTop: 15,
    borderRadius: 5,
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    right: 3,
    paddingLeft: 20,
  },
  animView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    padding: 24,
    marginBottom: 30,
  },
  animView2: {
    fontSize: 12,
    color: "white",
    fontWeight: "900",
    position: "absolute",
    height: 50,
    width: "14%",
    right: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },
  topText: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontFamily: fonts.text,
  },
  containerTop: {
    alignItems: "center",
    justifyContent: "center",
  },
  topRow: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});