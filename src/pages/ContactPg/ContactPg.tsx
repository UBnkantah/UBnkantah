import { useEffect, useState } from 'react'
import {FaEnvelopeOpen,  FaGithub, FaLinkedin, FaTwitter, FaMedium, FaYoutube} from "react-icons/fa"
import axios from "axios";
import { toast } from 'react-toastify';

const ContactPg = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Ubong Nkantah | Contact Me'
  }, [])

  const handleSubmit =(e: any) => {
    e.preventDefault()
    try {
      setLoading(true)
       axios.post("")
      toast.success("", {position: "bottom-left"})
      setLoading(false)
    } catch (error: any) {
      toast.error(error, {position: "bottom-left"})
      setLoading(false)
    }
  }

  return (
    <div className="container md:pt-12 pt-4">
      <h2  className='text-center text-5xl'>GET IN <span className='text-primary'>TOUCH</span></h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center py-8'>
        <div >
          <h3>DON'T BE SHY</h3>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

          <div className='d-flex gap-1'>
          <div>
            <FaEnvelopeOpen color='#ffb400' size={40} />
          </div>
          <div>
            <h4>MAIL ME</h4>
            <p>ubongnkantahuwem@gmail.com</p>
          </div>

        </div>
        <div className='flex flex-row gap-3'>
          <div className='p-2' style={{borderRadius: "50%"}} ><FaLinkedin  size={30}/></div>
          <div className='p-2' style={{borderRadius: "50%"}}><FaGithub  size={30}/></div>
          <div className='p-2' style={{borderRadius: "50%"}}><FaMedium  size={30}/></div>
          <div className='p-2' style={{borderRadius: "50%"}}><FaTwitter  size={30}/></div>
          <div className='p-2' style={{borderRadius: "50%"}}><FaYoutube  size={30}/></div>
        </div>
        </div>
        

      <div className='col-span-2'>
        <form onSubmit={handleSubmit}>
<div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-2'>
        <input placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='text' required />
        <input placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='email' required />
        <input placeholder='Your subject' value={subject} onChange={(e) => setSubject(e.target.value)} className='p-2 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl' type='text' required   />
      </div>
      <div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full h-[200px] rounded-xl mt-2 mb-4 border-black bg-[#f1f1f1] dark:bg-[#1f2937]'></textarea>
      </div>
      <button className='bg-primary py-2 px-4 rounded-lg text-white'>{loading? (<>Sending..</>): (<>SEND MESSAGE</>)}</button>
        </form>
      
      
      </div>
      
    </div>
    </div>
  )
}

export default ContactPg