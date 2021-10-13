import React from "react";
import Routes from "./src/routes";
import {
  Roboto_400Regular,
  Roboto_300Light,
  useFonts,
} from "@expo-google-fonts/roboto";
import {
  Montserrat_400Regular,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Montserrat_400Regular,
    Montserrat_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <Provider {...{ store }}>
      <Routes />
    </Provider>
  );
}
