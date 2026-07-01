import Container from "./Container";

function PageSection({ children, id, className = "", ariaLabelledBy }) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 lg:py-32 ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default PageSection;