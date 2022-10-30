/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import _ from "lodash"

const Pagination = (props) => {
    const { itemsCount, pageSize } = props
    const pageCount = Math.ceil(itemsCount / pageSize)
    // const pageCount = Math.ceil(itemsCount / pageSize)

    const pages = _.range(1, pageCount + 1)

  return (
    
    <nav>
        <ul className="pagination">
            {pages.map((page) => (
                <li key={page} className="page-item">
                    <a className="page-link">{page}</a>
                </li>
            ))}
            
        </ul>
    </nav>
  )
}

// const Pagination = (props) => {
//     const { itemsCount, pageSize } = props;
//     const pageCount = Math.ceil(itemsCount / pageSize); // 3
  
//     const pages = _.range(1, pageCount + 1); // [1, 2, 3]
  
//     return (
//       <nav>
//         <ul className="pagination">
//           {pages.map((page) => (
//             <li key={page} className="page-item">
//               <a className="page-link">{page}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };

export default Pagination