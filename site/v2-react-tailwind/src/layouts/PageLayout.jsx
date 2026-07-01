import SkipLink from "../components/SkipLink";
import Header from "../components/Header";
import Footer from "../components/Footer";


function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <Header />

      <main id="main" className="grow shrink-0 basis-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;