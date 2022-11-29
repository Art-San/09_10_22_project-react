import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const MultiSelect = ({ options, onChange, value, name, label }) => {
    const handleChange = (values) => {
        // Создаём фэйковое событие
        const fakeEvent = {
            target: {
                name,
                value: values
            }
        }
        onChange(fakeEvent)
    }

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <Select
                isMulti
                options={options}
                value={value}
                onChange={handleChange}
                name={name}
                id={name}
            />
        </div>
    )
}

MultiSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
}

export default MultiSelect
