import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Header } from "./Header";

import { TransactionsList } from "../screens/TransactionsList";
import { TransactionForm } from "../screens/TransactionForm";

const { Navigator, Screen } = createNativeStackNavigator();

export function Navigation() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="TransactionsList" component={TransactionsList} />

          <Screen name="TransactionForm" component={TransactionForm} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
