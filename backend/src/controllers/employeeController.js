import Employee from "../models/employee.js";

export const getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

export const createEmployee = async (req, res) => {
  const { name } = req.body;
  const employee = new Employee({ name });
  await employee.save();
  res.json(employee);
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const employee = await Employee.findByIdAndUpdate(id, { name }, { new: true });
  res.json(employee);
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
};
