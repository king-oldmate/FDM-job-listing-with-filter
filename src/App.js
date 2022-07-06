import JobListing from "./JobListing";

function App() {
  return (
    <main className='w-screen h-full pb-1 bg-Light-Grayish-Cyan'>
      <header className="bg-[url('./images/bg-header-mobile.svg')] bg-desat-dark-cyan h-[156px] mb-12"></header>
      <JobListing />
    </main>
  );
}

export default App;
