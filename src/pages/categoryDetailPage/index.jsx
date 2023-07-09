import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import { useParams, Link } from "react-router-dom"

export default function CategoryDetailPage() {
const api =useApi()
const params =useParams()
const [categoryDetail,setCategoryDetail]=useState(null)
  useEffect(()=>{
    (async()=>{
      const categoryDetailResponse = await api.get(`public/categories/getBySlug/${params.slug}`)
      console.log(">> category", categoryDetailResponse.data.data)
      setCategoryDetail(categoryDetailResponse.data.data)
    })()
    
  },[])
  if(!categoryDetail){
    return(
      <>
<div className="container">
<div className="row">
  <div className="col-lg-12">
    <div className="page-content">
      <h1>Page Looading...</h1>
    </div>
    </div>
    </div>
    </div>
    </>
    )
  }

return (
<>
<div className="container">
<div className="row">
  <div className="col-lg-12">
    <div className="page-content">
      <div className="main-banner">
        <div className="row">
          <div className="col-lg-7">
            <div className="header-text">
              <h3> {categoryDetail.category.name} </h3>
              <p> {categoryDetail.category.description} </p>
              </div>
          </div>
        </div>
      </div>

      <div className="most-popular">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4><em>Services</em></h4>
                </div>
                <div className="row">
                 {categoryDetail.services.map((item)=>{
return(
  <div className="col-lg-3 col-sm-6" key={item.id} >
  <div className="item">
  <Link to={`/service/${item.slug}`} >
    <img src={item.image} onError={(target)=> {target.currentTarget.src = "assets/images/no-image.png"}} alt=""/>
    <h4> {item.name}</h4>
    </Link>
</div>
</div>
)
   })}
   

  </div>
    </div>
     </div>
   </div>

   <div className="most-popular">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4><em>Blogs</em></h4>
                </div>
                <div className="row">
                 {categoryDetail.blogs.map((item)=>{
return(
  <div className="col-lg-3 col-sm-6" key={item.id} >
  <div className="item">
  <Link to={`/blog/${item.slug}`} >
    <img src={item.image} onError={(target)=>target.currentTarget.src= "assets/images/no-image.png"} alt=""/>
    <h4> {item.title}</h4>
    </Link>
</div>
</div>
)
   })}
   
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>


          
  
   </>
)
}