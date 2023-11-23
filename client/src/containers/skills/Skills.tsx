import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../../components';
import { Experience, Skill } from '../../../types/sanity';
import { client } from '../../../utils/sanity';
import { experienceQuery, skillsQuery } from '../../../utils/queries';
import './Skills.scss';

const Skills = () => {
  const [languages, setLanguages] = useState<Skill[]>([] as Skill[]);
  const [backends, setBackends] = useState<Skill[]>([] as Skill[]);
  const [frontends, setFrontends] = useState<Skill[]>([] as Skill[]);
  const [exp, setExp] = useState<Experience[]>([] as Experience[]);

  useEffect(() => {
    client.fetch(skillsQuery).then((data: Skill[]) => {
      setLanguages(
        data
          .filter((x) => x.category === 'language')
          .sort((a, b) => a.order - b.order)
      );
      setBackends(
        data
          .filter((x) => x.category === 'backend')
          .sort((a, b) => a.order - b.order)
      );
      setFrontends(
        data
          .filter((x) => x.category === 'frontend')
          .sort((a, b) => a.order - b.order)
      );
    });
    client
      .fetch(experienceQuery)
      .then((data: Experience[]) =>
        setExp(data.sort((a, b) => b.year - a.year))
      );
  }, []);

  return (
    <section id='skills' className='app__container app__skills'>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='subtitle-text'>I Know...</h2>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='skills-experience-container'
      >
        <div>
          <div className='skills-container'>
            {languages.map((language) => (
              <Badge skill={language} type='lg' />
            ))}
            {backends.map((backend) => (
              <Badge skill={backend} type='lg' />
            ))}
            {frontends.map((frontend) => (
              <Badge skill={frontend} type='lg' />
            ))}
          </div>
        </div>
        <div className='experience-container'>
          {exp.map((exp) => (
            <div className='experience-row'>
              <div className='experience-col'>
                <h3 className='section-heading'>{exp.year}</h3>
              </div>
              <div className='experience-col'>
                {exp.works.map((work) => (
                  <div className='work-container'>
                    <h3 className='section-heading'>{work.name}</h3>
                    <h4>{work.company}</h4>
                    {work.description && <p>{work.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
