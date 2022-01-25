import { Dispatch, FC, SetStateAction } from "react"
import "./modal.scss"
interface IModalProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
  image: string | undefined
}

const Modal: FC<IModalProps> = ({ image, setModalActive }) => {
  return (
    <div className="modal" onClick={() => setModalActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={image} />
      </div>
    </div>
  )
}

export default Modal
