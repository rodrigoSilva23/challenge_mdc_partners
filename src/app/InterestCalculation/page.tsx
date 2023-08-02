"use client";
import { useState } from "react";
import { Description } from "../components/Description";
import { Title } from "../components/Title";
import { interestCalculation } from "../challenge/interestCalculation";

type InterestCalculation = {
  initialCapital: string;
  interestRate: string;
  investmentTimeMonths: string;
};

const initialInterestCalculation: InterestCalculation = {
  initialCapital: "",
  interestRate: "",
  investmentTimeMonths: "",
};

export default function InterestCalculation() {
  const [interestCal, setInterestCal] =
    useState<InterestCalculation>(initialInterestCalculation);
  const [result, setResult] = useState<number>();
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleResult = () => {
    const data = {
      initialCapital: +interestCal.initialCapital,
      interestRate: +interestCal.interestRate,
      investmentTimeMonths: +interestCal.investmentTimeMonths,
    };
    setResult(interestCalculation(data));
    setShowResult(true);
  };
  return (
    <main className="m-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Title name="Interest Calculation" />
        <Description
          name="Create a function that calculates the final value of an investment based on initial capital,
          interest rate, and investment time (in months). The program must prompt the user for these
          values and display the final value."
        />
        <div className="flex flex-col  justify-center items-center mt-6">
          <div className="md:w-1/3 ">
            <label htmlFor="initialCapital" className="block mb-2  font-medium">
            initial Capital
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="initialCapital"
              type="number"
              onChange={(e) => {
                setInterestCal({
                  ...interestCal,
                  initialCapital: e.target.value,
                });
                setShowResult(false);
              }}
              value={interestCal.initialCapital}
              placeholder=" initial Capital"
            />
          </div>
          <div className="md:w-1/3 ">
            <label htmlFor="interestRate" className="block my-1  font-medium">
            interest Rate
            </label>
            <input
              className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full my-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="interestRate"
              type="number"
              onChange={(e) => {
                setInterestCal({
                  ...interestCal,
                  interestRate: e.target.value,
                });
                setShowResult(false);
              }}
              value={interestCal.interestRate}
              placeholder="interest Rate"
            />
          </div>
          <div className="md:w-1/3 ">
            <label
              htmlFor="investmentTimeMonths"
              className="block my-1  font-medium"
            >
              investment Time
            </label>

            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="investmentTimeMonths"
              type="number"
              onChange={(e) => {
                setInterestCal({
                  ...interestCal,
                  investmentTimeMonths: e.target.value,
                });
                setShowResult(false);
              }}
              value={interestCal.investmentTimeMonths}
              placeholder="Months"
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
              you accumulated <b>{result}</b>  in total <b>{interestCal.investmentTimeMonths}</b> months
             
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
