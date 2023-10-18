import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImg from './gallery-images';

const MasonryImgGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImg.map((item, index) => (
          <div key={index}>
            <img
              className="masonry__img"
              src={item}
              alt={item.alt}
              style={{ width: '100%', display: 'block', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImgGallery;
