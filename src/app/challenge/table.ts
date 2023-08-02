
type  TableProps = {
  number: number;
  result: number;
};
export const table = (num: number):Array<TableProps> => {
  const table = []
  for (let i = 1; i <= 10; i++) {
    const result = num * i;
    table.push({number:i,result});
  }
  return table
}