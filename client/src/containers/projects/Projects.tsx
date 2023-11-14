import { motion } from 'framer-motion';
import './Projects.scss';
import { useEffect, useState } from 'react';
import { Project } from '../../../types/sanity';
import { client } from '../../../utils/sanity';
import { projectsQuery } from '../../../utils/queries';
import Card from '../../components/card/Card';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([] as Project[]);

  useEffect(() => {
    client
      .fetch(projectsQuery)
      .then((data: Project[]) =>
        setProjects(data.sort((a, b) => a.order - b.order))
      );
  }, []);

  return (
    <section id='projects' className='app__container app__projects'>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='subtitle-text'>I Did...</h2>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='app__projects-container'
      >
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
