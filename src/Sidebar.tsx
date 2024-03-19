import {
  FaHome,
  FaShoppingBag,
  FaEnvelope,
  FaEdit,
  FaUserAlt,
} from "react-icons/fa";
import {FaMoon, FaSun} from "react-icons/fa"
import { useTheme } from "next-themes";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

   const { systemTheme, theme, setTheme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="black" size={18}/>;
    } else {
      return <FaMoon color="white" size={18}/>;
    }
  };

  const menuItem = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome size={20}/>,
      link: "/"
    },
    {
      id: 2,
      name: "About",
      icon: <FaUserAlt size={20}/>,
      link: "/about"
    },
    {
      id: 3,
      name: "Project",
      icon: <FaShoppingBag size={20}/>,
      link: "/projects"
    },
    {
      id: 4,
      name: "Contact",
      icon: <FaEnvelope size={20} />,
      link: "/contacts"
    },
    {
      id: 5,
      name: "Content",
      icon: <FaEdit size={20}/>,
      link: "/blogs"
    }
  ]

  const activeLink = "flex flex-row justify-center items-center rounded-full w-10 h-10  bg-primary"

    const normalLink = "flex flex-row rounded-full w-10 h-10 justify-center items-center bg-[#f1f1f1] dark:bg-[#1f2937]"


  return (
      <div className="hidden md:flex w-8 fixed h-full justify-center items-center  right-10" >
        <div className="flex flex-col gap-3">
          {menuItem.map((item, index) => (
            <NavLink to={item.link} className={({isActive}) => (isActive ? activeLink : normalLink)} key={index}>
              {/* <div className="hidden hover:block">{item.name}</div> */}
              <div>{item.icon}</div>
            </NavLink>
          ))}
          <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className=" cursor-pointer border border-primary rounded-full p-2 z-50 dark:bg-[#f1f1f1] bg-[#1f2937] shadow-2xl">
             
              {themeBox()}
              
            </div>
        </div>
        
      </div>
  );
};

export default Sidebar;
