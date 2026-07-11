function Divider({ className = "" }) {
  return (
    <hr
      className={`m-0 w-full border-0 border-t border-neutral-800 ${className}`}
    />
  );
}

export default Divider;