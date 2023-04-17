import React, { useEffect, useState } from 'react'
import { adminJobService } from '../../../services/adminServices/adminJobService';
import { headerjob } from './utils';
import { Table } from 'antd';

export default function AdminJobPage() {
    const [job, setJobs] = useState([])

   useEffect(()=>{
      adminJobService.getUserList()
      .then((res) => {
              console.log(res);
              setJobs(res.data.content);
            })
            .catch((err) => {
             console.log(err);
            });
   })
  return (
   <div>
     <Table columns={headerjob} dataSource={job} />;
   </div>
  )
}
