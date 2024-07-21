import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function footer() {
  return (
    <motion.div className="footer">
      <motion.div
        className="footer-icons"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <a href="https://www.instagram.com/yashmishra7916/">
          <FaInstagram className="insta" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <BiLogoGmail className="gmail" />
        </a>
        <a href="https://github.com/GitYashm">
          <FaGithub className="git" />
        </a>
        <a href="https://www.linkedin.com/in/yash-mishra-linkdin/">
          <img className="linkdin" src="../images/linkdin.png" alt="" />
        </a>
      </motion.div>
    </motion.div>
  );
}
