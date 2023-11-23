import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { Badge, ButtonLink } from '../../components';
import { Project } from '../../../types/sanity';
import { urlFor } from '../../../utils/sanity';
import './Card.scss';

const Card = (project: Project) => {
  return (
    <motion.article
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 0px 20px rgba(82, 97, 107, 0.25)',
      }}
      transition={{ duration: 0.5, type: 'tween' }}
      className='app__project-card'
    >
      <div className='content-container'>
        <img
          src={urlFor(project.image).url()}
          alt={project.title}
          className='project-image'
        />
        <div className='text-container'>
          <h3 className='section-heading'>{project.title}</h3>
          <PortableText value={project.description} />
        </div>
        <div className='badges-container'>
          {project.tags
            .sort((a, b) => a.order - b.order)
            .map((skill) => (
              <Badge key={skill.name} skill={skill} type='sm' />
            ))}
        </div>
      </div>
      <div className='links-container'>
        <ButtonLink
          label={project.launched ? 'View' : 'Demo'}
          to={project.projectLink}
          target='_blank'
        />
        <ButtonLink label='Code' to={project.codeLink} target='_blank' />
      </div>
    </motion.article>
  );
};

export default Card;
