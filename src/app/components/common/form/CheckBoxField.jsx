// https://getbootstrap.com/docs/5.2/forms/checks-radios/

import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children }) => {
    const nandleChange = () => {
        console.log('')
        onChange({ name: name, value: !value })
    }

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox" value=""
                id={name}
                onChange={nandleChange}
                checked={value}
            />
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
        </div>
    )
}
CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default CheckBoxField
