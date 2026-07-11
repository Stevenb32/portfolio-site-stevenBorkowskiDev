import Container from "./Container";

const sectionVariants = {
  dark: "bg-black",
  gray: "bg-neutral-900",
};

function PageSection({ children, id, className = "", ariaLabelledBy, variant = "dark" }) {
  return (
    <section
      id={id}
      className={`py-10 scroll-mt-28 min-[426px]:scroll-mt-15 sm:py-20 sm:scroll-mt-19 ${sectionVariants[variant]} ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default PageSection;
