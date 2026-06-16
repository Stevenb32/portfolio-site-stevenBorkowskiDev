import Container from "./Container";

function PageSection({ children, id, className = "", ariaLabelledBy }) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default PageSection;