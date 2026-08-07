function NavBar({ activeSection }) {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <span>Active: {activeSection}</span>
    </nav>
  );
}

export default NavBar;