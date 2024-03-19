import { PortfolioData } from "../../utils/data";
import ProjectCard from "../../ui/ProjectCard";

const ProjectPg = () => {

  return (
    <>

      <div className="container md:pt-12 pt-4">
      <h2  className='text-center text-5xl'>MY RECENT <span className='text-primary'>PROJECT</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 justify-center items-center">
      {PortfolioData.map((item : any) => (
        <ProjectCard key={item.id} img={item.img_cover} title={item.title} gitUrl={item.git} liveUrl={item.Link}/>
      ))}
      </div>
    </div>

    </>
    
  )
}

export default ProjectPg