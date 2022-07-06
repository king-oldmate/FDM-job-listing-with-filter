import React from "react";
import data from "./data.json";

const JobListing = ({ filter, setFilter }) => {
  const addTagToFilter = (tag) => {
    if (!filter.includes(tag)) setFilter([...filter, tag]);
  };

  return (
    <>
      {data.map((job) => {
        const {
          id,
          company,
          logo,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
        } = job;
        const tags = [role, level, ...languages, ...tools];

        if (
          filter.every((e) => {
            return tags.includes(e);
          })
        ) {
          return (
            <>
              <div
                key={id}
                className={`px-6 pb-6 mx-6 bg-white  rounded-md  mb-9 text-[15px]  font-spartan shadow-lg shadow-Light-Grayish-cyan mt-6 lg:flex lg:content-center lg:px-10 lg:py-[30px] ${
                  featured && "border-desat-dark-cyan border-l-4 pl-5 lg:pl-9"
                }`}
              >
                {/* need to adjust the u */}
                <img
                  src={logo}
                  alt={company}
                  className='w-12 -translate-y-6 aspect-square lg:w-[86px] lg:h-[86px] lg:translate-y-0 lg:mr-6'
                />
                <div className='lg:flex lg:flex-col lg:content-evenly'>
                  <div className='mb-2 lg:mb-1'>
                    <span className='mr-6 font-extrabold text-desat-dark-cyan lg:text-[19px]'>
                      {company}
                    </span>
                    {job.new && (
                      <span className='px-[10px] py-[6px] mr-2 text-white uppercase rounded-2xl bg-desat-dark-cyan'>
                        New!
                      </span>
                    )}
                    {featured && (
                      <span className='px-[10px] py-[6px] text-white uppercase  rounded-2xl bg-[#2c3a3a]'>
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className='mb-2 lg:mb-1 font-extrabold hover:text-desat-dark-cyan w-fit hover:cursor-pointer text-base lg:text-[25px]'>
                    {position}
                  </h2>
                  <div className='mb-3 lg:mb-1 text-Dark-Grayish-Cyan'>
                    <span className='mr-1'>{postedAt}</span> •{" "}
                    <span className='mx-1'>{contract}</span> •{" "}
                    <span className='ml-1'>{location}</span>
                  </div>
                </div>
                <div className='border-t-[1px] border-Dark-Grayish-Cyan lg:border-0 pt-0 lg:ml-auto lg:text-base lg:self-center lg:mb-5 font-extrabold'>
                  {tags.map((tag, index) => {
                    return (
                      <button
                        key={index}
                        className='tags'
                        onClick={() => addTagToFilter(tag)}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          );
        }
        // I don't know if this was the right thing to do but it got rid of an error message so yolo.
        return <></>;
      })}
    </>
  );
};

export default JobListing;
