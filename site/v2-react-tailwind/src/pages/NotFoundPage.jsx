import PageSection from "../components/PageSection";

function NotFoundPage() {
  return (
    <PageSection className="flex items-center min-h-[60vh]">
      <div className="mx-auto max-w-[70ch]">
        <p className="mb-4 text-xl text-neutral-400">oops...</p>
        <h1 className="mb-6 text-6xl text-center font-bold tracking-normal text-red-700 sm:text-7xl">404</h1>
        <h2 className="mb-6 text-3xl text-center font-bold tracking-normal text-red-900 sm:text-5xl">Page Not Found</h2>
        <p className="text-lg text-center leading-7 text-neutral-400">The page you’re looking for doesn’t exist or may have moved.</p>
      </div>
    </PageSection>
  );
}

export default NotFoundPage;
