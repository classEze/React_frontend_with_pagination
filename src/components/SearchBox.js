import React from 'react'
import Search from '@material-ui/icons/Search';


export default function SearchBox({profiles, setRendered, setCurrentPage}) {
    const searchFunction = (e) => {
        if(!e.target.value.trim()) return setRendered(profiles);
        const searchResult = profiles.filter(
            eachProfile =>
            {
               return(
                eachProfile.FirstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 ||
                eachProfile.LastName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 
               ) 
            })

        setRendered([...searchResult])
        setCurrentPage(1)
       }
     
    return (
        <div className="search_box">
            <input type = "text"
             placeholder="Enter Patient Name"
             className="input_search"
             onKeyUp={searchFunction}
             style ={{marginLeft:"20px"}}
            />  
            <Search
             className= "search_icon"
             fontSize= "large"
             /> 
        </div>
    )
}

