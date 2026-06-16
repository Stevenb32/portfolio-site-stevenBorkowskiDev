import Container from "./Container";
import Nav from "./Nav";

function Header() {
  return (
    <header className="page__header">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
