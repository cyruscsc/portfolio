import { motion } from 'framer-motion';
import './Header.scss';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../../../utils/sanity';
import { brandQuery } from '../../../utils/queries';
import { Brand } from '../../../types/sanity';

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
            <p className='p-text'>Hi, my name is</p>
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
            <p className='p-text'>{brand.description}</p>
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
