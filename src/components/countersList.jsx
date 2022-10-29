import React, {useState} from 'react'
import Counter from './counter'

const CountersList = () => {
    const [counters, satCounters] = useState([
        {id: 1, value: 0, name: 'Ненужная вещь'}, 
        {id: 2, value: 4, name: 'Ложка'},
        {id: 3, value: 0, name: 'Вилка'},
        {id: 4, value: 0, name: 'Тарелка'}, 
        {id: 5, value: 0, name: 'Набор минималиста'}
    ])
    const handeleDelete = (id) => {
      const newCounters = counters.filter((c) => c.id !== id)
      satCounters(newCounters)
    }
  return (
    <>
    {
        counters.map((count) => (
            <Counter  
                key={count.id}
                id={count.id}
                value={count.value} 
                name={count.name} 
                onDelete={handeleDelete} />
        ))
    }
    </>
  )
}

export default CountersList