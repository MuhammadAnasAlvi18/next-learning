import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";

const Product = () => {

   const [jokes, setJokes] = useState(null);

   const getJokes = async ()=>{
    setJokes(null);

    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();

    data && setJokes(data);
   }

  return (
    <div className="mt-5 pt-3">
      <Header />
      <h2 className="text-center pt-5">RANDOM JOKES GENERATOR</h2>
      <h3 className="pt-3 text-center">{jokes ? jokes.setup : "Loading ..."}</h3>
      <h5 className="text-center">{jokes ? jokes.punchline : "Loading ..."}</h5>
      <Link href="#" className="bg_btn" onClick={getJokes}>Get Jokes</Link>
    </div>
  )
}

export default Product;