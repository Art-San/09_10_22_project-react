/* eslint-disable no-undef */
import React from 'react'
const Qualitie = ({ color, name }) => {
    return <span className={'badge m-1 bg-' + color}>{name}</span>
}
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Qualitie
