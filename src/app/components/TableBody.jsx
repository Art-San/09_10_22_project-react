import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// const twoDArray = [
//     [ '[i][j]',  '[i][j+1]',  '...', '[i][j+nj]' ],
//     ['[i+1][j]','[i+1][j+1]', '...','[i+1][j+nJ]'],
//     [   '...',      '...',    '...',    '...'    ],
//     ['[i+1][j]','[i+m][j+1]', '...','[i+m][j+nJ]']
// ]
// for (let i = 0; i < twoDArray.length; i++) {
//     for (let j = 0; j < twoDArray[i].length; j++) {}
// }

const TableBody = ({ data, columns }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td
                            key={column}>
                            {_.get(item, columns[column].path)}
                        </td> // _.get -- ЭТО ЛОДАШ
                    ))}
                </tr>))}
        </tbody>
    )
}
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableBody
