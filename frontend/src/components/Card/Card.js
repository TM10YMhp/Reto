import { useSelector } from 'react-redux'
import {
  logo_exercise,
  logo_play,
  logo_self_care,
  logo_social,
  logo_study,
  logo_work,
} from 'assets/images'
import { Dropdown } from 'components'
import s from './card.module.css'

const variantText = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
}
const variantLogo = {
  Exercise: logo_exercise,
  Play: logo_play,
  Self: logo_self_care,
  Social: logo_social,
  Study: logo_study,
  Work: logo_work,
}

export default function Card ({ info, id }) {
  const { filter } = useSelector(state => state.data)

  const { title, timeframes } = info || {}
  const { current, previous } = timeframes[filter] || {}

  const variant = title.includes(' ')
    ? title.split(' ')[0]
    : title
  const logo = variantLogo[variant]

  return (
    <div
      className={`${s.container} ${s[variant]}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('title', title)
        console.log('start')
      }}
    >
      <div className={s.logo}>
        <img src={logo} alt='' />
      </div>
      <div className={s.info}>
        <div className={s.title}>
          <p>{title}</p>
          <Dropdown />
        </div>
        <div className={s.time}>
          <p className={s.hour}>
            {current} hrs
          </p>
          <p className={s.lastWeek}>
            Last {variantText[filter]} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  )
}
