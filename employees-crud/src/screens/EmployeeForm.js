import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useCrud } from "../hooks/useCrud";

export default function EmployeeForm({ route, navigation }) {
  const { addEmployee, editEmployee } = useCrud();
  const emp = route.params?.employee;
  const [name, setName] = useState(emp?.name || "");

  const handleSave = () => {
    if (emp) editEmployee(emp.id, { name });
    else addEmployee({ name });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}
