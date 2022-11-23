import { useDispatch, useSelector } from 'react-redux'

import { setState } from 'store/slices/data'
import user from 'assets/images/image-jeremy.png'
import s from './carduser.module.css'

export default function CardUser () {
  return (
    <div className={s.container}>
      <div className={s.infoUser}>
        <div className={s.imageUser}>
          <img src={user} alt='user' />
        </div>
        <div>
          <h5>Report for</h5>
          <p className={s.name}>Jeremy Robson</p>
        </div>
      </div>
      <div className={s.options}>
        <Option select='daily' />
        <Option select='weekly' />
        <Option select='monthly' />
      </div>
    </div>
  )
}

function Option ({ select = 'null' }) {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state.data)

  return (
    <p
      className={filter === select ? 'active' : undefined}
      onClick={() => void dispatch(setState(select))}
    >
      {select.charAt(0).toUpperCase() + select.slice(1)}
    </p>
  )
}
