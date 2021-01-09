import React from 'react';

import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';

import { MainFooter, FooterIcons } from './styles';

const Footer: React.FC = () => {
  return (
    <MainFooter>
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <FooterIcons>
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig">
          <InstagramIcon />
        </a>
      </FooterIcons>
    </MainFooter>
  );
};

export default Footer;
