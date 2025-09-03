import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EmployeeList from "../screens/EmployeeList";
import EmployeeForm from "../screens/EmployeeForm";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EmployeeList" component={EmployeeList} options={{ title: "Empleados" }} />
        <Stack.Screen name="EmployeeForm" component={EmployeeForm} options={{ title: "Formulario" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
