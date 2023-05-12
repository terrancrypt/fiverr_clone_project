import React, { useEffect, useState } from 'react'
import { categoriesServices } from "../../../services/categoriesServices";


const CategoriesExplore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
     categoriesServices
        .getCategoriesExplore()
        .then((res) => {
         
          setExplore(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (  
      <div className='categories__explore'>
        {explore.map((item,index)=>{
          return(
            <div key={index}>
             
            </div>
          )
        })}


      </div>
    );
  };
  export default CategoriesExplore;