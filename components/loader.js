import React from "react";
import { Line } from 'rc-progress';

class Loader extends React.Component {

    render() {
        return (
            <div>
                <Line
                    percent={this.props.percentage}
                    strokeWidth={this.props.strokeWidth}
                    strokeColor={this.props.strokeColor}
                    trailWidth={this.props.trailWidth}
                    trailColor={this.props.trailColor}
                />
            </div>
        )
    }
}

export default Loader;