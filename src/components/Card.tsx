interface cardProps {
  title: string;
  description: string;
}

export default function Cards({ title, description }: cardProps) {
  return (
    <>
      {title}
      {description}
    </>
  );
}
