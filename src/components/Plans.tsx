import React from 'react';
import style from '../styles/components/Plans.module.css';
const Plans = () => {
  const data = [
    {
      image:
        'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-arcade_r5lux3.png',
      title: 'Arcade',
      price: '$9/mo',
    },
    {
      image:
        'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-advanced_vt9eea.png',
      title: 'Advanced',
      price: '$12/mo',
    },
    {
      image:
        'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-pro_m4wdx3.png',
      title: 'Pro',
      price: '$15/mo',
    },
    {
      image: '',
      title: 'Arcade',
      price: '$90/mo',
    },
    {
      image: '',
      title: 'Advanced',
      price: '$120/mo',
    },
    {
      image: '',
      title: 'Pro',
      price: '$150/mo',
    },
  ];

  return (
    <div className={style.Plans__body}>
      {data.slice(0, 3).map((item, i) => {
        return (
          <div id={i.toString()} className={style.Plans__card}>
            <div className={style.Plans__card_img}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={style.Plans__card_content}>
              <span>{item.title}</span>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
