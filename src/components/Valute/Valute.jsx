export const Valute = (props) => {
    return (
        <div>
            <div className='widget'>
                <div className='valuteConteiner'>

                    <div className='CharCode'><p>{props.valutes.charCode}</p></div>
                    <div className='value'>
                        <p>{(props.valutes.value / props.valutes.nominal).toFixed(2)}{(props.valutes.value > props.valutes.previous ? "▲" : "▼")}</p>
                    </div>
                </div>

                <div className='withButton'>
                    <div className='minusButton'><button onClick={() => props.deleteValute(props.valutes.id)}>-</button></div>

                    <div className='valuteNameAndPrev'>
                        <div className='name'><p>{props.valutes.name}</p></div>
                        <div className='prev'><p>{props.valutes.previous}</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

