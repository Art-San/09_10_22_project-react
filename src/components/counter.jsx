import React from "react";

const Counter = () => {
    const count = 0
    const formatCount = () => {
      return  count === 0 ? 'empty' : count
    }
   
    const getBageClasses = () => {
        return count === 0 
        ? "badge m-2 text-bg-warning" 
        : 'badge m-2 text-bg-primary'
    }
    

    
    return (
        <>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2">+</button>
        </>
    )
    
}

export default Counter