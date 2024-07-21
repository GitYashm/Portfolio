import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <motion.div className="navbar-main">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <motion.div className="container-fluid">
          <motion.div>
            <a className="navbar-brand" href="#">
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span>Y</span>ash <span>M</span>ishra..
              </motion.h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </motion.div>

          <motion.div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <Link className="initial-Link-home" to="/">
              Home
            </Link>
            <motion.ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <motion.li className="nav-item">
                <motion.a
                  className="nav-link"
                  aria-current="page"
                  href="./Home.jsx"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link to="/">Home</Link>
                </motion.a>
              </motion.li>
              <li className="nav-item">
                <motion.a
                  className="nav-link"
                  href="./About.jsx"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link to="/projects">Projects</Link>
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  className="nav-link"
                  href="#"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link to="/about">About</Link>
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  className="nav-link"
                  href="#"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Link to="/skills">Skill</Link>
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  className="nav-link"
                  href="#"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <Link to="/contact">Contact</Link>
                </motion.a>
              </li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </nav>
    </motion.div>
  );
}
