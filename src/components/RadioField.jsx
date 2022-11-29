import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({ label, name, value, options, onChange, error }) => {
    const getOptionId = (option) => `${option.name}_${option.value}`

    const getInputClasses = () => {
        return 'form-check form-check-inline ' + (error ? ' is-invalid' : '')
    }

    return (
        <div className="mb-4">
            <p>
                <label>{label}</label>
            </p>
            {/* Проходимся по всем вариантам */}
            {options.map((option) => (
                <div
                    key={option.value}
                    className={getInputClasses()}
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={getOptionId(option)}
                        value={option.value}
                        checked={option.value === value}
                        onChange={onChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={getOptionId(option)}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
RadioField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    error: PropTypes.string
}
export default RadioField
