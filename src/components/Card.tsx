import styles from '../styles/components/Cards.module.css';

interface cardProps {
  title: string;
  description: string;
}

export default function Cards({ title, description }: cardProps) {
  return (
    <div className={styles.Card__body}>
      <div className={styles.Card__content}>
        <div className={styles.Card__title}>{title}</div>
        <div className={styles.Card__description}>{description}</div>
      </div>
    </div>
  );
}
