import {
  TEmployee,
  TManagament,
  TAdminData,
  TPreferAdminData,
} from '../../components/pages/admin/types';

type PreferAdminData = (array: TAdminData[]) => TPreferAdminData;

export const preferAdminData: PreferAdminData = (array) => {
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
