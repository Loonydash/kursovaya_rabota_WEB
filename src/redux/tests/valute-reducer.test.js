import {addValute, deleteValute, valuteReducer} from "../valute-reducer";

let State = {
    curr: [],
    count: -1,
    list: []
}

test('New Valute should be added', () => {
    let valute = {
        id: 1,
        charCode: 'RUB',
        name:'РУБЛИ',
        value: '100',
        nominal: '1',
        previous: '1'
    }
    let action = addValute(valute);
    let newState = valuteReducer(State, action);
    expect(newState.curr.length).toBe(1)
});

test('Valute should be deleted', () => {
    let valute = {
        id: 1,
        charCode: 'RUB',
        name:'РУБЛИ',
        value: '100',
        nominal: '1',
        previous: '1'
    }
    let action = addValute(valute);
    valuteReducer(State, action);
    let action2 = deleteValute(1);
    let newState = valuteReducer(State, action2);
    expect(newState.curr.length).toBe(0)
});
