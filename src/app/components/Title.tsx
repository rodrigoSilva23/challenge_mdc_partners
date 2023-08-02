
type TitleProps = {
  name: string;
};

export const Title = ({name}: TitleProps) => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">{name}</h1>
    </div>
  );
}