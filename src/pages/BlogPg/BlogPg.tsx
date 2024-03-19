
import { Link } from "react-router-dom";
import { accabsimg, gamefinance, cexdeximg } from "../../assets";
import { BlogCard } from "../../ui";

const BlogPg = () => {

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

  return (
    <>
    <div className="container md:pt-12 pt-4">
      <h2 className="text-center text-5xl">BLOGS</h2>
      <p className="text-center text-2xl">MY RECENT <span className="text-primary">ARTICLES</span> </p>
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
    </>
    
  )
}

export default BlogPg