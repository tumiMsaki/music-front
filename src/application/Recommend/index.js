import React from 'react';
import Slider from '../../components/slider';

function Recommend () {

  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "" }
  });

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
    </div>
  )
}

export default React.memo (Recommend);