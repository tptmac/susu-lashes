import { map as _map } from 'lodash';
import React from 'react';
import Slider from 'react-slick';

import { isMobileWindow, PageType } from '../../constants';
import Page from '../common/Page';
import Pic1 from './assets/pic1.png';
import Pic2 from './assets/pic2.png';
import Pic3 from './assets/pic3.png';
import Pic4 from './assets/pic4.png';
import Pic5 from './assets/pic5.png';

const IMAGES = [Pic1, Pic2, Pic3, Pic4, Pic5];

function GalleryPage() {
  const [isMobile, setIsMobile] = React.useState(isMobileWindow());
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileWindow());
    };
    window.addEventListener('resize', handleResize)
  });
  return (
    <Page pageType={PageType.GALLERY}>
      <Slider
        dots
        infinite
        centerMode
        speed={500}
        slidesToShow={isMobile ? 1 : 3}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={2000}
        pauseOnHover
        cssEase="linear"
      >
        {_map(IMAGES, (image) => (
          <img src={image} />
        ))}
      </Slider>
    </Page>
  );
}

export default GalleryPage;
