"use client";
import { useState } from "react";
import { Description } from "../components/Description";
import { Title } from "../components/Title";
import { primeNumbers } from "../challenge/primeNumbers";
type ResultProps = {
  isPrime: boolean;
  primes: number[];
};

export default function PrimeNumbers() {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<ResultProps>();
  const [showResult, setShowResult] = useState(false);

  const handleResult = () => {
    setResult(primeNumbers(+number));
    setShowResult(true);
  };
  return (
    <main className="m-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Title name="Prime Numbers" />
        <Description
          name="Write a function that checks whether a number is prime or not. Then create a program that
prints the first 10 prime numbers."
        />
        <div className="flex flex-col  justify-center items-center mt-6">
          <div className="md:w-1/3 ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="number"
              onChange={(e) => {
                setNumber(e.target.value);
                setShowResult(false);
              }}
              value={number}
              placeholder=" value"
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
          {showResult && number && (
            <div className="shadow flex items-center bg-green-400 p-3 m-3 rounded flex-col">
              <p>
                {result?.isPrime ? (
                  <span>number {number} is a prime</span>
                ) : (
                  <span>the number {number} is not a prime number</span>
                )}
              </p>
              <p>
                list of the first 10 prime numbers:
                {result?.primes.map((prime) => {
                  return <span key={prime}>, {prime}</span>;
                })}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
