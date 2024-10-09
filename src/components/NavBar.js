import React from 'react'

export default function NavBar() {
  return (
    <nav className='relative'>
        <div className=' flex flex-row mx-9 my-7 justify-center'>
            {/* first block */}
            <div className='flex flex-row space-x-4 flex-grow'>
            <button variant="ghost" className="opacity-70 font-semibold text-lg">Parents</button>
            <button variant="ghost" className="opacity-70 font-semibold text-lg">Sitters</button>
            <button variant="ghost" className="opacity-70 font-semibold text-lg">Trust & Safety</button>
            <button variant="ghost" className="opacity-70 font-semibold text-lg">Blog</button>
            </div>
            {/* second block */}
            <div className='flex-grow text-4xl align-middle justify-center place-content-center'>
                <h5></h5>
            </div>
            {/* third block */}
            <div className='flex space-x-4 flex-grow justify-end'>
                <button variant="ghost" className='opacity-70 font-medium text-lg'>Log in</button>
                <button variant="ghost" className='opacity-70 font-medium text-lg  border-0 w-24 h-10 rounded-3xl bg-white shadow-lg'>Sign up</button>
            </div>
        </div>
        <div className='text-5xl absolute top-7 align-middle transform -mt-1 -translate-x-1/2 left-1/2 font-normal text-SiteName' style={{"fontFamily":"Inkfree"}}>
                <h5>todder</h5>
        </div>
    </nav>
  )
}
