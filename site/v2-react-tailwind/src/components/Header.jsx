import Container from "./Container";
import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky top-0 z-40 py-2 bg-black/40 backdrop-blur border-b border-red-500 shadow-lg shadow-red-500/30 sm:py-4">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
