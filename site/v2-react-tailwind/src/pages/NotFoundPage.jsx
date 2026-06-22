import SkipLink from "../components/SkipLink";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFoundPage() {
  return (
    <div className="page">

      <SkipLink />

      <Header />

      <main id="main" className="page__main">
        <section class="section section-hero">
        <div class="container">
          <div class="hero hero--404">
            <p class="hero__eyebrow">oops...</p>
            <h1 class="hero__title">404 - Page Not Found</h1>
            <p class="hero__text">The page you’re looking for doesn’t exist or may have moved.</p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
