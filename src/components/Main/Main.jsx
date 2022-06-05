import { createSignal, createEffect, createMemo, onCleanup } from "solid-js";
import Buttons from "../Buttons"

import styles from './Main.module.css';

const Main = (props) => {
  const [count, setCount] = createSignal(0);
  const [highlightIndex, setHighlightIndex] = createSignal();
  const square = () => count() * count();
  const msg = createMemo(() => `The square of ${count()} is ${square()}!`)
  createEffect(() => console.log("square", square()));

  const onInput = (e) => setCount(parseInt(e.currentTarget.value));
  const onButtonClick = (i) => () => setHighlightIndex(i);
  // const interval = setInterval(() => setCount(count() + 1), 1000);
  // onCleanup(() => clearInterval(interval))

  return (
    <div class={styles.root}>
      <input type="number" oninput={onInput} />
      <div class={styles.output}>{square()}</div>
      <div class={styles.text}>{msg}</div>
      <Buttons count={count()} onClick={onButtonClick} highlightIndex={highlightIndex()} />
    </div>
  )
}

export default Main;