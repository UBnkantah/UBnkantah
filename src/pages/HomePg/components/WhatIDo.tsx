import {FaBars, FaLinkedin} from "react-icons/fa"
import ProImg from "../../../assets/qed.png";
import { useState } from "react";
import { BlogCard, ProjectCard } from "../../../ui";
import { PortfolioData } from "../../../utils/data";
import { Link } from "react-router-dom";
import { accabsimg, gamefinance, cexdeximg } from "../../../assets";

const WhatIDo = () => {
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState(0);
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const YouLinkItem = [
        {
            id: 1,
            link: "https://youtu.be/0oTlm4GP6vk?si=NvQisqqayNz_NeOc"
        },
        {
            id: 2,
            link: "https://youtu.be/Xq7Ok04N6xE?si=XbOb-nL6Ry65qeus"
        },
        {
            id: 3,
            link: "https://youtu.be/auryISg0Wlg?si=DHc86g3q493Q0dt9"
        }
    ]
  
  const BlogItems = [
    {
      id: 1,
      title: "Account Abstraction (EIP-4337): Unlocking the Potential of Ethereum’s Evolution",
      text: "",
      link: "https://medium.com/@ubongnkantahuwem/account-abstraction-eip-4337-unlocking-the-potential-of-ethereums-evolution-688ce6d884e2",
      img: accabsimg
    },
    {
      id: 2,
      title: "What is GameFi?",
      text: "",
      link: "https://medium.com/@ubongnkantahuwem/what-is-gamefi-37cbdf824cfb",
      img: gamefinance
    },
    {
      id: 3,
      title: "Trading on a CEX vs. DEX. What’s the Difference and What Are the Risks?",
      text: "",
      link: "https://medium.com/@ubongnkantahuwem/trading-on-a-cex-vs-dex-whats-the-difference-and-what-are-the-risks-88240fe86660",
      img: cexdeximg
    }
  ]

  // const handleSubmit = async() => {
  //   try {
      
  //   } catch (error: any) {
  //     toast.error(error, {position: "bottom-left"})
  //   }
  // }

  return (
    <div>
      <div className="container">
        {/* ABOUT ME */}
        <h2 className="text-center">ABOUT ME</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-8 justify-center items-center">
          <div>
            <img src={ProImg} alt="" />
          </div>
          <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi reiciendis ab voluptatum aperiam illum, aliquam iure consequatur, non error dolor amet nisi obcaecati rem maxime dolorem hic alias, architecto in. Eveniet quam, nam pariatur, doloremque in ad odio totam velit esse id sunt. Nihil nam facere labore aliquam porro.</p>
          </div>
        </div>
        {/* SERVICES */}
        <div>
          <h3>SERVICES</h3>
          <p></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-8">
          <div className="rounded-xl shadow-lg p-8 flex flex-col gap-4 justify-start items-start">
            <FaBars />
            <p>Business Strategy</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ullam reprehenderit fugiat atque et explicabo modi adipisci ipsum, eveniet aperiam?</p>
          </div>
          
        </div>
        <div>
          {/* MY PORTFOLIO */}
          <div>
            <h2 className="text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 justify-center items-center">
      {PortfolioData.map((item : any) => (
        <ProjectCard key={item.id} img={item.img_cover} title={item.title} gitUrl={item.git} liveUrl={item.Link}/>
      ))}
      </div>
      <div className="flex justify-center items-center py-2">
       <Link to="/projects">
        <button className="border border-black p-2 rounded-xl ">SEE MORE</button>
      </Link> 
      </div>
      
          </div>
          
        </div>
        {/* YOUTUBE CHANNEL */}
         <div className="py-6">
        <h2 className="text-center">YouTube</h2>
        <p className="text-center">Recent Videos</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 justify-center items-center">
      {YouLinkItem.map((item : any) => (
        <iframe src={item.link} className="w-full h-48 rounded-xl"></iframe>
      ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="rounded-xl p-2 border border-black ">VISIT CHANNEL</button>
      </div>
    </div>
    {/* BLOG POSTS */}
    <div>
      <h2 className="text-center">BLOG</h2>
      <p className="text-center">RECENT ARTICLES</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 justify-center items-center">
        {BlogItems.map((item) => (
         <BlogCard key={item.id} img={item.img} link={item.link} title={item.title} text={item.text}/> 
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="https://medium.com/@ubongnkantahuwem">
          <button className="rounded-xl p-2 border border-black ">SEE MORE</button>
        </Link>
        
      </div>
    </div>
        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="hidden md:block">
            <img src={ProImg} alt="" />
          </div>
          <div>
            <form>
              <div className="flex flex-row justify-start items-center gap-8">
                <div>
                  <label htmlFor="">YOUR FULLNAME</label>
                <input type="email" required className="p-2 rounded-lg border border-black " value={email} onChange={(e:any) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="">YOUR EMAIL ADDRESS</label>
                <input type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">YOUR PHONE NUMBER</label>
                <input type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">SUBJECT</label>
                <input type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">YOUR MESSAGE</label>
                <textarea name="" id="" className="w-full h-16 rounded-lg"></textarea>
              </div>
              <button className="w-full py-2 bg-black text-white rounded-xl mt-3" >SEND</button>
            </form>
          </div>
        </div>
        {/* FOOTER  SECTION*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-8">
          <div className="flex flex-col gap-4 justify-start items-start">
            <div className="flex justify-start items-center gap-4">
              <img src={ProImg} alt="" className="w-16 h-16 rounded-full"/>
              <p>UBONG <br/> NKANTAH</p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="rounded-lg shadow-lg p-2 cursor-pointer">
                <FaLinkedin size={24}/>
              </div>
              <div className="rounded-lg shadow-lg p-2 cursor-pointer">
                <FaLinkedin size={24}/>
              </div>
              <div className="rounded-lg shadow-lg p-2 cursor-pointer">
                <FaLinkedin size={24}/>
              </div>
            </div>
            <p>Business Strategy</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ullam reprehenderit fugiat atque et explicabo modi adipisci ipsum, eveniet aperiam?</p>
          </div>
          <div className="flex flex-col gap-4 justify-start items-start">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>ABOUT US</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-start items-start">
            <img src={ProImg} alt="" className="w-full"/>
            <p>Business Strategy</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ullam reprehenderit fugiat atque et explicabo modi adipisci ipsum, eveniet aperiam?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo