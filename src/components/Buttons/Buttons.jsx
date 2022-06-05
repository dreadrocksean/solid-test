import { createSignal, createEffect, createMemo, onCleanup } from "solid-js";
import styles from './Buttons.module.css';
const MAX = 10000;

const Buttons = (props) => {
  createEffect(() => {
    console.log("items", items());
  });
  const items = () => {
    const square = props.count * props.count;
    const size = Math.min(square, MAX);
    return props.count ? [...Array(size)].map((_, i) => size - i) : [];
  }
  console.log("render Buttons")
  return (
    <div class={styles.root}>
      <Index each={items()}>{(item, i) => {
        console.log("render item", i)
        return (
          <button
            onClick={props.onClick(i)}
            classList={{ [styles.selected]: props.highlightIndex === i }}>{item}
          </button>
        )
      }}
      </Index>
    </div>
  )
}

export default Buttons;