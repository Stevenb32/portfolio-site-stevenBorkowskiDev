function Chip({ children, variant = "tech", as = "li", className = "" }) {
  const Tag = as;

  const baseClasses = "inline-flex items-center justify-center bg-neutral-700 rounded-full";

  const variants = {
    tech: "px-2 py-1 text-xs text-neutral-300",
    date: "px-6 py-1 text-sm text-white",
  };

  return <Tag className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</Tag>;
}

export default Chip;
