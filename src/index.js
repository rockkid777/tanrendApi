/*jshint esversion: 6 */

import Department from './department.js';

let department = new Department();
let semester = '2016-2017-1';
let readyStateChangeHandler = (xhttp, onSuccess = ()=>{}, onError = ()=>{}) => {
    if (xhttp.readystate === 4) {
        if (xhttp.status === 200) {
            onSuccess();
        } else {
            onError();
        }
    }
};

export default class {
    constructor(url) {
        this.url = url;
    }

    getCourseById(id, isAsync = true, onSuccess = () => {}, onError = () => {}) {
        let xhttp = new XMLHttpRequest(),
            reqest = `melyik=kodalapjan&felev=${semester}&limit=20&targykod=${id}`;
        xhttp.onreadystatechange = readyStateChangeHandler(xhttp, onSuccess, onError);
        xhttp.open('POST', this.url, isAsync || false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(reqest);
    }
}
