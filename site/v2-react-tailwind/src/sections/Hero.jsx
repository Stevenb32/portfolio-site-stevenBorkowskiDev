import PageSection from "../components/PageSection";

function Hero() {
  return (
    <PageSection id="home" className="flex items-center min-h-[60vh]">
      <div className="mx-auto max-w-[70ch]">
        <p className="mb-4 text-xl text-neutral-400">Hi I'm</p>
        <h1 className="mb-6 text-7xl font-bold tracking-normal text-neutral-100">Steven Borkowski</h1>
        <p className="text-lg leading-7 text-neutral-400">
          A QA Lead and automation-focused QA engineer with 7+ years of experience improving release quality across web, mobile, and
          enterprise software. I combine test strategy, backend validation, team leadership, and hands-on automation projects to support
          safer, more reliable software delivery.
        </p>
      </div>
    </PageSection>
  );
}

export default Hero;
