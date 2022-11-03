import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    filter,
    onChangeFilter,
    valueProperty,
    contentProperty
}) => {
    return (
        <div className="list-group">
            {items.map((item) => (
                <button className={
                    'list-group-item' +
                    (item.id === filter ? ' active' : '')
                }
                key={item[contentProperty]}
                onClick={() => onChangeFilter(item[valueProperty])}
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
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string
}

export default GroupList
