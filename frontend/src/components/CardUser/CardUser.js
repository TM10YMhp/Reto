import { useDispatch, useSelector } from 'react-redux'
import { setState } from 'store/slices/data'

import user from 'assets/images/image-jeremy.png'
import s from './carduser.module.css'

export default function CardUser () {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state.data)

  return (
    <div className={s.container}>
      <div className={s.info}>
        <img src={user} alt='' />
        <div>
          <p className={s.lastWeek}>Report for</p>
          <p className={s.name}>Jeremy Robson</p>
        </div>
      </div>
      <div className={s.options}>
        <p
          className={filter === 'daily' ? s.active : ''}
          onClick={() => dispatch(setState('daily'))}
        >
          Daily
        </p>
        <p
          className={filter === 'weekly' ? s.active : ''}
          onClick={() => dispatch(setState('weekly'))}
        >
          Weekly
        </p>
        <p
          className={filter === 'monthly' ? s.active : ''}
          onClick={() => dispatch(setState('monthly'))}
        >
          Monthly
        </p>
      </div>
    </div>
  )
}
