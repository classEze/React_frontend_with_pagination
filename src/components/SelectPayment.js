import React from 'react'

export default function SelectPayment({profiles,setCurrentPage,setRendered}) {

    function filter_By(e){
        let selectElement = e.target ;
        selectElement.options[selectElement.selectedIndex].text === "All" ?
        setRendered(profiles) :
        setRendered(profiles.filter(eachProfile => eachProfile.PaymentMethod === selectElement.options[selectElement.selectedIndex].text))
        setCurrentPage(1)
       }


    return (
        <div className="select_payment">
            <span> Payment Option:</span>
            <select onChange={filter_By}>
            <option > All </option>
            <option > cc </option>
            <option > money order </option>
            <option > paypal </option>
            <option > check </option>
            </select>
        </div>
    )
}
