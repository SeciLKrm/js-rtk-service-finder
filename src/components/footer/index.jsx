import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer () {
  const categoryState=useSelector((state)=>state.categoryReducer)
  return ( 
    <>
    <footer>
       <div className ="container">
      <div className ="row">
        <div className ="col-lg-6">
          <p>Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved. 
          
          <br/>Design: <a href="https://templatemo.com"
           target="_blank" 
           title="free CSS templates">TemplateMo</a>  
           Test <a href="https://themewagon.com" target="_blank" >ThemeWagon</a></p>
        </div>
        <div className ="col-lg-6">
          
        <strong style={{color : "white"}}>Kategoriler</strong>
        <ListGroup style={{margin :"10px"}} >
          {categoryState.categories.map((item,index)=>{
         if(index < 5) {
          return ( 
          <ListGroup.Item style={{borderColor:"#EC6090", background :'#212529'}} key={item.id} >
        <Link to={item.slug} >
          {item.name}
        </Link>
          </ListGroup.Item>
           )
         }
         return null
          })}
        </ListGroup>
          
          
          
          
        </div>
      </div>
    </div>
  </footer>
  </>
   )
}
