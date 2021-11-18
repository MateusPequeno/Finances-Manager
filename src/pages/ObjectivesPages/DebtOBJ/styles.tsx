import { Dimensions, StyleSheet } from "react-native";
import { fonts } from "../../../styles/globalstyles";
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
  headerText: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
    flex: 1,
    marginTop: "15%",
    fontFamily: fonts.heading,
  },
  descriptionTextOBJ: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontFamily: fonts.text,
  },
  debtImage: {
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").height * 0.35,
  },
});
