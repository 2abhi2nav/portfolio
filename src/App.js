import React, {useState, useEffect} from 'react';
import {HashRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import {FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaChevronDown} from 'react-icons/fa';
import './App.css';

// --- Typewriter Component ---
const Typewriter = ({text, delay = 50, startDelay = 0, onComplete}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeout;
    if (!hasStarted) {
      timeout = setTimeout(() => setHasStarted(true), startDelay);
    } else if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
    } else if (onComplete) {
      onComplete();
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, hasStarted, startDelay, text, onComplete]);

  return <span>{currentText}</span>;
};

// --- Pages ---

const Home = () => {
  const [nameDone, setNameDone] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="typing-container">
          <h1>
            <Typewriter text="Abhinav Renjith" onComplete={() => setNameDone(true)} />
            {!nameDone && <span className="cursor">&nbsp;</span>}
          </h1>
          {nameDone && (
            <p>
              <Typewriter text="Web Developer | DevOps Engineer | Game Developer" startDelay={500} />
              <span className="cursor">&nbsp;</span>
            </p>
          )}
        </div>

        <div className="social-icons">
          <a href="https://github.com/2abhi2nav" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/abhinav-renjith-56b42628b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:abhinavrenji@gmail.com"><FaEnvelope /></a>
        </div>

        <div className="scroll-down-arrow" onClick={scrollToAbout}>
          <FaChevronDown />
        </div>
      </section>

      <section className="about-section">
        <h1>About Me</h1>
        <p>
          Hey! I'm Abhinav, a third-year computer science student. I'm passionate about web development, DevOps, software design, and game development. I specialize in React and Spring Boot, and I'm familiar with tools such as Git, Docker, GitHub Actions, and Unity. I also love UI/UX design, and am extremely familiar with good design principles and tools such as Figma.
        </p>
        <p>
          I aim to adhere to the principles of reliability, ease of use, and attention to detail in everything I create.
        </p>
      </section>
    </div>
  );
};

const Projects = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-layout">
        <aside className="sidebar">
          <h3>Contents</h3>
          <ul>
            <li onClick={() => scrollToSection('web')}>Web Applications</li>
            <li onClick={() => scrollToSection('android')}>Android Applications</li>
            <li onClick={() => scrollToSection('games')}>Video Games</li>
            <li onClick={() => scrollToSection('misc')}>Miscellaneous</li>
          </ul>
        </aside>

        <div className="project-content">
          <section id="web">
            <h2>Web Applications</h2>

            <h3>The Metro Congestion Control System</h3>
            <p>A complete platform with distinct passenger booking and admin monitoring interfaces, designed to facilitate the monitoring of stations, make ticket booking easier, and reduce station overcrowding by dynamically reallocating passengers and taking advantage of other modes of transport.</p>
            <p>Also provides an easy-to-use interface for requesting wheelchairs and emergency tickets.</p>
            <p><b>Tech Stack:</b> JavaScript, Node.js, Express.js, Oracle SQL, Selenium</p>
            <br />

            <h3>Sirpi Attendance System</h3>
            <p>A face-recognition based attendance system with a React frontend, Node.js backend, and OpenCV-based face matching.</p>
            <p>Consists of an admin dashboard that allows CRUD operations for employee management, a page for attendance log viewing, and automated periodic log mailing via an n8n workflow, as well as a live-feed page for employees to scan their faces, with success/failure notifications.</p>
            <p><b>Tech Stack:</b> React, Node.js, OpenCV, Docker</p>
            <br />
          </section>

          <section id="android">
            <h2>Android Applications</h2>
            <h3>TrustMap</h3>
            <p>An app designed to visualize crime hotspots on a map and enable users to submit safety reports about specific locations.</p>
            <p>Also allows administrators to verify user reports, write reports of their own, and broadcast safety alerts in real-time for areas experiencing crimes and security threats using a web-based admin dashboard.</p>
            <p><b>Tech Stack:</b> Flutter, React, Node.js, Express.js, MongoDB</p>
            <br />
          </section>

          <section id="games">
            <h2>Video Games</h2>
            <h3>Pathogen Protocol</h3>
            <p>A real-time strategy game in which you control the production and movement of your body's immune cells, in order to fight off an infection and protect your organs.</p>
            <p><b>Tech Stack:</b> Unity, C#</p>
            <br />

            <h3>Bomberwing</h3>
            <p>A Flappy Bird clone, completely revamped with a whole bunch of new mechanics, such as projectile lobbing, wall-breaking, powerups, and bullet avoidance.</p>
            <p><b>Tech Stack:</b> Unity, C#</p>
            <br />
          </section>

          <section id="misc">
            <h2>Miscellaneous</h2>
            <h3>Quantum Crop Simulator</h3>
            <p>A gene simulator that implements a Hybrid Quantum-Classical Genetic Algorithm (HQGA) using Quantum Rotation Gates to optimize gene selection and maximize resilience to harsh climatic conditions.</p>
            <p>Achieves almost 42% higher average fitness scores than the Classical Genetic Algorithm.</p>
            <p><b>Tech Stack:</b> Python, Qiskit, NumPy</p>
          </section>
        </div>
      </div>
    </div>
  );
};

const Experience = () => (
  <div>
    <h1>Experience</h1>

    <div className="experience-item">
      <h2>DevOps Intern - Sirpi Products and Services</h2>
      <h4>May 2025 - June 2025</h4>
      <p>
        During this internship, I was primarily tasked with creating and maintaining CI/CD pipelines using Docker and GitHub Actions, with the intent of reducing build-and-deploy cycle times. Using the aforementioned tools, I containerized and deployed 6 full-stack applications (Python, React, Node.js). I also developed and deployed a face-recognition based attendance system for the company using React, OpenCV, and Docker, which was used for the daily check-ins for 50+ employees working there. During the development of the app, I was involved in the migration of the app's cloud storage from AWS S3 to MinIO, which greatly decreased projected monthly operational costs.
      </p>
    </div>
    <br />
    <div className="experience-item">
      <h2>Game Developer - Google Developer Groups, VITC</h2>
      <h4>December 2024 - July 2025</h4>
      <p>
        I primarily worked on two projects during my days as a member of the game development team. The first was Pathogen Protocol, a real-time strategy game based on the human body’s immune system, written in Unity and C#. I also developed Bomberwing, a Flappy Bird-inspired obstacle avoidance game with a multitude of extra mechanics, transforming the original into a full-fledged Endless Flyer.
      </p>
    </div>
  </div>
);

const Resume = () => (
  <div>
    <h1>Resume</h1>
    <div className="resume-fallback">
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
        <button style={{padding: '10px 20px', cursor: 'pointer'}}>Download</button>
      </a>
    </div>
    <object
      data={`${process.env.PUBLIC_URL}/resume.pdf`}
      type="application/pdf"
      width="100%"
      height="800px"
      className="resume-frame"
    >
      <p>It appears your browser doesn't support embedded PDFs.
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`}></a>
      </p>
    </object>
  </div>
);

// --- Main App Component ---

function App() {
  // Initialize theme based on user's system preference
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="shape one"></div>
        <div className="shape two"></div>

        <nav className="navbar">
          <Link to="/" className="nav-brand">Abhinav Renjith</Link>

          <div className="nav-right">
            <div className="nav-links">
              {/* Use NavLink for active styling */}
              <NavLink to="/projects" className={({isActive}) => (isActive ? 'active' : '')}>Projects</NavLink>
              <NavLink to="/experience" className={({isActive}) => (isActive ? 'active' : '')}>Experience</NavLink>
              <NavLink to="/resume" className={({isActive}) => (isActive ? 'active' : '')}>Resume</NavLink>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </nav>

        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <footer>
          Abhinav Renjith, {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

export default App;
