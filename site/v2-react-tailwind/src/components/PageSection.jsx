import Container from "./Container";

function Section({ children, id, className = "", ariaLabelledby }) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default Section;