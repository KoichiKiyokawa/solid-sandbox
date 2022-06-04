import { createMemo, createSignal } from "solid-js"
import { Counter } from "../components/Counter"

export const CounterIndexPage = () => {
  const [getCounters, setCounters] = createSignal<Counter[]>([])
  const sum = createMemo(() =>
    getCounters().reduce((acc, counter) => acc + counter.count, 0)
  )

  return (
    <div>
      <h1>CounterIndexPage</h1>
      {getCounters().map((counter, index) => (
        <Counter
          {...counter}
          onIncrement={() =>
            setCounters((prev) => {
              const newCounters = [...prev]
              newCounters[index].count++
              return newCounters
            })
          }
          onDecrement={() =>
            setCounters((prev) => {
              if (prev[index].count === 0) return prev

              const newCounters = [...prev]
              newCounters[index].count--
              return newCounters
            })
          }
        />
      ))}
      <p>sum: {sum}</p>

      <button
        onClick={() =>
          setCounters((prev) => [...prev, { title: "", count: 0 }])
        }
      >
        追加
      </button>
    </div>
  )
}
