import { motion } from 'framer-motion';
import { Skill } from '../../../types/sanity';
import { urlFor } from '../../../utils/sanity';
import './Badge.scss';

interface BadgeProps {
  skill: Skill;
  type: 'sm' | 'lg';
}

const Badge = ({ skill, type }: BadgeProps) => {
  return (
    (type === 'sm' && (
      <div className='app__badge-sm'>
        <img src={urlFor(skill.icon).url()} alt={skill.name} />
      </div>
    )) ||
    (type === 'lg' && (
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        whileTap={{
          cursor: 'grabbing',
          scale: 1.05,
          boxShadow: '0px 0px 20px rgba(82, 97, 107, 0.25)',
        }}
        transition={{ duration: 0.1, type: 'tween' }}
        className='app__badge-lg'
      >
        <img src={urlFor(skill.icon).url()} alt={skill.name} />
        <span>{skill.name}</span>
      </motion.div>
    ))
  );
};

export default Badge;
