import {PlusButton} from "../PlusButton/PlusButton";
import {connect} from "react-redux";
import {deleteValute, getListOfValues, getValute} from "../../redux/valute-reducer";
import {Valute} from "../Valute/Valute";

export const Widgets = (props) => {
    const valutes = props.curr.map(valute => <Valute valutes={valute} key={valute.id} deleteValute={props.deleteValute}/>)
    return (
        <div>
            <PlusButton getValute={props.getValute} listOfValutes={props.getListOfValues} list={props.list}/>
            {valutes}
        </div>
    )
}

let mapStateToProps = (state) => ({
    curr: state.valutes.curr,
    list: state.valutes.list,
})

export const Widget = connect(mapStateToProps, {getValute, getListOfValues, deleteValute})(Widgets)

