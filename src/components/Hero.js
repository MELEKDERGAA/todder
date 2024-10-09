import React from 'react'
import LeftCorner from "../image/Left corner.png"
import RightCorner from "../image/Right corner.png"
import FatherKid from "../image/FatherKid.png"
import point from "../image/point.png"
import Carousel from './CursorCarousel'
import AutoScrollInfiniteImages from './InfiniteScrollImage'
import LeftCard from "../image/LeftCard.png"
import RightCard from "../image/RightCard.png"
import BottomLeft from "../image/BottomLeft.png"
import BottomRight from "../image/BottomRight.png"
export default function Hero() {
  return (
    <main className='relative'>
      {/*first block*/}
      <div className='container relative rounded-[79px] border-0 bg-BackgroundColor flex mx-auto overflow-hidden'>
        {/*LeftCorner */}
        <div className='h-fit w-auto left-0 top-0 z-10 '>
          <img src={LeftCorner} className='object-cover h-full'></img>
        </div>
        {/*RightCorner */}
        <div className='h-fit w-auto right-0 top-0 absolute z-10'>
          <img src={RightCorner} className='object-cover h-full'></img>
        </div>
        
      </div>
      {/*second block */}
      <div className='flex flex-col justify-center items-center align-middle text-center space-y-6 place-content-center absolute z-20 top-52 left-1/2 -ml-96 '>
          <h5 className='text-8xl text-white' style={{"fontFamily":"SourceSerifBlack"}}>Reliable kidcare<br></br>
          on demand</h5>
          <p className='text-white text-3xl' style={{"fontFamily":'InterRegular'}}>todder matches parents who need care with<br></br> trusted sitters in their community, on<br></br> demand</p>
          <div><button className='rounded-full text-SiteName bg-button w-28 h-12 m-0'> <p className='text-xl' style={{"fontFamily":"InterRegular"}}> Sign up</p></button></div>
      </div>
      {/*third block */}
      <div className=' grid grid-cols-2 my-44 gap-10'>
        <div className='flex flex-col justify-center items-start ml-9 space-y-3'>
          <h1 style={{"fontFamily":'InterRegular'}} className='text-xl text-SiteName'>how it work</h1>
          <h5 style={{"fontFamily":'InterRegular'}} className='font-semibold text-7xl text-SiteName'>We help  families find reliable,<br></br> flexible kidcare</h5>
          <p style={{"fontFamily":'InterRegular'}} className='text-3xl text-SiteName'>We’ll  match you with sitters based on your family’s needs and their availability</p>
          <div><button className='rounded-full text-SiteName bg-white w-24 h-9 m-0 shadow-lg relative' style={{"fontFamily":'InterRegular'}}><img src={point} className='absolute mt-2 ml-3 w-1/12'></img><p className='ml-3'>Sign up</p></button></div>
          <div><button className='rounded-full text-SiteName bg-white w-28 h-9 m-0 shadow-lg' style={{"fontFamily":'InterRegular'}}><p>Book a sitter</p></button></div>
          <div><button className='rounded-full text-SiteName bg-white w-36 h-9 m-0 shadow-lg' style={{"fontFamily":'InterRegular'}}><p>Get a care & pay</p></button></div>
        </div>
        <div className="flex justify-center items-center my-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-sm w-full">
            <div className="p-4 pb-0">
              <img
                src={FatherKid}
                alt="Parent and child doing an activity together"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="p-4 pt-2 text-sm text-gray-600 text-center mb-9">
              We take to keep it safe for all. All personal contact information, and info about your kids, is kept private until you're all set.
            </div>
          </div>
        </div>
      </div>
      {/*forth block */}
      <div className='flex flex-col space-y-14'>
        <div className='flex flex-col justify-center items-center align-middle space-y-2'>
          <h5 className='text-xs text-SiteName' style={{"fontFamily":"InterRegular"}}>TESTIMONIAL</h5>
          <h1 className='text-5xl text-SiteName font-semibold' style={{"fontFamily":"InterRegular"}}>Feedbacks</h1>
          <p className='text-xl text-black' style={{"fontFamily":"InterRegular"}}>Todder sitters step in when things come up.</p>
        </div>
        <div>
          <Carousel/>
        </div>
      </div>
      {/*fifth block */}
      <div className='flex justify-start text-center flex-row mt-44 mx-9 rounded-[30px] bg-scrollanimationbg place-content-center align-middle'>
        <div className='my-10 ml-20 w-fit'>
          <h1 style={{"fontFamily":'InterRegular'}}>AS FEATURED IN</h1>
        </div>
        <div className='flex justify-center w-[950px] h-full mx-auto my-auto bg-scrollanimationbg rounded-lg overflow-hidden relative'>
          <div className="absolute inset-y-0 left-0 w-16 h-24 bg-gradient-to-r from-scrollanimationbg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-scrollanimationbg to-transparent z-10 pointer-events-none"></div>
          <AutoScrollInfiniteImages/>
        </div>
      </div>
      {/*sixth block */}
      <div className='flex flex-col space-y-14 mt-44'>
        <div className='flex flex-col justify-center items-center align-middle space-y-6 text-center'>
          <h5 className='text-xs text-SiteName' style={{"fontFamily":"InterRegular"}}>WHY OFFER?</h5>
          <h1 className='text-5xl text-SiteName font-semibold' style={{"fontFamily":"InterRegular"}}>We pop in so you<br></br>
          can pop out</h1>
          <p className='text-xl text-black' style={{"fontFamily":"InterRegular"}}>Making the impossible things about<br></br>
          childcare possible</p>
        </div>
        <div className='grid grid-rows-2'>
          <div className='grid grid-cols-2 gap-16 mx-auto'>
            <div className='bg-white inline-grid grid-cols-[auto,auto] relative rounded-[40px] shadow-lg'>
              <div className='text-center justify-center align-middle place-content-center w-[150px] mx-6'>
                <h1 className='mb-5 text-2xl text-SiteName font-bold' style={{"fontFamily":'InterRegular'}}>Looking
                Ahead</h1>
                <p className='text-SiteName text-sm'>Look at you being so ahead of the game. We can book childcare up to a month outwe look forward to seeing you then.</p>
              </div>
              <div className='justify-center align-middle place-content-center'>
                <img src={LeftCard} className='w-56'></img>
              </div>
            </div>
            <div className='bg-white inline-grid grid-cols-[auto,auto] relative rounded-[40px] overflow-hidden shadow-lg'>
              <div className='text-center justify-center align-middle place-content-center w-[150px] mx-6'>
                <h1 className='mb-5 text-2xl text-SiteName font-bold' style={{"fontFamily":'InterRegular'}}>A Night Out</h1>
                <p className='text-SiteName text-sm'>Nothing should get in the way of the time you spend together, without  your kids, Our sitters make date night easy to pull off.</p>
              </div>
              <div className='justify-center align-middle place-content-center overflow-hidden'>
                <img src={RightCard} className='w-56'></img>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center align-middle bg-white mx-auto mt-16 rounded-[40px] overflow-hidden shadow-lg'>
            <div className='place-content-center'>
              <img src={BottomLeft} className='mx-14 w-56'></img>
            </div>
            <div className='text-center place-content-center w-[234px]'>
              <h1 className='text-3xl text-SiteName font-semibold mb-6' style={{"fontFamily":"InterRegular"}}>In a Pinch</h1>
              <p className='text-sm text-SiteName' style={{"fontFamily":"InterRegular"}}>Emergency? Sick nanny? No problem, we can help! We can fill requests with as little as two hours' notice.</p>
            </div>
            <div className='place-content-center'>
              <img src={BottomRight} className='mx-14 w-56'></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
