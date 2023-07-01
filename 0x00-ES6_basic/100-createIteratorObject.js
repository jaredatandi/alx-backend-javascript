export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    nex() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const currentEmployee = departments[currentEmployeeIndex];

      currentEmployeeIndex += 1;

      if (currentEmployeeIndex >= currentDepartment.length) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
      }

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
