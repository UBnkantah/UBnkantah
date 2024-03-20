import {RouterProvider, Route, Routes, createBrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { AboutPg, BlogPg, ContactPg, HomePg, ProjectPg } from "./pages/Index";
import { Navbar } from "./pages/components"
import Sidebar from "./Sidebar";
import 'aos/dist/aos.css';
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { useEffect } from "react";
import {FaMoon, FaSun} from "react-icons/fa"
import { useTheme } from "next-themes";

function App() {
  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])

  
   const { systemTheme, theme, setTheme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="black" size={18}/>;
    } else {
      return <FaMoon color="white" size={18}/>;
    }
  };


  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  function Root() {
    return(
      <div>
        <Navbar />
        <Sidebar />
        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="block md:hidden fixed top-1/2 md:right-12 right-6 cursor-pointer border border-primary rounded-full p-2 z-50 dark:bg-[#f1f1f1] bg-[#1f2937] shadow-2xl">
             
              {themeBox()}
              
            </div>
            <div className="pe-10">
             <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/about" element={<AboutPg />}/>
          <Route path="/projects" element={<ProjectPg />} />
          <Route path="/contacts" element={<ContactPg />} />
          <Route path="/blogs" element={<BlogPg />} />
        </Routes> 
        <div className="py-1">
          <p className="text-center">@2024 Ubong Nkantah. All Right Reserved</p>
        </div>
            </div>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
