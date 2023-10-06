{
  /* <div className={classes.filters__item}>
              <p className={classes.filters__title}>Управление</p>
              <div>
                <Select
                  name="managamentId"
                  id="managamentId"
                  instanceId="managamentId"
                  isMulti
                  placeholder="Выберите управление"
                  options={convertedMockData.ManagamentList}
                  getOptionLabel={(option: Managament) => option.managamentName}
                  getOptionValue={(option: Managament) =>
                    String(option.managamentId)
                  }
                  value={selectableFilters.managament || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("managament", value);
                  }}
                  classNames={selectClassNames}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Сотрудник</p>
              <div>
                <Select
                  name="employee"
                  id="employee"
                  instanceId="employee"
                  isMulti
                  placeholder="Выберите фамилию сотрудника"
                  options={convertedMockData.EmployeeList}
                  getOptionLabel={(option: Employee) =>
                    `${option.employeeSurname} ${option.employeeName} ${option.employeePatronymic}`
                  }
                  getOptionValue={(option: Employee) =>
                    String(option.employeeId)
                  }
                  value={selectableFilters.employee || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("employee", value);
                  }}
                  classNames={selectClassNames}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Регистрация</p>
              <div>
                <Select
                  name="registration"
                  id="registration"
                  instanceId="registration"
                  placeholder="Выберите статус регистрации"
                  options={[
                    { value: "true", label: "Зарегистрирован" },
                    { value: "false", label: "Не зарегистрирован" },
                  ]}
                  value={selectableFilters.registration || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("registration", value);
                  }}
                  classNames={selectClassNames}
                />
              </div>
            </div> */
}
{
  /* <div className={classes.filters__item}>
              <p className={classes.filters__title}>Email</p>
              <div>
                <Select
                  name="email"
                  id="email"
                  instanceId="email"
                  placeholder="Выберите статус наличие email"
                  options={[
                    { value: "true", label: "Есть" },
                    { value: "false", label: "Нет" },
                  ]}
                  value={selectableFilters.email || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("email", value);
                  }}
                  classNames={selectClassNames}
                />
              </div>
            </div> */
}

// const formData = {
//   managament:
//     typeof router.query.managament !== undefined
//       ? convertedMockData.ManagamentList.filter(
//           (item) =>
//             Array.isArray(router.query.managament) &&
//             router.query.managament.some(
//               (v) => v === String(item.managamentId)
//             )
//         )
//       : undefined,
//   employee:
//     typeof router.query.employee !== undefined
//       ? convertedMockData.EmployeeList.filter(
//           (item) =>
//             Array.isArray(router.query.employee) &&
//             router.query.employee.some((v) => v === String(item.employeeId))
//         )
//       : undefined,
//   registration:
//     typeof router.query.registration !== undefined
//       ? router.query.registration == "true"
//         ? { label: "Зарегистрирован", value: "true" }
//         : { label: "Не зарегистрирован", value: "false" }
//       : undefined,
//   email:
//     typeof router.query.email !== undefined
//       ? router.query.email == "true"
// ? { label: "Есть", value: "true" }
// : { label: "Нет", value: "false" }
//       : undefined,
// };

// Создал строчку над формой, ибо уже слил в прошлый мр)))

// useEffect(() => {
//   const queryParams = router.query;

//   const email =
//     queryParams.email !== undefined
//       ? queryParams.email !== "false"
//         ? { label: "Есть", value: true }
//         : { label: "Нет", value: false }
//       : undefined;
//   const registration =
//     queryParams.registration !== undefined
//       ? queryParams.registration !== "false"
//         ? { label: "Зарегистрирован", value: true }
//         : { label: "Не зарегистрирован", value: false }
//       : undefined;
//   const managament =
//     queryParams.managament !== undefined
//       ? convertedMockData.ManagamentList.filter(
//           (item) =>
//             typeof queryParams.managament === "string" &&
//             queryParams.managament
//               .split("_")
//               .some((v) => v === String(item.managamentId))
//         )
//       : undefined;

//   const employee =
//     queryParams.employee !== undefined
//       ? convertedMockData.EmployeeList.filter(
//           (item) =>
//             typeof queryParams.employee === "string" &&
//             queryParams.employee
//               .split("_")
//               .some((v) => v === String(item.employeeId))
//         )
//       : undefined;

//   // setSelectableFilters({ email, registration, employee, managament });
//   // setSelectedFilters({ email, registration, employee, managament });

//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [router]);

// const queryParams: Record<string, string | number[]> = {};
// if (selectableFilters.email) {
//   queryParams["email"] = String(selectableFilters.email?.value) || "";
// }
// if (selectableFilters.registration) {
//   queryParams["registration"] =
//     String(selectableFilters.registration?.value) || "";
// }

// if (
//   selectableFilters &&
//   selectableFilters.managament &&
//   selectableFilters.managament.length > 0
// ) {
//   queryParams["managament"] = selectableFilters.managament || "";
// }
// if (
//   selectableFilters &&
//   selectableFilters.employee &&
//   selectableFilters.employee.length > 0
// ) {
//   queryParams["employee"] = selectableFilters.employee || "";
// }
