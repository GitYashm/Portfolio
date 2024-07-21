import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="Home-main">
      <div className="nameSection">
        <div className="head ">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
          >
            Hey there, <br />
            it's <span>Y</span>ash <span>M</span>ishra...
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            As a full stack developer, I thrive on the ability to craft
            complete, end-to-end web solutions that are both functional and
            visually engaging. My expertise spans a wide array of technologies
            and frameworks, allowing me to handle every aspect of the
            development process, from designing intuitive user interfaces to
            building robust server-side architectures. With a strong commitment
            to continuous learning and an eye for detail, I am dedicated to
            delivering high-quality, scalable, and efficient web applications.
          </motion.p>
          <div className="home-icons">
            <motion.a
              href="https://www.instagram.com/yashmishra7916/"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <FaInstagram className="insta" />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/u/0/#inbox"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <BiLogoGmail className="gmail" />
            </motion.a>
            <motion.a
              href="https://github.com/GitYashm"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaGithub className="git" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yash-mishra-linkdin/"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img className="linkdin" src="../images/linkdin.png" alt="" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="imageSection">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.3 }}
          className="image-orange-pattern"
          src="../images/pattern.png"
          alt=""
        />
        <motion.img
          className="image-2"
          src="../images/Yash.jpeg"
          alt=""
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
export default Home;
