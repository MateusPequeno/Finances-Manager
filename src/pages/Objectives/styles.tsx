import { Dimensions, StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bckImage: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 1,
  },
  headerText: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
    flex: 1,
    marginTop: "15%",
    fontFamily: fonts.heading,
  },
  objectivesView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },
  descriptionTextOBJ: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontFamily: fonts.text,
  },
});
