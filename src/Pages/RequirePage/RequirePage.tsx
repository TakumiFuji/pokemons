import { ChangeEvent, FC, useState, useEffect, useMemo } from "react"
import { useAuth } from "../../Context/AuthContext"
import "./requirepage.scss"

const RequirePage: FC = () => {
  const [key, setKey] = useState("")
  const { login } = useAuth()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value)
  }
  const secretKey = useMemo(() => {
    const Array: number[] = []
    function getRandomArbitrary(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min)
    }
    for (let i = 0; i < 6; i++) {
      const token = getRandomArbitrary(0, 9)
      Array.push(token)
    }
    const secretToken = Array.map((Arraytoken) => {
      return Arraytoken.toString()
    })
    return secretToken.join("")
  }, [])

  useEffect(() => {
    setTimeout(() => alert(`Введите этот ключ: ${secretKey}`), 200)

    console.log(secretKey)
  }, [secretKey])
  useEffect(() => {
    if (key === secretKey) {
      login()
    }
  }, [key]) //eslint-disable-line

  return (
    <div className="require">
      <p>Введите одноразовый код из Alert!</p>
      <input type="text" value={key} onChange={(e) => onChange(e)} />
    </div>
  )
}
export default RequirePage
