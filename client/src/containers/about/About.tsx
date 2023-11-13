import { useEffect, useState } from 'react';
import { client } from '../../../utils/sanity';
import { aboutQuery } from '../../../utils/queries';
import { About } from '../../../types/sanity';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const [about, setAbout] = useState<About>({} as About);

  useEffect(() => {
    client.fetch(aboutQuery).then((data) => setAbout(data[0]));
  }, []);

  return (
    <section id='about' className='app__container app__about'>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='subtitle-text'>{about.title}</h2>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <PortableText value={about.description} />
      </motion.div>
    </section>
  );
};

export default About;
