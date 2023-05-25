import { Image } from '@chakra-ui/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  const images = [
    'https://cdn.discordapp.com/attachments/1110904435569332305/1110911791476785162/00006-3705878774.png',
    'https://cdn.discordapp.com/attachments/1110904435569332305/1110904456733794334/00000-3096690482.png',
    'https://cdn.discordapp.com/attachments/1110904435569332305/1110905044188024892/00001-149946166.png',
    'https://cdn.discordapp.com/attachments/1110904435569332305/1110908210052861982/00003-1714563858.png',
    'https://cdn.discordapp.com/attachments/1110904435569332305/1110926360635002880/00014-1715328811.png'
  ]

  return (
    <Swiper style={{ width: '100%', height: '100%' }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 3000,
        
      }}
    >
      {images.map((image) => 
        <SwiperSlide>
          <Image w="100%" objectFit="cover" objectPosition="center" src={image} />
        </SwiperSlide>)}

    </Swiper>
  );
};
