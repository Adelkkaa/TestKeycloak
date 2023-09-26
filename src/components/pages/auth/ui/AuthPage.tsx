import React, { useRef, useState } from "react";
import classes from "./AuthPage.module.css";
import { Input } from "@/shared/ui/Input";
import { EmailIcon } from "../icons/EmailIcon";
import { PasswordIcon } from "../icons/PasswordIcon";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

export const AuthPage = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref && ref.current) {
      const form = new FormData(ref.current);
      const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        String(form.get("email"))
      );
      const validPassword = String(form.get("password")).length > 6;

      if (validEmail && validPassword) {
        console.log("Валидно");
      }
      if (!validEmail) {
        setErrors((prev) => ({
          ...prev,
          email: "Email адрес должен быть валидным!",
        }));
      } else if (validEmail) {
        setErrors((prev) => ({
          ...prev,
          email: "",
        }));
      }
      if (!validPassword) {
        setErrors((prev) => ({
          ...prev,
          password: "Пароль должен содержать больше 6 символов",
        }));
      } else if (validPassword) {
        setErrors((prev) => ({
          ...prev,
          password: "",
        }));
      }
    }
  };
  return (
    <div className={classes.authWrapper}>
      <h1 className={classes.authTitle}>
        Добро пожаловать в личный кабинет АИС ПП
      </h1>
      <form ref={ref} onSubmit={onSubmit} className={classes.authForm}>
        <Input error={errors.email} name="email" placeholder="Введите email">
          <EmailIcon />
        </Input>
        <Input
          error={errors.password}
          name="password"
          type="password"
          placeholder="Введите пароль"
        >
          <PasswordIcon />
        </Input>
        <div className={classes.authConfirmWrapper}>
          <Checkbox />
          <Button>Войти</Button>
        </div>
        <div className={classes.authLinksWrapper}>
          <Link className={classes.authRegistry} href={"/registry"}>
            Регистрация
          </Link>
          <Link className={classes.authForgot} href={"/forgot"}>
            Забыли пароль
          </Link>
        </div>
      </form>
    </div>
  );
};
