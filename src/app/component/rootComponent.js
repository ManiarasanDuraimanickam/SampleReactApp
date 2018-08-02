import React from 'react';
import './rootComponent.css';
import DateRangeSelector from './DateRangeSelector';
import actualizationChart from './actualizationChart';
class RootApp extends React.Component {
    constructor(props) {
        super(props);
        this.header = props.headerName;
    }
    render() {
        return (
            <div className="jumbotron text-center zeroPadding">
                <div className="headerName whitefont">{this.header}</div>
                <div className="startDate">
                    <DateRangeSelector/>
                </div>
                <div>
                <actualizationChart/>
                </div>
            </div>
        );
    }
}
export default RootApp;