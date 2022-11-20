import { useDispatch, useSelector } from 'react-redux'
import { Card, CardUser } from 'components'
import { setData } from 'store/slices/data'
import s from 'assets/app.module.css'

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.data)

  const handleDrop = (e) => {
    const title = e.dataTransfer.getData('title')
    const index = data.map(e => e.title).indexOf(title)
    const newData = [...data]
    const [ elementDrop ] = newData.splice(index, 1)

    newData.push(elementDrop)
    console.log('drop', newData)
    dispatch(setData(newData))
  }

  return (
    <div className={s.container}>
      <CardUser />
      <div
        className={s.cards}
        onDragOver={(e) => void(e.preventDefault())}
        onDrop={handleDrop}
      >
        {data.map((e, i) => <Card key={i} id={i} info={e}/> )}
      </div>
    </div>
  );
}

export default App
