import React, { useState, useEffect } from 'react'
import Pagination from './components/pagination'
import SearchBox from './components/SearchBox'
import SelectGender from './components/SelectGender'
import SelectPayment from './components/SelectPayment'
import "./App.css"
import Profiles from './components/profiles'
import Logo from './logo'
import Nav from './nav'

function App() {
  const [ profiles, setProfiles] = useState([])
  const [ currentPage, setCurrentPage] = useState(1)
  const [ renderedProfiles , setRendered ] = useState ([])

  useEffect( ()=> fetch_Profiles() , [])
  useEffect( ()=>setRendered(profiles) , [profiles] )

  function fetch_Profiles(){
    fetch(`https://api.enye.tech/v1/challenge/records`)
    .then( res => res.json())
    .then( result => setProfiles(result.records.profiles))
    .catch( error => console.log( "Error", error.message))
  }

  const profilesPerPage = 20
  const lastIndex  =  profilesPerPage * currentPage
  const firstIndex = lastIndex - profilesPerPage
  let currentProfiles = renderedProfiles.slice(firstIndex,lastIndex)
  const numberOfPages = Math.ceil(renderedProfiles.length / profilesPerPage)
  
  return (
    <>
    <header className="flex_display">
      <Logo />
      <Nav />

    </header>
    <main>
    <h1 className="main_head">
      Patients ({renderedProfiles.length})
    </h1>
    <section className="main_top flex_display">
    <aside className="pagination_and_search">
    <Pagination numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <SearchBox setRendered={setRendered} setCurrentPage={setCurrentPage} profiles={profiles}/>
    </aside>

    <aside className="filter_and_select grid_display">
      <span> Filter by:</span>
      <div className="select_group flex_display">
    <SelectGender profiles={profiles} setCurrentPage={setCurrentPage} setRendered={setRendered}/>
    <SelectPayment profiles={profiles} setCurrentPage={setCurrentPage} setRendered={setRendered}/>
      </div>
    </aside>
    </section>
    <Profiles currentProfiles={currentProfiles} />
    </main>
    <footer>
     <p> Copyright Enye, {new Date().getFullYear()} </p> 
    </footer>
    </>
  );
}
export default App;
