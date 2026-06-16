function Card({ children, className = "", as = "article" }) {
  const Tag = as;

  return <Tag className={`${className} card`}>{children}</Tag>;
}

export default Card;