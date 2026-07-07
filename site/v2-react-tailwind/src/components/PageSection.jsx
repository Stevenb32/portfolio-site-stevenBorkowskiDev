import Container from "./Container";

const sectionVariants = {
  dark: "bg-black",
  gray: "bg-neutral-900",
};

function PageSection({ children, id, className = "", ariaLabelledBy, variant = "dark" }) {
  return (
    <section id={id} className={`scroll-mt-19 py-20 ${sectionVariants[variant]} ${className}`} aria-labelledby={ariaLabelledBy}>
      <Container>{children}</Container>
    </section>
  );
}

export default PageSection;
