import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
  containerButton: {
    backgroundColor: "#FFC062",
    height: Dimensions.get("window").height * 0.07,
    width: Dimensions.get("window").width * 0.85,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },

  textButton: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },

  buttonIcon: {
    fontSize: 30,
    color: "#8d8989ca",
    position: "absolute",
    right: 13,
    top: 12.5,
  },
});
