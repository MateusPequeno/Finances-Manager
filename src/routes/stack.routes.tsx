import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../pages/Welcome/Welcome";
import { Objectives } from "../pages/Objectives/Objectives";
import { SavingOBJ } from "../pages/ObjectivesPages/SavingOBJ/SavingOBJ";
import { OrgOBJ } from "../pages/ObjectivesPages/OrgOBJ/OrgOBJ";
import { InvestOBJ } from "../pages/ObjectivesPages/InvestOBJ/InvestOBJ";
import { DebtOBJ } from "../pages/ObjectivesPages/DebtOBJ/DebtOBJ";
import { OutcomesInsert } from "../pages/InsertPages/OutcomesInsert/OutcomesInsert";
import { IncomesInsert } from "../pages/InsertPages/IncomesInsert/IncomesInsert";
import { Register } from "../pages/Register/Register";
import { GoalsInsert } from "../pages/InsertPages/GoalsInsert/GoalsInsert";
import AuthRoutes from "./tab.routes";
import { BalanceInsert } from "../pages/BalanceInsert/BalanceInsert";

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
    <stackRoutes.Screen name="GoalsInsert" component={GoalsInsert} />
  </stackRoutes.Navigator>
);
export default AppRoutes;
