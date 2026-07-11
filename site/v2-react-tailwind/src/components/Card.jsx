function Card({ children, className = "", as = "article", ...props }) {
  const Tag = as;

  return (
    <Tag
      className={`p-6 rounded-2xl border border-neutral-800 hover:border-red-500 focus-within:border-red-500 transition duration-300 ease-out hover:-translate-y-1 focus-within:-translate-y-1  ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Card;
