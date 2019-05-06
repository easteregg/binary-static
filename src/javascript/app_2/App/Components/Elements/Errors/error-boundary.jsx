import React            from 'react';
import { TrackJS }      from 'trackjs';
import { isProduction } from '../../../../../config';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch = (error, info) => {
        if (info && info.componentStack && !isProduction()) {
            // The component stack is sometimes useful in development mode
            // In production it can be somewhat obfuscated, so feel free to omit this line.
            console.log(info.componentStack); // eslint-disable-line
        }
        if (isProduction()) {
            TrackJS.track(error);
        }

        this.setState({
            hasError: true,
            error,
            info,
        });
    };

    render = () => this.state.hasError ?
        (
            <div className='error-box'>
                {this.state.error.message}
            </div>
        ) : this.props.children
}
