import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import { useParams} from "react-router-dom"

const ServiceDetailPage= () => {
const api =useApi()
const params =useParams()
const [serviceDetail,setServiceDetail] = useState()
useEffect(()=>{
  (async()=>{
   const serviceResponse=
    await api.get(`public/services/getBySlug/${params.slug}`)
    console.log(">> SERVİS DETAY",serviceResponse.data )
    setServiceDetail(serviceResponse.data.data )
  })()
},[])

  // loading componentini buraya ekle

  // `?.` sintaksı Null Check veya Optional Chaining olarak kullanılır. Burada
  // yapılan iş şudur: soru işaretinden önceki kısım null ise soru işaretinden
  // sonraki kısmı çalıştırma, null değilse çalıştır. Örneğin aşağıdaki kodda
  // serviceDetail null olsa bile hata vermez, null değilse zaten service
  // property'sini alır.
  //serviceDetail?.service;

  // Uncaught TypeError: Cannot read properties of null (reading 'service')



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
              <h3 style={{"marginBottom" : "25px", "color" : "#EC6090"}}> {serviceDetail?.service.name} </h3>
              <p className="text-white"> {serviceDetail?.service.description} </p>
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

export default ServiceDetailPage
