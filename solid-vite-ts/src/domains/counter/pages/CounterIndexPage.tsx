import { createMemo, createSignal } from "solid-js"
import { createStore, produce } from "solid-js/store"
import { Counter } from "../components/Counter"

export const CounterIndexPage = () => {
  // ネストしたステートにはcreateStoreを使うのがよいっぽい。一部の状態の変更を検知できるから。
  // createSignalだと、createSignal自体をネストさせていく必要があって面倒。
  // https://www.solidjs.com/tutorial/stores_createstore?solved
  const [counters, setCounters] = createStore<{ value: Counter[] }>({
    value: [],
  })
  const sum = createMemo(() =>
    counters.value.reduce((acc, counter) => acc + counter.count, 0)
  )

  return (
    <div>
      <h1>CounterIndexPage</h1>
      {counters.value.map((counter, index) => (
        <Counter
          {...counter}
          onIncrement={() =>
            setCounters(
              produce((prev) => {
                prev.value[index].count++
              })
            )
          }
          onDecrement={() =>
            setCounters(
              produce((prev) => {
                if (prev.value[index].count === 0) return

                prev.value[index].count--
              })
            )
          }
        />
      ))}
      <p>sum: {sum}</p>

      <button
        onClick={() =>
          setCounters(
            produce((prev) => {
              prev.value.push({
                title: "new",
                count: 0,
              })
            })
          )
        }
      >
        追加
      </button>
    </div>
  )
}
