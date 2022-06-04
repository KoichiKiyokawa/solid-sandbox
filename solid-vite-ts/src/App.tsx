import { Route, Routes } from "solid-app-router"
import type { Component } from "solid-js"
import { LoginPage } from "./domains/auth/pages/LoginPage"
import { IndexPage } from "./domains/core/pagse/IndexPage"
import { paths } from "./domains/core/route"
import { CounterIndexPage } from "./domains/counter/pages/CounterIndexPage"

const App: Component = () => {
  return (
    <Routes>
      <Route path={paths.index} element={<IndexPage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.counter.index} element={<CounterIndexPage />} />
    </Routes>
  )
}

export default App
