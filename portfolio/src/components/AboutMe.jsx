import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/Profile-2.jpg"

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Hello! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>A passionate third-year Computer Science student pursuing a Bachelors degree at the University of California, Riverside.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  My academic pursuits have equipped me with a strong foundation in C ++ to develop and implement complex algorithms, data structures, 
                  and software development. 
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  In addition to my programming skill, I am also knowledgeable in web development technologies such as HTML, CSS, JavaScript and React. I have some experience
                  designing and building responsive and user-friendly websites.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  As I continue my journey, I look forward to exploring new technologies, contributing to innovative projects, and 
                  leveraging my skills to make a positive impact. 
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  My technical skills combined with my passion for problem solving make me a valuable
                  asset to any team. I am able to quickly learn new technologies and always eager to take on new challenges. 
                </motion.p>
                {/* <br /> */}
                {/* <motion.p variants={paragraphVariants}>
                  Thank you for taking the time to learn more about me.
                </motion.p> */}
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Projects" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
