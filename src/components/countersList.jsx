import React, {useState} from 'react'
import Counter from './counter'

const CountersList = () => {
    const initialState = [
      {id: 1, value: 0, name: 'Ненужная вещь', price: 200}, 
      {id: 2, value: 4, name: 'Ложка'},
      {id: 3, value: 0, name: 'Вилка'},
      {id: 4, value: 0, name: 'Тарелка'}, 
      {id: 5, value: 0, name: 'Набор минималиста'}
  ]
    const [counters, satCounters] = useState(initialState)
    const handeleDelete = (id) => {
      const newCounters = counters.filter((c) => c.id !== id)
      satCounters(newCounters)
    }

    const hendleReset = () => {
      satCounters(initialState)
    }
  return (
    <>
        {counters.map((count) => (
                <Counter key={count.id} onDelete={handeleDelete} {...count} />
                
          ))}
          <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>Сброс</button>
    </>
  )
}

export default CountersList