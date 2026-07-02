function Card({ children, className = "", as = "article", ...props }) {
  const Tag = as;

  return (
    <Tag
      className={`
        rounded-2xl border border-neutral-800 p-6
        transition duration-300 ease-out
        hover:-translate-y-1 hover:border-red-500
        focus-within:-translate-y-1 focus-within:border-red-500 
        ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Card;
