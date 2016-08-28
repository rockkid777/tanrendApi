/*jshint esversion: 6 */

import { connect } from 'react-redux';
import Form from './form.js';
import {
    askAdvice,
    updateCourse,
    updateSemester,
    updateSubdepartment
} from '../actions.js';

const mapStateToProps = (state) => {
    return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: () => {
            dispatch(askAdvice());
        },
        onCourseChange: (text, no) => {
            dispatch(updateCourse(text, no));
        },
        onSemesterChange: (no) => {
            dispatch(updateSemester(no));
        },
        onSubDebChange: (text) => {
            dispatch(updateSubdepartment(text));
        }
    };
};

const FormContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Form);

export default FormContainer;
