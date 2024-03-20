import {Link} from "react-router-dom";
interface ProTypes {
    img: any,
    title: String,
    liveUrl: string,
    gitUrl: string
}

const ProjectCard = ({img, title, liveUrl, gitUrl}: ProTypes) => {
  return (
    <div className="shadow-lg rounded-xl bg-[#f1f1f1] dark:bg-[#1f2937]">
        <img src={img} alt="" className="w-full h-40 object-cover rounded-t-xl"/>
        <h2 className="ps-2 text-xl">{title}</h2>
        <div className="flex justify-between items-center py-4 px-2">
            <Link to={gitUrl} target="_blank">
             <button className="border border-black rounded-xl p-2">Source Code</button>   
            </Link>
            
            <Link to={liveUrl} target="_blank">
              <button className="text-white bg-black px-4 py-2 rounded-xl">Live Url</button>  
            </Link>
            
        </div>
    </div>
  )
}

export default ProjectCard