import React from 'react'

export default function SearchBox({profiles, setRendered, setCurrentPage}) {

    const searchFunction = (e) => {
        if(!e.target.value.trim()) return setRendered(profiles);
        setRendered(profiles.filter(eachProfile => eachProfile.FirstName.indexOf(e.target.value) !== -1))
        setCurrentPage(1)
       }
     
    return (
        <div className="search_box">
            <input type = "text" placeholder="Enter Patient Name" className="input_search" onKeyUp={searchFunction} style ={{marginLeft:"30px"}}/>     
        </div>
    )
}

