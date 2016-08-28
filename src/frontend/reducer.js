/*jshint esversion: 6 */

import { combineReducers } from 'redux';

const tanrendAdvisorApp = (state, action) => {
    switch (action.type) {
        case 'UPDATE_COURSE':
            let change = {};
            change[`course${action.no}`] = action.text;
            return Object.assign({}, state, change);
        case 'UPDATE_SUBDEP':
            return Object.assign({}, state, {
                subDepartment: action.text
            });
        case 'UPDATE_SEMESTER':
            return Object.assign({}, state, {
                semester: action.no
            });
        case 'REQ_ADVICE':
            return Object.assign({}, state, {
                loading: true
            });
        case 'REC_ADVICE':
            return Object.assign({}, state, {
                loading: false,
                advice: action.text
            });
        default:
            return state;
    }
};

export default tanrendAdvisorApp;
