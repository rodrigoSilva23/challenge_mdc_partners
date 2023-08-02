
type DescriptionProps = {
  name:string
}
export const Description = ({name}:DescriptionProps) => {
  return (

      <p className="text-center font-semibold">
       {name}
      </p>
  );
}