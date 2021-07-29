import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        
        <div class='bg-gray-700 mx-auto'>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
          <div>
            <h1 class='text-6xl text-gray-200'>Nathan Nosar</h1>
          </div>
            
            <nav class='flex flex-row text-gray-200 hover:gray-400 text-center mx-auto content-center'>
          <ul class='hover-gray-400 flex'>
            <li>
              <Link class='hover:gray-600 flex-1 flex-row m-2' to="/">Home</Link>
            </li>
            <li>
              <Link class='flex-1 flex-row m-2' to="/about">About</Link>
            </li>
            <li>
              <Link class='flex-1 flex-row m-2' to="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
