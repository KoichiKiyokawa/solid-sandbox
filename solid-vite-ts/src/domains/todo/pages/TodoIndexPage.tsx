import { createResource, createSignal, Show } from "solid-js"

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const TodoIndexPage = () => {
  const [todo] = createResource<Todo>(() =>
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(
        (res) => new Promise((resolve) => setTimeout(() => resolve(res), 1000))
      )
  )

  return (
    <Show when={!todo.loading} fallback={<span>Loading...</span>}>
      <h1>TodoIndexPage</h1>
      {JSON.stringify(todo(), null, 2)}
    </Show>
  )
}
