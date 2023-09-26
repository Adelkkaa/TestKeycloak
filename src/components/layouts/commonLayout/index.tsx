import { Header } from "@/widgets/Header";
import { PropsWithChildren } from "react";

const CommonLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="AISPP_UI_commonMain">
    <Header />
    <section className="AISPP_UI_main">{children}</section>
  </main>
);

export default CommonLayout;
