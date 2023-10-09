export type TMockData = {
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

export type TPreferMockData = {
  List: TMockData[];
  ManagamentList: TManagament[];
  EmployeeList: TEmployee[];
};

export type TRadioArray = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};
