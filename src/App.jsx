import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/mainPage";
import CatergoryDetailPage from "./pages/categoryDetailPage";
// import BlogDetailPage from "./pages/blogDetailPage"
import ServiceDetailPage from "./pages/serviceDetailPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import useApi from "./hooks/useApi";
import { setCategories } from "./redux/categorySlice";
import { useDispatch } from "react-redux";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const api = useApi();
  useEffect(() => {
    (async () => {
      const categoryResp = await api.get(
        "public/categories/listMainCategories"
      );
      // Bu bilgiler örnek olması amacıyla yazıldı, diğer sayfalar içerisinde uygun şekilde
      // tekrar yazılacak.
      //const jobResp = await api.get(
      //  "public/clientProjects/latestJobs?status=pending"
      //);
      //const blogResp = await api.get(
      //  "public/blogs/list?status=active&length=6"
      //);
      //const ornekResp = await api.get(
      //  "public/blogs/ornek?status=active&length=6"
      //);

      // API'den gelen JSON datasını ekrana basıyoruz.
      console.log(">> RESP", categoryResp.data);
      /**
       * categoryResp objesi AxiosResponse türünden bir objedir. Bu objenin içerisinde
       * data property'si vardır ve bu property axios tarafından oluşturulur. Bu property
       * içerisindeki bilgi API'den gelen json objesidir. Bu json objesinin içerisindeki
       * `data` property'si de kategori listesini tutar. Bu yüzden data.data şeklinde
       * yazarak kategori listesini alırız.
       */
      dispatch(setCategories(categoryResp.data.data));
    })();
  }, []);
  /*
  Projemizin route yapısı şu şekilde olsun:
  
  Anasayfa linki, burada kategori listesi gösteriliyor:
  /

  Kategori detay linki, burada kategori bilgisi, servis listesi ve blog listesi olacak:
  /category/:slug

  Servis detay linki, burada servis bilgisi ve o servise ait olan blog listesi olacak:
  /service/:slug

  Blog detay linki, burada blog bilgileri görünsün:
  /blog/:slug
  
  */

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="category/:slug" element={<CatergoryDetailPage />} />
        <Route path="service/:slug" element={<ServiceDetailPage />} />
        {/* <Route path="blog/:slug" element={<BlogDetailPage />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
