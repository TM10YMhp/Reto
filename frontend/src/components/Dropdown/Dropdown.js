import { useState } from 'react'
import logo from 'assets/images/icon-ellipsis.svg'

import s from './dropdown.module.css'

export default function Dropdown () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className={s.action} onClick={handleClick}>
      <img src={logo} alt=''/>
      <div className={isOpen ? `${s.menu} ${s.active}` : s.menu}>
        <p>...</p>
      </div>
    </div>
  )
}
