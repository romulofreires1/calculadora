import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export function calculate(
  firstInput: number,
  operation: number,
  secondInput: number
) {
  let value = null;
  if (operation === 1) {
    value = firstInput + secondInput;
  } else if (operation === 2) {
    value = firstInput - secondInput;
  } else if (operation === 3) {
    value = firstInput * secondInput;
  } else {
    value = firstInput / secondInput;
  }

  return value;
}

const Home: NextPage = () => {
  const [result, setResult] = useState<number>();

  function handleSubmit(e: any) {
    e.preventDefault();
    setResult(
      calculate(+e.target[0].value, +e.target[1].value, +e.target[2].value)
    );

    return null;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form action="" onSubmit={handleSubmit}>
          <input id="first" type="text" />
          <select name="" id="select">
            <option value={1}>Somar</option>
            <option value={2}>Subtrair</option>
            <option value={3}>Multiplicar</option>
            <option value={4}>Dividir</option>
          </select>
          <input id="second" type="text" />
          <button type="submit">Calculate</button>
        </form>
        <span>{result}</span>
      </main>
    </div>
  );
};

export default Home;
