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

export type TConvertedMockData = {
  List: TMockData[];
  ManagamentList: TManagament[];
  EmployeeList: TEmployee[];
};

export const mockData: TMockData[] = [
  {
    id: 1,
    employee: {
      employeeId: 1,
      employeeName: "Адель",
      employeeSurname: "Шарипов",
      employeePatronymic: "Сиринович",
    },
    title: "Ведущий специалист",
    managament: {
      managamentId: 1,
      managamentName: "ИТС",
    },
    subdivision: "Подразделение-1",
    email: "snakeadel00@gmail.com",
    isRegistr: true,
  },
  {
    id: 2,
    employee: {
      employeeId: 2,
      employeeName: "Илья",
      employeeSurname: "Горбунов",
      employeePatronymic: "Дмитриевич",
    },
    title: "Ведущий специалист",
    managament: {
      managamentId: 1,
      managamentName: "ИТС",
    },
    subdivision: "Подразделение-2",
    email: "snakeadel00@gmail.com",
    isRegistr: true,
  },
  {
    id: 3,
    employee: {
      employeeId: 3,
      employeeName: "Горелов",
      employeeSurname: "Никита",
      employeePatronymic: "Никитович",
    },
    title: "Ведущий специалист",
    managament: {
      managamentId: 2,
      managamentName: "ИТИС",
    },
    subdivision: "Подразделение-1",
    email: "",
    isRegistr: true,
  },
  {
    id: 4,
    employee: {
      employeeId: 4,
      employeeName: "Тест",
      employeeSurname: "Тестович",
      employeePatronymic: "Тестовович",
    },
    title: "Ведущий специалист",
    managament: {
      managamentId: 3,
      managamentName: "ТЕСТ",
    },
    subdivision: "Подразделение-1",
    email: "snakeadel00@gmail.com",
    isRegistr: true,
  },
  {
    id: 5,
    employee: {
      employeeId: 5,
      employeeName: "Новый",
      employeeSurname: "Новый",
      employeePatronymic: "Новый",
    },
    title: "Ведущий специалист",
    managament: {
      managamentId: 1,
      managamentName: "ИТС",
    },
    subdivision: "Подразделение-1",
    email: "snakeadel00@gmail.com",
    isRegistr: false,
  },
];
