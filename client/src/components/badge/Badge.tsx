import { Skill } from '../../../types/sanity';
import { urlFor } from '../../../utils/sanity';
import './Badge.scss';

const Badge = (skill: Skill) => {
  return (
    <div className='app__badge'>
      <img src={urlFor(skill.icon).url()} alt={skill.name} />
    </div>
  );
};

export default Badge;
