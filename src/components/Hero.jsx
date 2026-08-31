export default function Hero() {
  return (
    <div className="wrap hero">
      <div className="hero-top">
        <span className="eyebrow">Nahom / Full-stack developer</span>
        <span className="availability">
          <i className="dot"></i> Available for select work
        </span>
      </div>
      <h1>
        Web products that<br />
        <span className="serif">move</span> business forward.
      </h1>
      <div className="hero-bottom">
        <p className="intro">
          I design and build fast, reliable websites and web apps that help companies launch, convert, and operate better.
        </p>
        <a className="scroll eyebrow" href="#work">
          View selected work <span className="arrow">↓</span>
        </a>
      </div>
    </div>
  );
}
