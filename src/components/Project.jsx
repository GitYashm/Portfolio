import { motion } from "framer-motion";
export default function Projects() {
  const delaystyle = (delay) => ({
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="Projects">
      <div className="Project-heading">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>P</span>rojects
        </motion.h1>
      </div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/rp7.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Music-Own</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/chef.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Chef-Genie</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-sec">
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/jokes.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Jokes Generator</h5>
          <p className="card-text"></p>
          <a
            href="https://jokes-generator-jg1e.vercel.app/"
            className="btn btn-primary"
          >
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/calculator.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Calculator</h5>
          <p className="card-text"></p>
          <a
            href="https://gityashm.github.io/Calculator/"
            className="btn btn-primary"
          >
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img
          src="../images/Netflix-696x392.png"
          className="card-image-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Netflix Clone</h5>
          <p className="card-text"></p>
          <a
            href="https://gityashm.github.io/Netflix-clone/"
            className="btn btn-primary"
          >
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/sddefault.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Todo List</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/tempreture.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Tempreture Converter</h5>
          <p className="card-text"></p>
          <a
            href="https://gityashm.github.io/Tempreture-Converter/"
            className="btn btn-primary"
          >
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/weather.jpg" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text"></p>
          <a
            href="https://weather-app-omega-eight-32.vercel.app/"
            className="btn btn-primary"
          >
            Link
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        style={{ width: "18rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="../images/spotify.png" className="card-image-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Spotify Clone</h5>
          <p className="card-text"></p>
          <a
            href="https://gityashm.github.io/Spotify-Clone/"
            className="btn btn-primary"
          >
            Link
          </a>
        </div>
      </motion.div>
    </div>
  );
}
