import React from 'react'
import PropTypes from 'prop-types'

const SingleCheckboxField = ({ name, label, value, checked, onChange }) => {
    const getOptionId = (value, label) => `${value}_${label}`

    const id = getOptionId(value, label)

    return (
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={checked}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

SingleCheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func
}

export default SingleCheckboxField
