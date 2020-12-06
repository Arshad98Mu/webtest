import React from 'react'

export const CountrySelect = () => {

    const [country, onChangeCountry] = React.useState('IN')
    const [state, onChangeState] = React.useState('KA')
    const INState = ["KA", "KL", "TN", "MH"]
    const USState = ["AL", "DE", "GA"]
    const CAState = ["ON", "QN", "BC"]
    const [selectedStateList, onChangeSelectedState] = React.useState(INState);
    return <div>
        <select value={country} onChange={(event) => {
            onChangeCountry(event.target.value)
            if (event.target.value == "IN") {
                onChangeSelectedState(INState);
            } else if (event.target.value == "US") {
                onChangeSelectedState(USState);
            } else onChangeSelectedState(CAState);
        }}>
            {["IN", "US", "CA"].map((val) => <option value={val}>{val}</option>)}

        </select>

        <br />

        <select value={state} onChange={(event) => {

            onChangeState(event.target.value)

        }}>
            {selectedStateList.map((val) => <option value={val}>{val}</option>)}

        </select>




    </div>
}