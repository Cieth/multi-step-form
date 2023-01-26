import style from '../styles/components/Fields.module.css';
const Fields = (): JSX.Element => {
  return (
    <form className={style.Fields__body}>
      <div className={style.Fields}>
        <label htmlFor='Name'>Name</label>
        <input name='Name' type='text' placeholder='e.g Stephen King' />
      </div>
      <div className={style.Fields}>
        <label htmlFor='Email'>Email Address</label>
        <input
          name='Email'
          type='email'
          placeholder='e.g stephenking@lorem.com'
        />
      </div>
      <div className={style.Fields}>
        <label htmlFor='Phone'>Phone Number</label>
        <input name='Phone' type='text' placeholder='e.g +1 234 567 890' />
      </div>
    </form>
  );
};

export default Fields;
