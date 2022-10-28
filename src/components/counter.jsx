import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    const [tags, setTegs] = useState(['tag1', 'tag2', 'tag3'])
    
    const formatCount = () => {
      return  count === 0 ? 'empty' : count
    }
    const getBageClasses = () => {
       let classes = 'badge m-2 '
       classes += count === 0 ? 'bg-warning' : 'bg-primary'
       return classes
    }
    
    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const handleDecrement = () => {
        if(count > 0) {
            setCount((prevState) => prevState - 1)
        }
    } 
    const handleTagChange = (id) => {
        console.log('id', id)
        setTegs((prevItems) => prevItems.filter(tag => tag !== id))
    }
    
    const renderTegs = () => {
       return tags.length !== 0 && tags.map((tag) => ( 
            <li 
                key={tag} 
                className="btn btn-primary btn-sm m-2" 
                onClick={() => handleTagChange(tag)}
            >
                {tag}
            </li>
            
        )) 
        
    }

    if(tags.length !== 0) {
       return <ul> {renderTegs()}</ul>
    }
    
    
    return (
        <>
            {/* <ul> {renderTegs()}</ul> */}
            <span className={getBageClasses()}>{formatCount()}</span>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={handleIncrement}
                >
                    +
                </button>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={handleDecrement}
                >
                    -
                </button>
        </>
    )
    
}

export default Counter