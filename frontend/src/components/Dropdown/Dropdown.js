import { useState } from 'react'

import icon from 'assets/images/icon-ellipsis.svg'
import s from './dropdown.module.css'

export default function Dropdown () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className={s.container} onClick={handleClick}>
      <img src={icon} alt='icon'/>
      <div className={`${s.menu} ${isOpen ? s.active : ''}`}>
        <p>...</p>
      </div>
    </div>
  )
}
