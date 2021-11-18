import { StyleSheet } from "react-native";
import { fonts } from "../../styles/globalstyles";
export default StyleSheet.create({
  containerDashboard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
    backgroundColor: "#443C8A",
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
  imageProf: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
