import React from 'react'
import Counter from './counter'

const CountersList = () => {
    const counters = [
        {id: 1, value: 0, name: 'Ненужная вещь'}, 
        {id: 2, value: 4, name: 'Ложка'},
        {id: 3, value: 4, name: 'Вилка'},
        {id: 4, value: 4, name: 'Тарелка'}, 
        {id: 5, value: 0, name: 'Набор минималиста'}
        
    ]
  return (
    <>
    {
        counters.map((count) => (
            <Counter  key={count.id} value={count.value} name={count.name}/>
        ))
    }
    </>
  )
}

export default CountersList