import React, { useEffect, useState } from "react";
import { jobsListService } from "../../services/jobslistServices/jobsListServ";
import ItemJobList from "./ItemJobList";
import DataJobsList from "./DataJobsList";

export default function JobsListPage() {
  const [jobsList, setJobsList] = useState([]);
  useEffect(() => {
    let fetchJobsList = async () => {
      try {
        let jobList = await jobsListService.getJobsServ();
        setJobsList(jobList.data.content);
        console.log(jobList.data.content);
      } catch (error) {}
    };
    fetchJobsList();
  }, []);
  return (
    <div className="mt-5 items-center m-auto container">
      <h1 className="text-xl font-bold ml-12 mb-2">
        Explore Graphics & Design
      </h1>
      <div className=" pb-20  flex justify-center">
        {jobsList.map((item) => {
          return <ItemJobList data={item} key={item.id} />;
        })}
      </div>
      <div>
        <DataJobsList />
      </div>
    </div>
  );
}
