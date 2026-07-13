const SITE_NAME = "Steven Borkowski";
const SITE_URL = "https://stevenborkowski.dev";

function PageMetadata({ title, description, path }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = path ? new URL(path, SITE_URL).toString() : null;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
}

export default PageMetadata;