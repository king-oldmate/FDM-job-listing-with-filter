import React, { useState, useEffect } from "react";

import JobListing from "./JobListing";
import FilterBar from "./FilterBar";

function App() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <main className='w-screen h-full pb-1 bg-Light-Grayish-Cyan'>
      <header className="relative bg-[url('./images/bg-header-mobile.svg')] bg-desat-dark-cyan h-[156px]"></header>
      {filter.length > 0 && <FilterBar filter={filter} setFilter={setFilter} />}
      <JobListing filter={filter} setFilter={setFilter} />
    </main>
  );
}

export default App;
