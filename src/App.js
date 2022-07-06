import React, { useState, useEffect } from "react";

import JobListing from "./JobListing";
import FilterBar from "./FilterBar";

function App() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className='h-full pb-1 bg-Light-Grayish-Cyan font-spartan'>
      <header className="relative bg-[url('./images/bg-header-mobile.svg')]  lg:bg-[url('./images/bg-header-desktop.svg')] bg-desat-dark-cyan h-[156px]"></header>
      <div
        className={`max-w-[1110px] mx-auto gap-y-6 ${
          filter.length === 0 && "pt-[30px] lg:pt-0"
        }`}
      >
        {filter.length > 0 && (
          <FilterBar filter={filter} setFilter={setFilter} />
        )}
        <JobListing filter={filter} setFilter={setFilter} />
      </div>
      <footer className='max-w-3xl p-6 mx-auto text-xs text-center'>
        Challenge by{" "}
        <a
          className='hover:text-desat-dark-cyan hover:underline'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noopener'
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className='hover:text-desat-dark-cyan hover:underline'
          href='https://raymond-zeaiter.au'
          target='_blank'
          rel='noopener'
        >
          Raymond Zeaiter
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
