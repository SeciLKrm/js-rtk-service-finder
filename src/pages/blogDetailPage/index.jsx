// import { useEffect, useState } from "react";
// import useApi from "../../hooks/useApi";
// import { useParams } from "react-router-dom";

// const BlogDetailPage = () => {
//   const api = useApi();
//   const params = useParams();

//   const [blogDetail, setBlogDetail] = useState();
//   useEffect(() => {
//     (async () => {
//       const blogResponse = await api.get(
//         `public/blogs/list?status=active&length=6`
//       );
//       console.log(">> BLOG DETAY", blogResponse.data.data);
//       setBlogDetail(blogResponse.data.data);
//     })();
//   }, []);
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="page-content">
//               <div className="main-banner">
//                 <div className="row">
//                   <div className="col-lg-7">
//                     <div className="header-text text-white">
//                       <h3 style={{ marginBottom: "25px", color: "#EC6090" }}>
//                         {" "}
//                         {blogDetail[1]?.title}
//                       </h3>
//                       <p className="text-white"> {blogDetail[1]?.content} </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetailPage;
