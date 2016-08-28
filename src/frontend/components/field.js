/*jshint esversion: 6 */

import React, { PropTypes } from 'react'

const Field = ({onChange, value}) => (
    <input
        type='text'
        onChange={(e) => {
            onChange(e.target.value.trim());
        }}
        value={value}
    />
)

Field.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Field
