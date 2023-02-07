import Header from "@/components/Header"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { addData } from "@/redux/reducers/contactSlice"
import { useDispatch } from "react-redux"

const contact = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [isactive, setIsActive] = useState(false)
  const [user , setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e) => {
    setUser((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value
    }));
  }

  const submitForm = (e)=>{
    e.preventDefault();
    setIsActive(true)

    user && dispatch(addData(user));

    setTimeout(()=>{
    setIsActive(false)
    user && router.push(`contact/${user.fname + user.lname}`);
    },3000)

  }

  return (
    <div className="mt-5 pt-3">
      <Header />
      <h2 className="text-center pt-5 pb-5">Contact</h2>
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="contact_div">
            <input type="text" name="fname" value={user.fname} onChange={handleChange} placeholder="First Name"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact_div">
            <input type="text" name="lname" value={user.lname} onChange={handleChange} placeholder="Last Name"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="contact_div">
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email Address"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact_div">
            <input type="number" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone Number"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="contact_div">
            <textarea name="message" cols="30" rows="5" value={user.message} onChange={handleChange} placeholder="Enter your message"></textarea>
          </div>
        </div>
      </div>
      <a href="#" className={isactive ? 'contact_btn active' : 'contact_btn'} onClick={submitForm}>Submit</a> 
      <h5>{user.fname}</h5>
      <h5>{user.lname}</h5>
      <h5>{user.email}</h5>
      <h5>{user.phone}</h5>
      <h5>{user.message}</h5>
      </div>
    </div>
  )
}

export default contact