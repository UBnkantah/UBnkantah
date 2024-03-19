import { Link } from "react-router-dom"

interface BlogType {
  img: string,
  title: String,
  text: String,
  link: string
}

const BlogCard = ({img, text, title, link}:BlogType) => {
  return (
    <div className="shadow-lg rounded-xl bg-[#f1f1f1] dark:bg-[#1f2937]">
      <img src={img} alt="" className="w-full h-48 rounded-t-xl object-cover" />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={link}>
        Read More
      </Link>
    </div>
  )
}

export default BlogCard