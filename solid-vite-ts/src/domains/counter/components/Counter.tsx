export type Counter = {
  title: string
  count: number
}

type Props = Counter & {
  onIncrement: () => void
  onDecrement: () => void
}

export const Counter = (props: Props) => {
  return (
    <div>
      <span>{props.count}</span>
      <button onClick={props.onIncrement}>+1</button>
      <button onClick={props.onDecrement}>-1</button>
    </div>
  )
}
