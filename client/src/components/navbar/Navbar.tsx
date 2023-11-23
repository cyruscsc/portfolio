import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiLinkedinFill, RiGithubLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Social } from '../../../types/sanity';
import { images, navlinks } from '../../constants';
import { client } from '../../../utils/sanity';
import { socialsQuery } from '../../../utils/queries';
import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [linkedin, setLinkedin] = useState<Social>();
  const [github, setGithub] = useState<Social>();

  useEffect(() => {
    client.fetch(socialsQuery).then((data) => {
      setLinkedin(data.filter((x: Social) => x.platform === 'linkedin')[0]);
      setGithub(data.filter((x: Social) => x.platform === 'github')[0]);
    });
  }, []);

  const variants = {
    open: {
      clipPath: 'circle(70rem at right top)',
      transition: { type: 'spring', stiffness: 200, damping: 40 },
    },
    closed: {
      clipPath: 'circle(1.5rem at right top)',
      transition: { type: 'spring', stiffness: 200, damping: 40 },
    },
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='Cyrus Chan' />
      </div>
      <ul className='app__navbar-links'>
        <li className='app__flex'>
          <div />
          <a href={linkedin?.link} target='_blank'>
            <RiLinkedinFill />
          </a>
        </li>
        <li className='app__flex'>
          <div />
          <a href={github?.link} target='_blank'>
            <RiGithubLine />
          </a>
        </li>
        {navlinks.map((link) => (
          <li key={link.title} className='app__flex'>
            <div />
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt3 onClick={() => setOpen(true)} />
        <motion.div animate={open ? 'open' : 'closed'} variants={variants}>
          <HiX onClick={() => setOpen(false)} />
          <ul className='y-list'>
            {navlinks.map((link) => (
              <li key={'menu-' + link.title}>
                <a href={link.path} onClick={() => setOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className='x-list'>
            <li>
              <a href={linkedin?.link} target='_blank'>
                <RiLinkedinFill />
              </a>
            </li>
            <li>
              <a href={github?.link} target='_blank'>
                <RiGithubLine />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
