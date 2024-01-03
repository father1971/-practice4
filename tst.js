import { calculate_salary } from './calculate_salary.js';
let passed = true;
let engineer_salary = calculate_salary('engineer');
if (engineer_salary !== 4000) {
  passed = false;
}
console.log(passed);

let worker_salary = calculate_salary('worker');
if (worker_salary !== 1500) {
  passed = false;
}
console.log(passed);

let accountant_salary = calculate_salary('accountant');
if (accountant_salary !== 2500) {
  passed = false;
}
console.log(passed);
