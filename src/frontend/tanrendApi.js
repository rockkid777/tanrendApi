/*jshint esversion: 6 */

import Department from './department.js';

let department = new Department();
let semester = '2016-2017-1';
let requestHandler = (url, req, onSucc, onErr = ()=>{}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                onSucc(JSON.parse(xhttp.responseText));
            } else {
                onErr(xhttp.status);
            }
        }
    };
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(req));
};

export default class TanrendApi {

    constructor(url) {
        this.url = url;
    }

    getCoursesByCodeAndSubDep(code1, code2, subDep, onSucc, onErr) {
        let request = [
            {
                jsonrpc: '2.0',
                id: '1',
                method: 'getCourseByCodeAndSubDep',
                params: [code1, subDep]
            },
            {
                jsonrpc: '2.0',
                id: '2',
                method: 'getCourseByCodeAndSubDep',
                params: [code2, subDep]
            }
        ];

        requestHandler(this.url, request, onSucc, onErr);
    }
}
