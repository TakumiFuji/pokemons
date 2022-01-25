import { FC } from "react"
import "./pagination.scss"

interface IPropsPagination {
  perPage: number
  totalPokemons: number
  paginate: (pageNumber: number) => void
}

const Pagination: FC<IPropsPagination> = ({
  perPage,
  totalPokemons,
  paginate,
}) => {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalPokemons / perPage); i++) {
    pageNumber.push(i)
  }
  return (
    <div className="pagination">
      {pageNumber.map((number) => {
        return (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
