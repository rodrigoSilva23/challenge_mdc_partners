"use client";
import { useState } from "react";
import { Description } from "../components/Description";
import { Title } from "../components/Title";
import { table } from "../challenge/table";

type TableProps = {
  number: number;
  result: number;
};
export default function Table() {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<Array<TableProps>>([]);
  const [showResult, setShowResult] = useState(false);

  const handleResult = () => {
    setResult(table(+number));
    setShowResult(true);
  };
  return (
    <main className="m-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <Title name="Table" />
        <Description
          name="
          Create a program that receives a number from the user and displays the table of that
          number, from 1 to 10."
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
              {result?.map((item) => {
                return (
                  <p key={item?.number}>
                    {" "}
                    {item?.number} X  {number} =  {item?.result}{" "}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
