import Container from "./Container";

const sectionVariants = {
  dark: "bg-black",
  gray: "bg-neutral-900",
};

function PageSection({ children, id, className = "", ariaLabelledBy, variant = "dark" }) {
  return (
    <section id={id} className={`scroll-mt-28 py-10 sm:scroll-mt-19 sm:py-20 ${sectionVariants[variant]} ${className}`} aria-labelledby={ariaLabelledBy}>
      <Container>{children}</Container>
    </section>
  );
}

export default PageSection;
