import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { categoriesServices } from '../../../services/categoriesServices';

export default function CategoriesDetail() {
    let { id } = useParams();
    const [detail, setDetail] = useState([]);
    console.log("🚀 ~ file: CategoriesDetail.jsx:8 ~ CategoriesDetail ~ detail:", detail)

   
    useEffect(() => {
      let fetchDetail= async () => {
        try {
          let result = await categoriesServices.getDetailCategories(id);
          setDetail(result.data.content);
        } catch (error) {}
      };
      fetchDetail();
    }, []);

    console.log(detail);

  return (
    <div className='categories_detail'>
        {detail.congViec?.map((item,index)=>{
            return (

                <div key={index} className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <div className="detail__card ">
                        <img src={item.hinhAnh} alt="" />
                        
                    </div>
                </div>
               </div>
            )
        })}
    
    </div>
  )
}
