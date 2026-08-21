import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <section id="home">
      <div className="home-hero">
        <div className="home-copy">
          <span className="home-kicker">Student developer / React learner</span>
          <h1>Building thoughtful digital experiences, one project at a time.</h1>
          <p className="home-intro">
            I&apos;m Aaron Mathew, a web development student focused on clean interfaces, Graphical Design, and Gaming.  
      
          </p>

          <div className="home-actions">
            <Link className="primary-action" to="/projects">View my work</Link>
            <Link className="text-action" to="/contact">Start a conversation <span aria-hidden="true">-&gt;</span></Link>
          </div>

          <div className="home-meta" aria-label="Portfolio highlights">
            <div>
              <strong>03</strong>
              <span>Core routes</span>
            </div>
            <div>
              <strong>React</strong>
              <span>Current focus</span>
            </div>
          </div>
        </div>

        <div className="home-visual" aria-hidden="true">
          <div className="visual-grid"></div>
          <img src={heroImage} alt="" />
          <span className="visual-label label-top">01 / explore</span>
          <span className="visual-label label-bottom">curiosity drives the build</span>
        </div>
      </div>
    </section>
  );
}

export default Home;