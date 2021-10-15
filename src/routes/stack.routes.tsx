import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../pages/Welcome";
import { Objectives } from "../pages/Objectives";
import { SavingOBJ } from "../pages/ObjectivesPages/SavingOBJ";
import { OrgOBJ } from "../pages/ObjectivesPages/OrgOBJ";
import { InvestOBJ } from "../pages/ObjectivesPages/InvestOBJ";
import { DebtOBJ } from "../pages/ObjectivesPages/DebtOBJ";
import { OutcomesInsert } from "../pages/InsertPages/OutcomesInsert";
import { IncomesInsert } from "../pages/InsertPages/IncomesInsert";
import { Register } from "../pages/Register";
import AuthRoutes from "./tab.routes";
import { BalanceInsert } from "../pages/BalanceInsert";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
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
