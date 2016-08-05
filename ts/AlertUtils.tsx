// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AlertEx from './AlertEx';
import { Alert } from 'react-bootstrap';

export  class AlertUtils {
    public static Danger(text: string) {
        ReactDOM.render(
            <AlertEx content={text} stype='danger'/>,
            document.getElementById('container-alert'));
    }

    public static Warning(text: string) {
        ReactDOM.render(
            <AlertEx content={text} stype='warning'/>,
            document.getElementById('container-alert'));
    }

    public static Info(text: string) {
        ReactDOM.render(
            <AlertEx content={text} stype='info'/>,
            document.getElementById('container-alert'));
    }

    public static Success(text: string) {
        ReactDOM.render(
            <AlertEx content={text} stype='success'/>,
            document.getElementById('container-alert'));
    }


}




