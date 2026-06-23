import SkipLink from "../components/SkipLink";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFoundPage() {
  return (
    <div className="page">

      <SkipLink />

      <Header />

      <main id="main" className="page__main">
        <section className="section section-hero">
        <div className="container">
          <div className="hero hero--404">
            <p className="hero__eyebrow">oops...</p>
            <h1 className="hero__title">404 - Page Not Found</h1>
            <p className="hero__text">The page you’re looking for doesn’t exist or may have moved.</p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
