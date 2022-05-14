import React from "react";

export const PlusButton = (props) => {

    if (props.list.length === 0)
        props.listOfValutes(true);

    const listt = props.list.map(el => <option key={el[0].NumCode}>{el[0].CharCode}</option>)
    const value = React.createRef();
    return (
        <div className='plusButtonDiv'>
            <select ref={value}>
                {listt}
            </select>
            <button className='plusButton' onClick={() => props.getValute(false, value.current.value)}>+</button>

        </div>
    )
}