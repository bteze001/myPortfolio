import React from 'react';
import { motion } from 'framer-motion';
import "./skills.css";
import PageHeader from './PageHeader';

const Skills = () => {

    const skillsData = [
      { skill: 'C++', percentage: 100 },
      { skill: 'Data Structures & Algorithms', percentage: 100},
      { skill: 'Git & Github', percentage: 100},
      { skill: 'Assembly', percentage: 90}, 
      { skill: 'HTML', percentage: 80 },
      {skill: 'CSS', percentage: 80 }, 
      { skill: 'React', percentage: 60}, 
      { skill: 'Python', percentage: 50}, 
    ];

    const skillVariants = {

        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },

    };

    const fillAnimation = (percentage) => ({

          initial: { width: 0 },
          animate: { width: `${percentage}%`, transition: { duration: 1 }}

    });

    return (
        <section className="skills">
          <PageHeader title="My Skills" description="Discover my technical proficiency" />
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
            </motion.h2>
    
            <motion.ul className='skills-list'>
              {skillsData.map((skill, index) => (
                <motion.li key={index} variants={skillVariants} initial="initial" animate="animate"> 
                  <div className='skill-name'>{skill.skill}</div>      
                  <div className='skill-bar'>  
                    <motion.div className='skill-fill' variants={fillAnimation(skill.percentage)} initial="initial" animate="animate">  
                      <div className='percentage-text'>{skill.percentage}% </div>
                    </motion.div>
                </div>
                </motion.li>
              ))}
            </motion.ul>


          {/* </div> */}
        </section>
    );

};

export default Skills;