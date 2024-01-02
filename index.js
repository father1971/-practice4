import { calculate_salary } from './calculate_salary.js';

let worker1 = {
  name: 'Вася',
  role: 'worker',
  age: 23,
};

let engineer1 = {
  name: 'Григорий Палыч',
  role: 'engineer',
  age: 42,
};

let worker2 = {
  name: 'Гриша',
  role: 'worker',
  age: 25,
};

let engineer2 = {
  name: 'Сан Саныч',
  role: 'engineer',
  age: 54,
};

let employees = [worker1, engineer1, worker2];
employees.push(engineer2);

let total_salary = 0; // Сюда считаем
let employee_index = 0; // Начнём с нуля и будем следить за тем, кого мы уже посчитали
while (employees[employee_index] !== undefined) {
  // И пока есть следующий сотрудник
  let employee = employees[employee_index]; // Берём сотрудника по индексу
  let salary = calculate_salary(employee.role); // Считаем его зарплату
  total_salary = total_salary + salary; // И добавляем к итоговой сумме
  employee_index = employee_index + 1; // Ну и отмечаем, что одного мы посчитали
}
console.log(total_salary);
