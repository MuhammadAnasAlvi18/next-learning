import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../asset/logo.png'

const Header = () => {
  return (
    <header className='header'>
    <div className='container'>
    <div className='nav_bar'>
      <Link href='/'>
      <Image src={logo} alt=''/>
      </Link>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/product'>Product</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <Link href='javascript:void(0)' className='header_btn'>Button</Link>
      <i className='fa fa-solid fa-bars'></i>
    </div>
    </div>
    </header>
  )
}

export default Header