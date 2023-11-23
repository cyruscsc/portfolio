import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images, navlinks } from '../../constants';
import './Navbar.scss';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

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
          <ul>
            {navlinks.map((link) => (
              <li key={'menu-' + link.title}>
                <a href={link.path} onClick={() => setOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
