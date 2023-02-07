import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../asset/logo.png'
import { useRouter } from 'next/router'

const Header = () => {

  const router = useRouter()

  return (
    <header className='header'>
    <div className='container'>
    <div className='nav_bar'>
      <Link href='/'>
      <Image src={logo} alt='' priority/>
      </Link>
      <ul>
        <li>
          <Link href='/'>Todo App</Link>
        </li>
        <li>
          <Link href='/counter'>Counter App</Link>
        </li>
        <li>
          <Link href='/jokes'>Random Jokes Generator</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <Link href='#' className='header_btn'>Button</Link>
      <i className='fa fa-solid fa-bars'></i>
    </div>
    </div>
    </header>
  )
}

export default Header