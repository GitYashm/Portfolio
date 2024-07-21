import { motion } from "framer-motion";
export default function About() {
  const delaystyle = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const delaystyle2 = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <motion.div className="About">
      <motion.div
        className="About-image"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="../images/Yash.jpeg"
          alt=""
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div className="About-Me-content">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.9 }}
        >
          <span>A</span>bout <span>M</span>e
        </motion.h2>
        <motion.h4
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 1 }}
        >
          <span>F</span>ull <span>S</span>tack <span>D</span>eveloper
        </motion.h4>
        <br />
        <br />
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 1.1 }}
        >
          I'm a Master of Computer Science student from JSS Academy Of Technical
          Education, Noida with excellent academic background and diverse
          skillset. Experienced in Web development. I am well versed with
          Node.js, Java, C and C++ programming languages. and basics of
          Javascript, HTML and CSS. I have strong programming skills and problem
          solving abilities. My area of interest to includes Data structure and
          Algorithm.
        </motion.p>
        <motion.a href="../images/YASH_MISHRA.pdf" download>
          <motion.button
            className="btn btn-success"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
          >
            Download Resume
          </motion.button>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
