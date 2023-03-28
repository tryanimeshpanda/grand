import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">"Where every dish is a masterpiece"</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>At Grand, we believe that every detail matters, from the presentation of our dishes to the selection of our wines. We take pride in offering our guests an exceptional dining experience that is unparalleled in quality and luxury.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;