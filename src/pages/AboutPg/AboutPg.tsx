
import { FaDownload } from "react-icons/fa6"
import { Skillitems } from "../../utils/data"
import { ExpAbtme } from "../../ui"



const AboutPg = () => {
  const ExpItem = [
    {
      id: 1,
      name: "12+",
      yrs: "YEARS OF",
      exp: "EXPERIENCES"
    },
    {
      id: 2,
      name: "12+",
      yrs: "YEARS OF",
      exp: "EXPERIENCES"
    },
    {
      id: 3,
      name: "81+",
      yrs: "HAPPY",
      exp: "CUSTOMERS"
    },
    {
      id: 4,
      name: "53+",
      yrs: "AWARDS",
      exp: "WON"
    }
  ]
  return (
    <div className="container pt-12">
      <p className="text-center text-5xl">ABOUT <span className="text-primary">ME</span> </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center py-8">
        <div>
          <p className="text-3xl font-[500]">PERSONAL INFOS</p>
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
                <p>Email Address: <span className="font-bold">mail@gmail.com</span></p>
              </div>
            </div>
          </div>
          <div>
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
      {/* SKILLS */}
      <div>
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
    </div>
      {/* TOOLS */}
    <div>
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
    </div>
    </div>
  )
}

export default AboutPg