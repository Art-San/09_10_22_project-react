/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import _ from "lodash"

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props
    const pageCount = Math.ceil(itemsCount / pageSize)
    if(pageCount === 1) return null
    const pages = _.range(1, pageCount + 1)

  return (
    
    <nav>
        <ul className="pagination">
            {pages.map((page) => (
                <li 
                    key={page} 
                    // className={"page-item" + (currentPage === page ? " active" : "")}
                    className={"page-item" + (currentPage === page ? " active" : "")}
                    >
                    <button 
                        className="page-link"
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                </li>
            ))}
            
        </ul>
    </nav>
  )
}

export default Pagination