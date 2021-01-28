import React from 'react'
export default function Pagination({numberOfPages, setCurrentPage}) {
    let paginationArray = []
    for(let i = 1; i<= numberOfPages; i++ ){
        paginationArray.push(i)
      }    
    return (
        <div className="Pagination">
        {paginationArray.map(eachPage=><button key={eachPage} onClick={()=>setCurrentPage(eachPage)}> Page {eachPage}</button>)}
        </div>
    )
}
