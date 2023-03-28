import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What do we believe in?</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">"Experience unparalleled luxury dining at Grand"</p>
          <br />
        </div>
        <p className="p__opensans">As the owner of Grand, I assure our guests that we provide an exceptional dining experience that is unparalleled in quality and sophistication. Our team of experienced chefs uses only the finest ingredients to create dishes that are both delicious and visually stunning. We pride ourselves on offering a diverse menu that caters to various dietary preferences and cultural tastes. Our attentive and knowledgeable staff is dedicated to providing exceptional service. Come experience the elegance and sophistication of Grand for yourself.</p>
      </div>

      <div className="app__chef-sign">
        <p>Animesh Panda</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;