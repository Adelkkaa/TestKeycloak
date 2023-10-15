import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/TCMHeader';
// import { Header } from '@/widgets/Header';
import { PropsWithChildren } from 'react';

const CommonLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="AISPP_UI_commonMain">
    <Header />
    <section className="TCM_UI_main">{children}</section>
    <Footer />
  </main>
);

export default CommonLayout;
