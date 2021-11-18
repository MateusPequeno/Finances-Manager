import { Dimensions, StyleSheet } from "react-native";
import { fonts, colors } from "../../styles/globalstyles";

export default StyleSheet.create({
  boxLimite: {
    backgroundColor: colors.boxColor,
    overflow: "hidden",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 30,
    flex: 1,
    marginTop: 10,
  },
  advicesText: {
    fontSize: 18,
    padding: 15,
    fontFamily: fonts.montText,
    color: "#111011",
  },
});
