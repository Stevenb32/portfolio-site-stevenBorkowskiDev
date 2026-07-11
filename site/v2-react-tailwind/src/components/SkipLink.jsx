function SkipLink() {
  return (
    <a
      className="absolute left-2 top-4.5 z-50 px-3 py-2 bg-neutral-900 text-neutral-100 rounded-md outline-2 outline-red-500 translate-y-[-200%] transition-transform duration-150 ease-out focus:translate-y-0 focus-visible:translate-y-0"
      href="#main"
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;
