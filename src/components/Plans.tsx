import React from 'react';
import style from '../styles/components/Plans.module.css';
import { setPlan } from '../app/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Switch from './Switch';
const Plans = (): JSX.Element => {
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
      image:
        'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-arcade_r5lux3.png',
      title: 'Arcade',
      price: '$90/mo',
    },
    {
      image:
        'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-advanced_vt9eea.png',
      title: 'Advanced',
      price: '$120/mo',
    },
    {
      image:
        'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-pro_m4wdx3.png',
      title: 'Pro',
      price: '$150/mo',
    },
  ];
  const dispatch = useDispatch();
  const [active, setActive] = React.useState<number>();
  const yearly = useSelector((state: RootState) => state.user.yearly);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const plan = e.currentTarget.name;
    if (plan === 'Arcade') {
      dispatch(setPlan(plan));
      setActive(0);
    }
    if (plan === 'Advanced') {
      dispatch(setPlan(plan));
      setActive(1);
    }
    if (plan === 'Pro') {
      dispatch(setPlan(plan));
      setActive(2);
    }
  };
  const getData = () => {
    return yearly ? data.slice(3, 6) : data.slice(0, 3);
  };
  return (
    <div className={style.Plans__body}>
      {getData().map((item, i) => {
        return (
          <button onClick={handleClick} name={item.title}>
            <div
              id={i.toString()}
              className={
                active === i ? style.Plans__card_active : style.Plans__card
              }
            >
              <div className={style.Plans__card_img}>
                <img loading='lazy' src={item.image} alt={item.title} />
              </div>
              <div className={style.Plans__card_content}>
                <span>{item.title}</span>
                <p>{item.price}</p>
              </div>
            </div>
          </button>
        );
      })}
      <Switch />
    </div>
  );
};

export default Plans;
