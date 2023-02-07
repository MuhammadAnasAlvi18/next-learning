import Header from "@/components/Header";
import { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counterSlice'

const About = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(count < 0){
      dispatch(increment())
    }
  },[count])
  

  return (
    <div className="mt-5 pt-5">
      <Header />
      <h2 className="text-center">COUNTER APP</h2>
      <h1 className="text-center">{count}</h1>
      <div className="counter_btn">
      <Link href='#' onClick={(e) => {
        dispatch(increment())
        e.preventDefault();
      }}>+</Link>
      <Link href='#' onClick={(e) => {
        dispatch(decrement())
        e.preventDefault();
        }}>-</Link>
      </div>
    </div>
  )
}

export default About;