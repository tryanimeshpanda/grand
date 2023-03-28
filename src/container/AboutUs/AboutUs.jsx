import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Grand, we believe that dining is an experience that should engage all of your senses. That's why we offer a sophisticated and elegant atmosphere, exceptional cuisine prepared with the finest ingredients, and attentive service that ensures that every guest feels valued and appreciated. Come join us for an unforgettable dining experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Grand Restaurant was founded with a vision to create a modern dining experience that combines innovative cuisine with exceptional service. Our team of talented chefs uses the latest culinary techniques to create dishes that are as visually stunning as they are delicious. Our chic and contemporary atmosphere is perfect for those looking for a truly modern dining experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;