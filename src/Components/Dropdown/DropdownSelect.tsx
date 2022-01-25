import { FC, memo, useCallback, useState } from "react"
import "./dropdown.scss"

interface DropdownProps {
  options: string[]
  selectedOption: string
  setSelectedOption: (option: string) => void
  initialValue: string
}
const DropdownSelect: FC<DropdownProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  initialValue,
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleItem = useCallback(
    (option: string) => {
      setIsActive(false)
      setSelectedOption(option)
    },
    [setSelectedOption]
  )

  return (
    <div className="dropdown">
      <div className="dropdown__label">Выберите: {initialValue}</div>
      <div className="dropdown__btn" onClick={() => setIsActive(!isActive)}>
        {selectedOption}
        <span className={isActive ? "arrow up" : "arrow down"}></span>
      </div>
      {isActive && (
        <div className="dropdown__content">
          <div
            className="dropdown__content__item"
            onClick={() => handleItem("All")}
          >
            All
          </div>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="dropdown__content__item"
                onClick={() => handleItem(option)}
              >
                {option}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default memo(DropdownSelect)
