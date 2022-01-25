import {
  FC,
  useState,
  FocusEvent,
  ChangeEvent,
  useEffect,
  MouseEvent,
} from "react"
import "./loginpage.scss"
import User from "../../model/user"
import { useRequire } from "../../Context/RequireContext"

const LoginPage: FC = () => {
  const { getValidate } = useRequire()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Email не может быть пустым")
  const [passwordError, setPasswordError] = useState(
    "Password не может быть пустым"
  )
  const [formValid, setFormValid] = useState(false)
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const validateLogin = (e: MouseEvent) => {
    e.preventDefault()
    if (User.login === email && User.password === password) {
      getValidate()
    } else {
      alert("Неправильный пароль или логин")
    }
  }

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email")
    } else {
      setEmailError("")
    }
  }
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (e.target.value.length === 8) {
      setPasswordError("")
    } else {
      setPasswordError("Пароль должен быть равен 8 символам")
      if (!e.target.value) {
        setPasswordError("Пароль должен быть равен 8 символам")
      }
    }
  }
  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "email":
        setEmailDirty(true)
        break
      case "password":
        setPasswordDirty(true)
        break
    }
  }

  return (
    <div className="wrapper">
      <form>
        <h1>Войти</h1>
        {(emailDirty || emailError) && (
          <div style={{ color: "red", marginLeft: "25px" }}>{emailError}</div>
        )}
        <input
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          type="text"
          name="email"
          placeholder="Введите email..."
        />
        {(passwordDirty || passwordError) && (
          <div style={{ color: "red", marginLeft: "25px" }}>
            {passwordError}
          </div>
        )}
        <input
          value={password}
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurHandler(e)}
          type="password"
          name="password"
          placeholder="Введите пароль..."
        />
        <button disabled={!formValid} onClick={validateLogin}>
          Войти
        </button>
      </form>
    </div>
  )
}

export default LoginPage
