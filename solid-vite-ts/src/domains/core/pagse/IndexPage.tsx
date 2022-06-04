import { Link } from "solid-app-router"
import { paths } from "../route"

export const IndexPage = () => {
  return (
    <div>
      <h1>IndexPage</h1>
      <ul>
        <li>
          <Link href={paths.login}>login</Link>
        </li>
        <li>
          <Link href={paths.counter.index}>counter</Link>
        </li>
      </ul>
    </div>
  )
}
