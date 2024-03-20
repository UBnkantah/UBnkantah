import { useEffect, useState } from 'react'
import {FaEnvelopeOpen,  FaGithub, FaLinkedin, FaTwitter, FaMedium, FaYoutube} from "react-icons/fa"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { db } from '../../Server';
import { addDoc, collection } from 'firebase/firestore';

const ContactPg = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [number, setNumber] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Ubong Nkantah | Contact Me'
  }, [])

  const ConDet = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ubong-nkantah/",
      icon: <FaLinkedin size={25} />
    },
    {
      id: 2,
      name: "Github",
      link: "https://github.com/UBnkantah",
      icon: <FaGithub  size={25}/>
    },
    {
      id: 3,
      name: "Medium",
      link: "https://medium.com/@ubongnkantahuwem",
      icon: <FaMedium size={25}/>
    },
    {
      id: 4,
      name: "Twitter",
      link: "https://twitter.com/UB_Script",
      icon: <FaTwitter size={25} />
    },
    {
      id: 5,
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCQlKHAshJsUSPtMoVjPGD0w",
      icon: <FaYoutube size={25} />
    }
  ]

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    try {
      setLoading(true)
       await addDoc(collection(db, "contact"), {name, email, subject, message, number})
      toast.success(`Message Received ${name}, I will get back to you shortly`, {
			position: "bottom-left"
		})
      setLoading(false)
    } catch (error: any) {
      toast.error(error, {position: "bottom-left"})
      setLoading(false)
    }
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setNumber("");
  }

  return (
    <div className="container md:pt-12 pt-4">
      <h2  className="text-center font-['Josefin_Sans'] md:text-5xl text-3xl">GET IN <span className='text-primary'>TOUCH</span></h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center py-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='md:text-3xl text-xl'>DON'T BE SHY</h3>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

          <div className='flex flex-row gap-2 justify-start items-center'>
          <div>
            <FaEnvelopeOpen color='#ffb400' size={30} />
          </div>
          <div>
            <h4>MAIL ME</h4>
            <p>ubongnkantahuwem@gmail.com</p>
          </div>

        </div>
        <div className='flex flex-row gap-2'>
          {ConDet.map((item) => (
          <div className='p-2 flex items-center hover:bg-primary bg-[#f1f1f1] dark:bg-[#1f2937] rounded-full shadow-xl cursor-pointer'  key={item.id}>
            <Link to={item.link} target='_blank'>
              {item.icon}
            </Link>
          </div>  
          ))}
        </div>
        </div>
        

      <div className='col-span-2'>
        <form onSubmit={handleSubmit}>
<div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-2'>
        <input placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='text' required />
        <input placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='email' required />
        <input placeholder='Your number' value={number} onChange={(e) => setEmail(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='text' required />
        <input placeholder='Your subject' value={subject} onChange={(e) => setSubject(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='text' required   />
      </div>
      <div>
        <textarea value={message} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} className='w-full h-[200px] rounded-xl mt-2 mb-4 border-black bg-[#f1f1f1] dark:bg-[#1f2937] p-2'></textarea>
      </div>
      <button className='bg-primary py-2 px-4 rounded-lg text-white'>{loading? (<>Sending..</>): (<>SEND MESSAGE</>)}</button>
        </form>
      
      
      </div>
      
    </div>
    </div>
  )
}

export default ContactPg