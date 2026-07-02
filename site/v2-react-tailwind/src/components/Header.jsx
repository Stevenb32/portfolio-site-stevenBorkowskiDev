import Container from "./Container";
import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
