"use client";
import { useState } from "react";
import { Description } from "../components/Description";
import { Title } from "../components/Title";
import { gradeAverage } from "../challenge/GradeAverage";

type Grades = {
  gradeOne: string;
  gradeTwo: string;
  gradeThree: string;
};

const initialGrades: Grades = {
  gradeOne: "",
  gradeTwo: "",
  gradeThree: "",
};

export default function GradeAverage() {
  const [grades, setGrades] = useState<Grades>(initialGrades);
  const [result, setResult] = useState<number>();
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleResult = () => {
    const data = {
      gradeOne: +grades.gradeOne,
      gradeTwo: +grades.gradeTwo,
      gradeThree: +grades.gradeThree,
    };
    setResult(gradeAverage(data));
    setShowResult(true);
  };
  return (
    <main className="m-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Title name="Grade Average" />
        <Description
          name="Create a program that takes a student's grades in three different subjects and calculates the
          average of the grades. Then display the calculated average."
        />
        <div className="flex flex-col  justify-center items-center mt-6">
          <div className="md:w-1/3 ">
            <label htmlFor="gradeOne" className="block mb-2  font-medium">
              grade One
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="gradeOne"
              type="number"
              onChange={(e) => {
                setGrades({ ...grades, gradeOne: e.target.value });
                setShowResult(false);
              }}
              value={grades.gradeOne}
              placeholder=" grade"
            />
          </div>
          <div className="md:w-1/3 ">
            <label htmlFor="gradeTwo" className="block my-1  font-medium">
              grade Two
            </label>
            <input
              className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full my-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="gradeTwo"
              type="number"
              onChange={(e) => {
                setGrades({ ...grades, gradeTwo: e.target.value });
                setShowResult(false);
              }}
              value={grades.gradeTwo}
              placeholder="grade"
            />
          </div>
          <div className="md:w-1/3 ">
            <label htmlFor="gradeThree" className="block my-1  font-medium">
              grade Three
            </label>

            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="gradeThree"
              type="number"
              onChange={(e) => {
                setGrades({ ...grades, gradeThree: e.target.value });
                setShowResult(false);
              }}
              value={grades.gradeThree}
              placeholder="grade"
            />
          </div>

          <div className="flex items-center my-3">
            <button
              onClick={handleResult}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              calculate
            </button>
          </div>
          {showResult && (
            <div className="shadow flex items-center bg-green-400 p-3 m-3 rounded flex-col">
              <p>
                your average is: <b>{result}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
