import React from 'react'

export default function SelectGender({profiles,setCurrentPage,setRendered}) {

    function filter_By_Gender(e){
        let selectElement = e.target ;
        selectElement.options[selectElement.selectedIndex].text === "All" ?
        setRendered(profiles) :
        setRendered(profiles.filter(eachProfile => eachProfile.Gender === selectElement.options[selectElement.selectedIndex].text))
        setCurrentPage(1)
       }


    return (
        <div className="select_gender">
           <span> Gender:</span> 
            <select onChange={filter_By_Gender}>
            <option > All </option>
            <option > Male </option>
            <option > Female </option>
            <option > Prefer to skip </option>
            </select>
        </div>
    )
}
