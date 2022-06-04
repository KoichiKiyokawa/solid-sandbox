export type Counter = {
  title: string
  count: number
}

type Props = Counter & {
  onIncrement: () => void
  onDecrement: () => void
}

export const Counter = ({ title, count, onIncrement, onDecrement }: Props) => {
  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
    </div>
  )
}
