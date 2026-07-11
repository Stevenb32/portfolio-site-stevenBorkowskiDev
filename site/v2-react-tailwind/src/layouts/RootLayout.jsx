import { Outlet } from "react-router-dom";
import SkipLink from "../components/SkipLink";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <SkipLink />
      <Header />

      <main id="main" className="grow shrink-0 basis-auto">
        <Outlet></Outlet>
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
