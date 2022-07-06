import React, { useState, useEffect } from "react";
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

        return (
          <div
            key={id}
            className='px-6 pb-6 mx-6 bg-white border-l-4 rounded-md border-desat-dark-cyan mb-9 text-[15px] font-spartan shadow-lg shadow-Light-Grayish-cyan mt-12'
          >
            <img
              src={logo}
              alt={company}
              className='w-12 -translate-y-6 aspect-square'
            />
            <div className='mb-2'>
              <span className='mr-6 font-extrabold text-desat-dark-cyan'>
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

            <h2 className='mb-2 font-extrabold hover:text-desat-dark-cyan'>
              {position}
            </h2>
            <div className='mb-2 text-Dark-Grayish-Cyan'>
              <span className='mr-1'>{postedAt}</span> •{" "}
              <span className='mx-1'>{contract}</span> •{" "}
              <span className='ml-1'>{location}</span>
            </div>
            <div className='border-t-[1px] border-Dark-Grayish-Cyan pt-1'>
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
        );

        // implement filter
      })}
    </>
  );
};

export default JobListing;
