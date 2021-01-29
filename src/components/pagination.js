import React from 'react'
export default function Pagination({numberOfPages, setCurrentPage, currentPage}) {
    let paginationArray = []
    for(let i = 1; i<= numberOfPages; i++ ){
        paginationArray.push(i)
      }    
    return (
        <div className="Pagination">
        {paginationArray.map(eachPage=>
        <button 
        key={eachPage} 
        style={currentPage===eachPage ? {border:"2px solid white"}:{}} 
        onClick={()=>setCurrentPage(eachPage)}> Page {eachPage}
        </button>)}
        </div>
    )
}
