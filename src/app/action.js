import {createStore,combineReducers} from 'redux'
import {DateRangeReducer} from './reducer'



export const store=createStore(
    //combineReducers({reducer,appReducer})
    DateRangeReducer
);

export const ST_DATE_RANG_CH = "startdateRangeChanged";
export const ED_DATE_RANG_CH = "enddateRangeChanged";

export function startDateChange(startDate) {
    console.log("startDateChange "+startDate);
    return {
        type: ST_DATE_RANG_CH,
        value: startDate
    };
}
export const dispatchStartDateChange= startDate=>store.dispatch(startDateChange(startDate));

export function endDateChange(endDate) {
    console.log("endDateChange "+endDate);
    return {
        type: ED_DATE_RANG_CH,
        value: endDate
    };
}
export const dispatchEndDateChange= startDate=>store.dispatch(endDateChange(startDate));