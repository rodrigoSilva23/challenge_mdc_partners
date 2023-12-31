import { LinkMenu } from "../LinkMenu";

export const Menu = () => {
  return (
    <div className="menu-container">
      
      <aside className="h-full">
        <div className="h-full px-3 py-4 overflow-y-auto  bg-gray-50 dark:bg-gray-800">
          <div>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              challenges
            </span>
          </div>
          <ul className="font-medium flex  md:flex-col flex-wrap">
            <li>
              <LinkMenu name=" 1- simple calculator" href="/" />
            </li>
            <li>
              <LinkMenu name="2- Prime Numbers" href="/PrimeNumbers" />
            </li>
            <li>
              <LinkMenu name="3- Factorial" href="/Factorial" />
            </li>
            <li>
              <LinkMenu name="4- Palindrome" href="/Palindrome" />
            </li>
            <li>
              <LinkMenu name="5- Table" href="/Table" />
            </li>
            <li>
              <LinkMenu name="6- Vowel Counter" href="/VowelCounter" />
            </li>
            <li>
              <LinkMenu name="7-Grade Average" href="/GradeAverage" />
            </li>
            <li>
              <LinkMenu
                name="8- Interest Calculation"
                href="/InterestCalculation"
              />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
