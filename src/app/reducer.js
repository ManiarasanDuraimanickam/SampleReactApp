import {
    ST_DATE_RANG_CH,
    ED_DATE_RANG_CH
} from './action'

const initialState ={};// {startDate:new Date(),endDate:new Date()};
export const DateRangeReducer = (state = initialState, action) => {
    console.log("DateRangeReducer " + action+"  state"+state);
    switch (action.type) {
        case ST_DATE_RANG_CH:
            state = {
                ...state,
                startDate: action.value
            };
            console.log("ST_DATE_RANG_CH called "+state.startDate+"  "+state.endDate);
            break;
        case ED_DATE_RANG_CH:
            state = {
                ...state,
                endDate: action.value
            }
            console.log("ED_DATE_RANG_CH called "+state.startDate+"  "+state.endDate);
            break;
    }
    return state;
};
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ST_DATE_RANG_CH:
            state = {
                ...state
            };
            break;
        case ED_DATE_RANG_CH:
            break;
    }
    return state;
};