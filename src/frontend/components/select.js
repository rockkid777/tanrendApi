/*jshint esversion: 6 */

import React, { PropTypes } from 'react';

const Select = ({onChange, value}) => (
    <select value={value} onChange={(e) => {
        onChange(e.target.value);
    }}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
    </select>
)

Select.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Select
