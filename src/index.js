/*jshint esversion: 6 */

import Department from './department.js';

let department = new Department();
let semester = '2016-2017-1';
let convertTable = table => {
    let tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = table;
    let rows = Array.prototype.slice.call(tmpDiv.getElementsByTagName('tr'));
    rows.shift();

    return (rows.map(elem => {
        let data = elem.getElementsByTagName('td');
        return {
            name:      data[0].innerHTML,
            courseId:  data[1].innerHTML,
            time:      data[2].innerHTML,
            location:  data[3].innerHTML,
            weeks:     data[4].innerHTML,
            note:      data[5].innerHTML,
            type:      data[6].innerHTML,
            class:     data[7].innerHTML,
            limit:     data[8].innerHTML,
            course:    data[9].innerHTML,
            excercise: data[10].innerHTML,
            teacher:   data[11].innerHTML
        };
    }));
};

export default class {
    constructor(url) {
        this.url = url;
    }

    getCoursesById(id, isAsync = true, onSuccess = () => {}, onError = () => {}) {
        let xhttp = new XMLHttpRequest(),
            reqest = `melyik=kodalapjan&felev=${semester}&limit=20&targykod=${id}`;
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    onSuccess(convertTable(xhttp.responseText));
                } else {
                    onError(xhttp.status);
                }
            }
        };
        xhttp.open('POST', this.url, isAsync || false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(reqest);
    }
}
