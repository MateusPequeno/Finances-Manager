import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Transactions } from "../pages/Transactions/Transactions";
import { IncomesInsert } from "../pages/InsertPages/IncomesInsert/IncomesInsert";
import { OutcomesInsert } from "../pages/InsertPages/OutcomesInsert/OutcomesInsert";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        activeTintColor: "#FFC062",
        inactiveTintColor: "#a5a5a5",
        labelPosition: "beside-icon",
        headerShown: false,

        style: {
          paddingVertical: Platform.OS == "ios" ? 20 : 0,
          height: 88,
        },
      }}
    >
      <AppTab.Screen
        name="Overview"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Rendimento"
        component={IncomesInsert}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Despesas"
        component={OutcomesInsert}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};
export default AuthRoutes;
