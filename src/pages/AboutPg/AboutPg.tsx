
import { FaCode, FaDownload, FaHandshake, FaPeopleGroup } from "react-icons/fa6"
// import { Skillitems } from "../../utils/data"
import { ExpAbtme } from "../../ui"
import { HiOutlineSpeakerphone } from "react-icons/hi"



const AboutPg = () => {
  const ExpItem = [
    {
      id: 1,
      name: "5+",
      yrs: "YEARS OF",
      exp: "EXPERIENCES"
    },
    // {
    //   id: 2,
    //   name: "12+",
    //   yrs: "YEARS OF",
    //   exp: "EXPERIENCES"
    // },
    {
      id: 3,
      name: "10+",
      yrs: "HAPPY",
      exp: "CUSTOMERS"
    },
    {
      id: 4,
      name: "5",
      yrs: "AWARDS",
      exp: "WON"
    }
  ]

  const Serve =[
    {
      id: 1,
      name: "Web Development",
      icon: <FaCode size={23} />
    },
    {
      id: 2,
      name: "IT Consultant",
      icon: <FaHandshake size={23}/>
    },
    {
      id: 3,
      name: "Public Speaking",
      icon: <HiOutlineSpeakerphone size={23}/>
    },
    {
      id: 4,
      name: "Community Management",
      icon: <FaPeopleGroup size={23}/>
    }
  ]

  return (
    <div className="container pt-12">
      <p className="text-center font-['Josefin_Sans'] md:text-5xl text-3xl">ABOUT <span className="text-primary">ME</span> </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center py-8">
        <div>
          <p className="md:text-3xl text-xl font-[500]">PERSONAL INFOS</p>
          <div className="py-4">
            <div className="flex pt-1 justify-between items-start">
              <div>
                <p>First Name: <span className="font-bold">Ubong</span> </p>
              </div>
              <div>
                <p>Location:  <span className="font-bold">Remote</span></p>
              </div>
            </div>
            <div className="flex pt-1 justify-between items-start">
              <div>
                <p>Last Name:  <span className="font-bold">Nkantah</span> </p>
              </div>
              <div>
                <p>Phone Number: <span className="font-bold">+233 234 567 890</span></p>
              </div>
            </div>
            <div className="flex pt-1 justify-between items-center">
              <div>
                <p>Nationality: <span className="font-bold">Nigerian</span> </p>
              </div>
              <div>
                <p>Email Address: <span className="font-bold text-sm">ubongnkantahuwem@gmail.com</span></p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <button className="rounded-full relative py-2 ps-4 pe-12 flex flex-row justify-center items-center gap-2 border-2 border-primary">DOWNLOAD CV <span className="bg-primary rounded-full p-3 absolute right-0"><FaDownload size={20} /></span></button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {ExpItem.map((item) => (
             <ExpAbtme key={item.id} yrs={item.yrs} name={item.name} exp={item.exp}/> 
            ))}
            
          </div>
        </div>
      </div>
      {/* MY SERVICES */}
      <div>
        <h2 className="text-center md:text-3xl text-xl">MY <span className="text-primary">SERVICES</span> </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 py-4 justify-center item-center gap-4">
        {Serve.map((item) => (
          <div key={item.id} className="rounded-xl py-4 bg-[#f1f1f1] dark:bg-[#1f2937] shadow-lg flex flex-col text-center justify-center items-center">
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      </div>
      
      {/* SKILLS */}
      {/* <div>
    <h2 className="text-center text-3xl">MY <span className="text-primary">SKILLS</span> </h2>
    <div className="grid pb-4 pt-8  grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center items-center gap-4">
      {Skillitems.map((item) => (
      <div key={item.id} className="bg-[#f1f1f1] dark:bg-[#1f2937] border-2 rounded-xl border-primary justify-center items-center flex flex-col">
        <p>{item.name}</p>
        <div className="rounded-full p-2 flex items-center justify-center bg-white">
          <img src={item.icon} alt="" className="rounded-full w-16 h-16"/>
        </div>
      </div>  
      ))}
      
    </div>
    </div> */}
      {/* TOOLS */}
    {/* <div>
    <h2 className="text-center text-3xl">MY <span className="text-primary">TOOLS</span> </h2>
    <div className="grid pb-4 pt-8  grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center items-center gap-4">
      {Skillitems.map((item) => (
      <div key={item.id} className="bg-[#f1f1f1] dark:bg-[#1f2937] border-2 rounded-xl border-primary justify-center items-center flex flex-col">
        <p>{item.name}</p>
        <div className="rounded-full p-2 flex items-center justify-center bg-white">
          <img src={item.icon} alt="" className="rounded-full w-16 h-16"/>
        </div>
      </div>  
      ))}
      
    </div>
    </div> */}
    </div>
  )
}

export default AboutPg