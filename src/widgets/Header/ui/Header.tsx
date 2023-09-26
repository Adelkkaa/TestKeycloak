import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

import headerLogo from "../icons/HeaderLogo.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="AISPP__header">
      <Link href={"/"}>
        <div className="AISPP__header_mainLogo">
          <Image
            className="AISPP_mainLogo-logo"
            src={headerLogo}
            alt="headerLogo"
            width={70}
            height={70}
          />
          <p className="AISPP_mainLogo__systemName">АИС ПП</p>
        </div>
      </Link>
      <div className="AISPP__header_links">
        <Link className="AISPP_links-registry" href={"/registry"}>
          РЕГИСТРАЦИЯ
        </Link>
        <div onClick={() => signIn("keycloak")}>Кейклок</div>
        <Link className="AISPP_links-auth" href={"/auth"}>
          ВОЙТИ
        </Link>
      </div>
    </header>
  );
};
