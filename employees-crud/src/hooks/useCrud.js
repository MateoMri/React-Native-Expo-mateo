import { useState, useEffect } from "react";

const BASE_URL = "http://192.168.1.34/api/employees";

export const useCrud = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener empleados
  const getEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch(BASE_URL);
      if (!res.ok) throw new Error("Error al obtener empleados");
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Agregar empleado
  const addEmployee = async (emp) => {
    try {
      setLoading(true);
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp),
      });
      if (!res.ok) throw new Error("Error al crear empleado");
      await getEmployees();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Editar empleado
  const editEmployee = async (id, emp) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp),
      });
      if (!res.ok) throw new Error("Error al actualizar empleado");
      await getEmployees();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar empleado
  const removeEmployee = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al eliminar empleado");
      await getEmployees();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return { employees, loading, error, addEmployee, editEmployee, removeEmployee };
};
