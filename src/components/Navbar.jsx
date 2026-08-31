export default function Navbar() {
  return (
    <div className="wrap">
      <nav>
        <a href="#top" className="logo">N.</a>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="contact" href="#contact">Let's work ↗</a>
        </div>
      </nav>
    </div>
  );
}
