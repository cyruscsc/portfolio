import { useEffect, useState } from 'react';
import { RiLinkedinFill, RiGithubLine } from 'react-icons/ri';
import { Social } from '../../../types/sanity';
import { client } from '../../../utils/sanity';
import { socialsQuery } from '../../../utils/queries';
import './Footer.scss';

const Footer = () => {
  const [linkedin, setLinkedin] = useState<Social>();
  const [github, setGithub] = useState<Social>();

  useEffect(() => {
    client.fetch(socialsQuery).then((data) => {
      setLinkedin(data.filter((x: Social) => x.platform === 'linkedin')[0]);
      setGithub(data.filter((x: Social) => x.platform === 'github')[0]);
    });
  }, []);

  const year = new Date().getFullYear();
  return (
    <footer className='app__footer'>
      <ul className='app__socials'>
        <li className='app__flex'>
          <a href={linkedin?.link} target='_blank'>
            <RiLinkedinFill />
          </a>
        </li>
        <li className='app__flex'>
          <a href={github?.link} target='_blank'>
            <RiGithubLine />
          </a>
        </li>
      </ul>
      <span className='app__copyright'>
        &copy; {year} Cyrus Chan. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
