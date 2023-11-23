import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brand } from '../../../types/sanity';
import { brandQuery } from '../../../utils/queries';
import { client, urlFor } from '../../../utils/sanity';
import './Header.scss';

const Header = () => {
  const [brand, setBrand] = useState<Brand>({} as Brand);

  useEffect(() => {
    client.fetch(brandQuery).then((data) => setBrand(data[0]));
  }, []);

  return (
    <section className='app__container app__header'>
      <div className='app__header-container'>
        <div className='text-container'>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <p className='greeting'>Hi, my name is</p>
            <h1 className='title-text'>{brand.name}</h1>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className='subtitle-text'>{brand.headline}</h2>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className='introduction'>{brand.description}</p>
          </motion.div>
        </div>
        <div className='image-container'>
          {brand.image && (
            <motion.img
              src={urlFor(brand.image).url()}
              alt={brand.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
