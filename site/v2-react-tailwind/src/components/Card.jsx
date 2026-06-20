function Card({ children, className = "", as = "article", ...props }) {
  const Tag = as;

  return <Tag className={`${className} card`} {...props}>{children}</Tag>;
}

export default Card;