import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.div className="contact">
      <motion.div className="contact-details">
        <motion.div
          className="card phone"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="phone-image">
            <img src="../images/phone.png" alt="" />
          </motion.div>
          <motion.div
            className="phone-detail"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <h2>
              <span>P</span>hone
            </h2>
            <p>7302099889</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="card email"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img src="../images/email.png" alt="" />
          <h1>
            <span>E</span>mail
          </h1>
          <p>yash571w1@gmail.com</p>
          <p>ym.mishra.9889@gmail.com</p>
        </motion.div>
        <motion.div
          className="card address"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img src="../images/address.png" alt="" />
          <h1>
            <span>A</span>ddress
          </h1>
          <p>2/42 Begum Bagh Aligarh</p>
          <p>Sector 34 Noida</p>
        </motion.div>
        <motion.div
          className="card whatsapp"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img src="../images/whastapp.png" alt="" />
          <h1>
            <span>W</span>hatsapp
          </h1>
          <p>7302099889</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="contact-form"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <span>C</span>ontact <span>M</span>e
        </motion.h1>
        <form>
          <motion.div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Your Email address
            </label>
            <input type="email" className="form-control" />
            <motion.div id="emailHelp" className="form-text"></motion.div>
          </motion.div>
          <motion.div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Your Message
            </label>
            <input type="text" className="form-control" />
          </motion.div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
