import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    filter,
    valueProperty,
    contentProperty
}) => {
    console.log('itms', items)
    // console.log('items', items)
    return (
        <div className="list-group">
            {items.map((item) => (
                <button className={
                    'list-group-item list-group-item-action' +
                    (item.id === filter ? ' active' : '')
                }
                key={item[valueProperty]}
                >
                    {item[contentProperty]}
                </button>
            ))}
        </div>
    )
}

GroupList.propTypes = {
    items: PropTypes.array.isRequired,
    filter: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
}

export default GroupList
