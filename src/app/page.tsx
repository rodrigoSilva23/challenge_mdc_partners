"use client";
import { useState } from "react";
import { Description } from "./components/Description";
import { Title } from "./components/Title";
import { simpleCalculator } from "./challenge/simpleCalculator";

export default function SimpleCalculator() {
  const [numberOne, setNumberOne] = useState<string>("");
  const [numberTwo, setNumberTwo] = useState<string>("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState<number>();

  const handleCalculator = () => {
    const data = { numberOne: +numberOne, numberTwo: +numberTwo, operator };
    setResult(simpleCalculator(data));
  };
  return (
    <main className="m-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Title name="Simple Calculator" />
        <Description name="Create a calculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation." />
        <div className="flex flex-col  justify-center items-center mt-6">
          <div className="md:w-1/3 ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="number"
              onChange={(e) => {
                setNumberOne(e.target.value);
                setResult(undefined);
              }}
              value={numberOne}
              placeholder=" value 1"
            />
          </div>
          <div className="inline-block relative my-5">
            <label
              className="  tracking-wide text-xs font-bold mb-2"
              htmlFor="operator"
            >
              operator:
            </label>
            <select
              id="operator"
              onChange={(e) => {
                setOperator(e.target.value);
                setResult(undefined);
              }}
              className="block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>
          <div className="md:w-1/3 mb-6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="number"
              onChange={(e) => {
                setNumberTwo(e.target.value);
                setResult(undefined);
              }}
              value={numberTwo}
              placeholder=" value 2"
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={handleCalculator}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              calculate
            </button>
          </div>
          {result !== undefined && (
            <div className="shadow flex items-center bg-green-400 p-3 m-3 rounded">
              result of the {numberOne} {operator} {numberTwo} operation is:
              <b>{result}</b>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
