"use client";
import { useState } from "react";
import { Description } from "../components/Description";
import { Title } from "../components/Title";
import { countVowels } from "../challenge/vowelCounter";


export default function VowelCounter() {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<number>();
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleResult = () => {
    setResult(countVowels(value));
    setShowResult(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setValue(inputValue);
      setShowResult(false);
    }
  };
  return (
    <main className="m-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Title name="Vowel Counter" />
        <Description
          name="Vowel Counter
          Create a function that counts the number of vowels in a string. The program should ask the
          user for a sentence and display how many vowels it has."
        />
        <div className="flex flex-col  justify-center items-center mt-6">
          <div className="md:w-1/3 ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              onChange={handleChange}
              value={value}
              placeholder=" value"
            />
          </div>

          <div className="flex items-center my-3">
            <button
              onClick={handleResult}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              verify
            </button>
          </div>
          {showResult && value && (
            <div className="shadow flex items-center bg-green-400 p-3 m-3 rounded flex-col">
              <p>
              the word  &quot;{value}&quot;  has the number {result} of vowels
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
