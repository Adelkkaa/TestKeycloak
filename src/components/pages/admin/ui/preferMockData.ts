import { TPreferMockData, TEmployee, TManagament, TMockData } from '../mockData';

type PreferMockData = (array: TMockData[]) => TPreferMockData;

export const preferMockData: PreferMockData = (array) => {
  const managamentList: TManagament[] = [];
  const employeeList: TEmployee[] = [];

  for (const value of array) {
    employeeList.push(value.employee);
    const isExistManagement = managamentList.some(
      (managament) => managament.managamentId === value.managament.managamentId,
    );
    if (!isExistManagement) {
      managamentList.push(value.managament);
    }
  }

  return {
    List: array,
    ManagamentList: managamentList,
    EmployeeList: employeeList,
  };
};
