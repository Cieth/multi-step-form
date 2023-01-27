import React from 'react';
import style from '../styles/components/Finish.module.css';
const Finish = () => {
  return (
    <div className={style.Finish__main}>
      <div className={style.Finish__main_img}>
        <img
          src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1674755538/icon-thank-you_d3bcns.png'
          alt='okay'
        />
      </div>
      <div>
        <span>Thank you!</span>
      </div>
      <div>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@oavagaming.com
        </p>
      </div>
    </div>
  );
};

export default Finish;
