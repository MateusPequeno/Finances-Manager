import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../pages/Welcome";
import { Objectives } from "../pages/Objectives";
import { SavingOBJ } from "../pages/SavingOBJ";
import { OrgOBJ } from "../pages/OrgOBJ";
import { InvestOBJ } from "../pages/InvestOBJ";
import { DebtOBJ } from "../pages/DebtOBJ";
import { OutcomesInsert } from "../pages/OutcomesInsert";
import { IncomesInsert } from "../pages/IncomesInsert";
import { Register } from "../pages/Register";
import AuthRoutes from "./tab.routes";
import { BalanceInsert } from "../pages/BalanceInsert";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
    // Tirar o Header de navegação .
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="Objectives" component={Objectives} />
    <stackRoutes.Screen name="SavingOBJ" component={SavingOBJ} />
    <stackRoutes.Screen name="OrgOBJ" component={OrgOBJ} />
    <stackRoutes.Screen name="InvestOBJ" component={InvestOBJ} />
    <stackRoutes.Screen name="DebtOBJ" component={DebtOBJ} />
    <stackRoutes.Screen name="OutcomesInsert" component={OutcomesInsert} />
    <stackRoutes.Screen name="IncomesInsert" component={IncomesInsert} />
    <stackRoutes.Screen name="Register" component={Register} />
    <stackRoutes.Screen name="Dashboard" component={AuthRoutes} />

    <stackRoutes.Screen name="BalanceInsert" component={BalanceInsert} />
  </stackRoutes.Navigator>
);
export default AppRoutes;
/*Para fazer a navegação precisamos do react-navigation 

yarn add @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated
 react-native-screens react-native-safe-area-context 
 @react-native-community/masked-view

 yarn add @react-navigation/stack
*/
