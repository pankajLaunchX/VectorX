/* eslint-disable react/jsx-no-target-blank */
import { Container } from '@mui/material'
import React from 'react'
import LaunchX from '../../../public/LaunchX.svg';
function Footer() {
  return (
    <footer className="bg-white">
      <Container className="w-full max-w-screen-xl mx-auto py-10 px-4 text-black inter-font-600">
        <hr className="my-2 border-6 border-solid border-slate-400" />
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-md inter-font-600">A product by <a href="https://launchxlabs.ai/" className="hover:text-black" target="_blank">LaunchX™ Labs.</a></h1>
          {/* <a href="https://launchxlabs.ai/" className="flex mb-4 mx-1 items-center" target="_blank"> */}
          {/* <img src={LaunchX} className='h-auto w-32 object-cover' alt="LaunchX Logo" /> */}
          {/* </a> */}
          <div className="block text-md text-center inter-font-600">©2024, All rights reserved.</div>
          {/* <span className="block text-md text-center ">© 2024 . */}
          {/* <ul className="flex items-center justify-around mb-6 text-md sm:mb-0 ">
            <li>
              <a href="https://launchxlabs.ai/about/privacy" className="hover:underline px-2" target="_blank">Privacy Policy</a>
            </li>
            <li>
              <a href="https://launchxlabs.ai/about/terms" className="hover:underline px-2" target="_blank">Terms of Use</a>
            </li>
            <li>
              <a href="https://launchxlabs.ai/about/contact" className="hover:underline px-2" target="_blank">Contact</a>
            </li>
          </ul> */}
        </div>

        {/* <span className="block text-md text-center ">© 2024 <a href="https://launchxlabs.ai/" className="hover:text-black" target="_blank">LaunchX™</a>. All Rights Reserved.</span> */}
      </Container>
    </footer>
  )
}

export default Footer