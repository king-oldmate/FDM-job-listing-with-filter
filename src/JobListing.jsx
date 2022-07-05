import React from "react";
import data from "./data.json";

const JobListing = () => {
  return (
    <>
      {data.map((job) => {
        return <p>hello</p>;
      })}
    </>
  );
};

export default JobListing;
