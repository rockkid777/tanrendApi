/*jshint esversion: 6 */

import React, { PropTypes } from 'react';
import Select from './select.js';
import Field from './field.js';

const Form = ({
    onSubmit,
    onSemesterChange,
    onSubDebChange,
    onCourseChange,
    course1,
    course2,
    semester,
    subDepartment,
    advice
}) => (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <label>Féléved száma</label>
            <Field
                onChange={onSemesterChange}
                value={semester}
            />
            <label>Szakirány</label>
            <Select
                onChange={onSubDebChange}
                value={subDepartment}
            />
            <label>A kurzus</label>
            <Field
                onChange={(v) => onCourseChange(v, 1)}
                value={course1}
            />
            <label>B kurzus</label>
            <Field
                onChange={(v) => onCourseChange(v, 2)}
                value={course2}
            />
            <input type="submit"/>
        </form>
        <p>{advice}</p>
    </div>
);

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCourseChange: PropTypes.func.isRequired,
    onSemesterChange: PropTypes.func.isRequired,
    onSubDebChange: PropTypes.func.isRequired,
    course1: PropTypes.string.isRequired,
    course2: PropTypes.string.isRequired,
    semester: PropTypes.string.isRequired,
    subDepartment: PropTypes.string.isRequired,
    advice: PropTypes.string
};

export default Form
