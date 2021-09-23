import React from "react";
import Routes from "./src/routes";
//Importando fonte do google, roboto.
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

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Montserrat_400Regular,
    Montserrat_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  return <Routes />;
}

/*Para fazer a navegação precisamos do react-navigation 

yarn add @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated
 react-native-screens react-native-safe-area-context 
 @react-native-community/masked-view
//json-server ./src/services/server.json --host 192.168.0.10 --port 3333 --delay 700
 yarn add @react-navigation/stack
*/
