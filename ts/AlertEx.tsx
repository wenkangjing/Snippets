// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

export interface IAlertExProps {
    content: string;
    stype: string;
}

export interface IAlertExState {
    show: boolean;
}


export default class AlertEx extends React.Component<IAlertExProps, IAlertExState> {

    public state: IAlertExState;

    constructor(props: IAlertExProps) {
        super(props);
        console.log('AlertEx ctor')
    }

    public getInitialState() {
        return { show: true };
    }

    public componentWillMount() {
        this.setState({ show: true });
    }

    public componentWillReceiveProps(nextProps) {
        this.setState({ show: true });
    }

    public render() {
        var prefix: string;
        if (this.state.show) {
            switch (this.props.stype) {
                case 'danger':
                    prefix = 'Danger!';
                    break;
                case 'warning':
                    prefix = 'Warning!';
                    break;
                case 'info':
                    prefix = 'Info!';
                    break;
                case 'success':
                    prefix = 'Success!';
                    break;
                default:
                    prefix = 'Notification: ';
                    break;
            }
            return <Alert bsStyle={this.props.stype} dismissAfter={5} onDismiss={this.handleAlertDismiss.bind(this) }>
                <strong>{prefix}</strong> {this.props.content}
            </Alert>;
        }

        return null;
    }

    handleAlertDismiss() {
        this.setState({ show: false });
    }

    handleAlertShow() {
        this.setState({ show: true });
    }
}