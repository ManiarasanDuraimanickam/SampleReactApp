import React from 'react';
import DatePicker from 'react-datepicker';
import './react-datepicker.css';
import './rootComponent.css';
import './DateRangeSelector.css'
import moment from 'moment';
import {ST_DATE_RANG_CH,ED_DATE_RANG_CH} from '../action'
import {dispatchStartDateChange, dispatchEndDateChange} from "../action";
import {connect} from 'react-redux';
import dataRetrieveService from '../services/RetrieveData'
class DateRangeSelector extends React.Component {

    constructor(prop) {
        super(prop);
        console.log("DateRangeSelector constructor..")
        dispatchStartDateChange(moment());
        dispatchEndDateChange(moment());
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleSearchbtn=this.handleSearchbtn.bind(this);
    }
    handleStartDateChange(date) {
        dispatchStartDateChange(date);
    }
    handleEndDateChange(date) {
        dispatchEndDateChange(date);
    }
    handleSearchbtn(){
        console.log("selected start and end dates are "+this.props.startDate+"  "+this.props.endDate);
        dataRetrieveService.dataRetieveByDate(this.props.startDate,this.props.endDate);
    }
    render() {
        return (
            <div>
                <table className="whitefont tableSeparate">
                <tr>
                    <td>
                        Select Start Date:
                    </td>
                    <td>
                    <DatePicker selected={this.props.startDate} onChange={this.handleStartDateChange}/>
                    </td>
                    <td>
                        Select End Date:
                    </td>
                    <td>
                    <DatePicker selected={this.props.endDate} onChange={this.handleEndDateChange}/>
                    </td>
                    <td>
                        <button className="btn searchBtn" onClick={this.handleSearchbtn}>Search</button>
                    </td>
                </tr>
            </table>
        </div>
        );
    };
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        startDate: state.startDate,
        endDate: state.endDate
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps");
    return [{
            setStartDate: (startDate) => {
                dispatch({
                    type: ST_DATE_RANG_CH,
                    value: startDate
                });
            }
        },
        {
            setEndDate: (endDate) => {
                dispatch({
                    type: ED_DATE_RANG_CH,
                    value: endDate
                });

            }
        }
    ]
}
export default connect(mapStateToProps,mapDispatchToProps,)(DateRangeSelector);