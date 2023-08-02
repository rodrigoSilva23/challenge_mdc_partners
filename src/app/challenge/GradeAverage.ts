
type Grades = {
  gradeOne: number;
  gradeTwo: number;
  gradeThree: number;
};
export const gradeAverage = (grades:Grades):number => {
  const {gradeOne,gradeTwo,gradeThree} = grades
  const result = (gradeOne + gradeTwo + gradeThree) / 3
  return +result.toFixed(2)
}