import PageMetadata from "../components/PageMetadata";
import PageSection from "../components/PageSection";
import AppLink from "../components/AppLink";

function NotFoundPage() {
  const homeLink = {
    id: "return-home",
    label: "Return Home",
    href: "/",
    type: "route",
  };

  return (
    <>
      <PageMetadata title="Page Not Found" description="The requested page could not be found." />

      <PageSection className="flex items-center min-h-[60vh]">
        <div className="mx-auto max-w-[70ch]">
          <p className="mb-4 text-xl text-neutral-400">oops...</p>
          <div className="mx-auto flex flex-col items-center">
            <h1 className="mb-6 text-6xl text-center font-bold tracking-normal text-red-700 sm:text-7xl">404</h1>
            <h2 className="mb-6 text-3xl text-center font-bold tracking-normal text-red-900 sm:text-5xl">Page Not Found</h2>
            <p className="text-lg text-center leading-7 text-neutral-400">The page you’re looking for doesn’t exist or may have moved.</p>
            <AppLink
              link={homeLink}
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-8 py-3 mt-8 font-medium text-neutral-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-red-600 focus-visible:-translate-y-0.5 focus-visible:bg-red-600"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}

export default NotFoundPage;
