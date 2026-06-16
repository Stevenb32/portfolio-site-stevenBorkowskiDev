function Chip({ children, variant = "tech", as = "li" }) {
  const Tag = as;

  return <Tag className={`chip chip--${variant}`}>{children}</Tag>;
}

export default Chip;
