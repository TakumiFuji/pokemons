import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { fetchPokemons, ICard } from "../../API/fetchPokemons"
import { fetchTypes } from "../../API/fetchTypes"
import { fetchSubTypes } from "../../API/fetchSubTypes"
import DropdownSelect from "../Dropdown/DropdownSelect"
import Table from "../Table/Table"
import Pagination from "../Pagination/Pagination"
import "./pokemontable.scss"
import Loader from "../Loader/Loader"

const PokemonTable: FC = () => {
  // Состояние покемонов, типа и подтипа

  const [allPokemons, setAllPokemons] = useState<ICard[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [subTypes, setSubTypes] = useState<string[]>([])
  const [errorMessage, setErrorMessage] = useState("")

  // Состояние выбранного в Селекте Типа и Подтипа
  const [selectedOptionType, setSelectedOptionType] = useState("All")
  const [selectedOptionSubType, setSelectedOptionSubType] = useState("All")

  // Добавляем Покемонов, Типы и Подтипы на страницу
  useEffect(() => {
    fetchPokemons()
      .then((response) => setAllPokemons(response.data))
      .catch((e: Error) => setErrorMessage(e.message))
  }, [])
  useEffect(() => {
    fetchTypes().then((response) => setTypes(response.data))
  }, [])
  useEffect(() => {
    fetchSubTypes().then((response) => setSubTypes(response.data))
  }, [])

  // Изменение выбранного селекта
  const selectedSubTypes = useCallback((selectedOptionSubType: string) => {
    setSelectedOptionSubType(selectedOptionSubType)
  }, [])
  const selectType = useCallback((selectedOptionType: string) => {
    setSelectedOptionType(selectedOptionType)
  }, [])

  // Фильтруем покемонов по категориям
  const pokemons = useMemo(() => {
    return allPokemons.filter((pokemon) => {
      if (selectedOptionSubType === "All" && selectedOptionType === "All") {
        return pokemon
      }
      return (
        pokemon.subtypes?.includes(selectedOptionSubType) ||
        pokemon.types?.includes(selectedOptionType)
      )
    })
  }, [selectedOptionType, selectedOptionSubType, allPokemons])

  // Состояние пагинации
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(8)
  // Значение индекса страниц
  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage
  const currentPokemon = pokemons.slice(firstIndex, lastIndex)
  //Функция переключения страничек
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="table_main">
      <div className="dropdown__pokemon">
        <DropdownSelect
          selectedOption={selectedOptionType}
          setSelectedOption={selectType}
          options={types}
          initialValue="Type"
        />
        <DropdownSelect
          selectedOption={selectedOptionSubType}
          setSelectedOption={selectedSubTypes}
          options={subTypes}
          initialValue="Subtypes"
        />
      </div>
      <div>
        {errorMessage && <h3>На сервере какаято ошибка, скоро исправим!!</h3>}
        {allPokemons.length ? (
          <Table allPokemons={currentPokemon} />
        ) : (
          <Loader />
        )}

        {pokemons.length > 8 && (
          <Pagination
            paginate={paginate}
            totalPokemons={pokemons.length}
            perPage={perPage}
          />
        )}
      </div>
    </div>
  )
}
export default PokemonTable
