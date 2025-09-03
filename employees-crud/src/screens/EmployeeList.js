import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useCrud } from "../hooks/useCrud";

export default function EmployeeList({ navigation }) {
  const { employees, loading, removeEmployee } = useCrud();

  if (loading) return <Text>Cargando...</Text>;

  return (
    <FlatList
      data={employees}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
          <Button title="Editar" onPress={() => navigation.navigate("EmployeeForm", { employee: item })}/>
          <Button title="Eliminar" onPress={() => removeEmployee(item.id)}/>
        </View>
      )}
    />
  );
}
