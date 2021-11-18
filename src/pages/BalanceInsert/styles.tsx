import { Dimensions, StyleSheet } from "react-native";
const boxColor = "#e6e2f8";
import fonts from "../../styles/fonts";
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
  title: {
    marginTop: 20, // Espaço o titulo do icone
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.heading,
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
  footer: {
    marginTop: 40,
    paddingHorizontal: 0,
  },
});
