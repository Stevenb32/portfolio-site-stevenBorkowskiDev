import PageLayout from "../layouts/PageLayout";
import PageSection from "../components/PageSection";


function NotFoundPage() {
  return (
    <PageLayout>
      <PageSection className="section-hero">
        <div className="hero hero--404">
          <p className="hero__eyebrow">oops...</p>
          <h1 className="hero__title">404 - Page Not Found</h1>
          <p className="hero__text">The page you’re looking for doesn’t exist or may have moved.</p>
        </div>
      </PageSection>
    </PageLayout>
  );
}

export default NotFoundPage;
