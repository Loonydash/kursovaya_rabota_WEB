import {API} from "../api/api";

const ADD_VALUTE = 'ADD-VALUTE'
const ADD_LIST = 'ADD-LIST'
const DELETE_VALUTE = 'DELETE-VALUTE'

let initialState = {
    curr: [],
    count: -1,
    list: [],
    lastId: -1,
}

export const valuteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUTE: {
            if (state.count > 3) return state;
            console.log(state.count);
            let value = action.valute;
            state.count += 1;
            state.lastId += 1;
            return {
                ...state,
                curr: [...state.curr, {
                    id: state.lastId + 1,
                    charCode: value.CharCode,
                    name: value.Name,
                    value: value.Value,
                    nominal: value.Nominal,
                    previous: value.Previous
                }]
            }
        }
        case DELETE_VALUTE: {
            state.count -= 1;
            return {
                ...state,
                curr: state.curr.filter(el => el.id !== action.valuteId)
            }
        }
        case ADD_LIST: {
            let result = Object.keys(action.list).map((key) => [action.list[key]]);
            return {
                ...state,
                list: result
            }
        }
        default:
            return state
    }
}

export const deleteValute = (valuteId) => ({type: DELETE_VALUTE, valuteId})
export const addValute = (valute) => ({type: ADD_VALUTE, valute: valute})
export const addListOfValutes = (list) => ({type: ADD_LIST, list: list})

export const getValute = (isList, valute) => {
    return (dispatch) => {
        API.getValute(isList, valute).then(data => {
            dispatch(addValute(data))
        })
    }
}

export const getListOfValues = (isList) => {
    return (dispatch) => {
        API.getValute(isList).then(data => {
            dispatch(addListOfValutes(data))
        })
    }
}
