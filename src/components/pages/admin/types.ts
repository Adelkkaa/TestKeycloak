import { TSelectableFilters } from './ui/AdminPage';

export type TAdminData = {
  id: number;
  employee: {
    employeeId: number;
    employeeName: string;
    employeeSurname: string;
    employeePatronymic: string;
  };
  title: string;
  managament: {
    managamentId: number;
    managamentName: string;
  };
  subdivision: string;
  email: string;
  isRegistr: boolean;
};

export type TManagament = { managamentId: number; managamentName: string };
export type TEmployee = {
  employeeId: number;
  employeeName: string;
  employeeSurname: string;
  employeePatronymic: string;
};

export type TPreferAdminData = {
  List: TAdminData[];
  ManagamentList: TManagament[];
  EmployeeList: TEmployee[];
};

export type TRadioArray = {
  name: keyof TSelectableFilters;
  value: string;
  label: string;
};
