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
    <div class="box_form">
        <header>Kurzus Tanácsadás</header>
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}>
                <div class="notloggedin">
                    <label>Féléved száma</label>
                    <div>
                        <Field
                            onChange={onSemesterChange}
                            value={semester}
                        />
                    </div>
                    <label>Szakirány</label>
                    <div>
                        <Select
                            onChange={onSubDebChange}
                            value={subDepartment}
                        />
                    </div>
                    <label>A kurzus</label>
                    <div>
                        <Field
                            onChange={(v) => onCourseChange(v, 1)}
                            value={course1}
                        />
                    </div>
                    <label>B kurzus</label>
                    <div>
                        <Field
                            onChange={(v) => onCourseChange(v, 2)}
                            value={course2}
                        />
                    </div>
                    <div>
                    <input type="submit" value="Mutat"/>
                    </div>
                </div>
            </form>
        </div>
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
