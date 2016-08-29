/*jshint esversion: 6 */

import TanrendApi from './tanrendApi.js';

const api = new TanrendApi('./api.php');

export const requestAdvice = () => {
    return {
        type: 'REQ_ADVICE'
    };
};

export const receiveAdvice = (text) => {
    return {
        type: 'REC_ADVICE',
        text
    };
};

export const askAdvice = () => {
    return (dispatch, getState) => {
        dispatch(requestAdvice);
        let state = getState();
        api.getCoursesByCodeAndSubDep(
            state.course1,
            state.course2,
            state.subDepartment,
            (res) => {
                let semester = parseInt(state.semester);
                if (res[0].result.errorCode || res[1].result.errorCode) {
                    dispatch(receiveAdvice('Hibás kurzuskód.'));
                }
                else if (res[0].result.ajanlott_felev == semester &&
                res[1].result.ajanlott_felev != semester) {
                    dispatch(receiveAdvice(`A(z) ${res[0].result.kurzusnev} \
                    kurzusra ajánlott inkább bejárni.`));
                }
                else if (res[0].result.ajanlott_felev != semester &&
                res[1].result.ajanlott_felev == semester) {
                    dispatch(receiveAdvice(`A(z) ${res[1].result.kurzusnev} \
                    kurzusra ajánlott inkább bejárni.`));
                }
                else {
                    dispatch(receiveAdvice('A szabályzat szerint szabadon választhatsz a két kurzus közt.'));
                }
            }
        );
    };
};

export const updateCourse = (text, no) => {
    return {
        type: 'UPDATE_COURSE',
        no,
        text
    };
};

export const updateSubdepartment = (text) => {
    return {
        type: 'UPDATE_SUBDEP',
        text
    };
};

export const updateSemester = (no) => {
    return {
        type: 'UPDATE_SEMESTER',
        no
    };
};
