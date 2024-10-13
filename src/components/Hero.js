import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
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
import plus from "../image/Frame 35.png"
// eslint-disable-next-line
import todder from "../image/todder.png"
import bgImage from "../image/Frame 40 .png"
export default function Hero() {

  const [openAccordion, setOpenAccordion] = useState([1]); // Keeps track of the currently open accordion
  const [ViewAll, setViewAll]=useState(false);

  const toggleAccordion = (index) => {
    setOpenAccordion([openAccordion,openAccordion.includes(index) ? -1 : index]);}
    const toggleAll = () => {
      setViewAll(!ViewAll);
      ViewAll===true?setOpenAccordion([1,2,3,4,5]):setOpenAccordion([1]);
    }
  return (
    <main className='relative'>
      {/*first block*/}
      <div className='w-full relative rounded-[79px] border-0 bg-BackgroundColor flex mx-auto overflow-hidden'>
        {/*LeftCorner */}
        <div className='h-fit w-auto left-0 top-0 z-10 '>
          <img src={LeftCorner} className='object-cover h-full' alt='LeftCorner'></img>
        </div>
        {/*RightCorner */}
        <div className='h-fit w-auto right-0 top-0 absolute z-10'>
          <img src={RightCorner} className='object-cover h-full' alt='RightCorner'></img>
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
          <div><button className='rounded-full text-SiteName bg-white w-24 h-9 m-0 shadow-lg relative' style={{"fontFamily":'InterRegular'}}><img src={point} className='absolute mt-2 ml-3 w-1/12' alt="point"></img><p className='ml-3'>Sign up</p></button></div>
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
                <img src={LeftCard} className='w-56' alt='LeftCard'></img>
              </div>
            </div>
            <div className='bg-white inline-grid grid-cols-[auto,auto] relative rounded-[40px] overflow-hidden shadow-lg'>
              <div className='text-center justify-center align-middle place-content-center w-[150px] mx-6'>
                <h1 className='mb-5 text-2xl text-SiteName font-bold' style={{"fontFamily":'InterRegular'}}>A Night Out</h1>
                <p className='text-SiteName text-sm'>Nothing should get in the way of the time you spend together, without  your kids, Our sitters make date night easy to pull off.</p>
              </div>
              <div className='justify-center align-middle place-content-center overflow-hidden'>
                <img src={RightCard} className='w-56' alt='RightCard'></img>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center align-middle bg-white mx-auto mt-16 rounded-[40px] overflow-hidden shadow-lg'>
            <div className='place-content-center'>
              <img src={BottomLeft} className='mx-14 w-56' alt='BottomLeft'></img>
            </div>
            <div className='text-center place-content-center w-[234px]'>
              <h1 className='text-3xl text-SiteName font-semibold mb-6' style={{"fontFamily":"InterRegular"}}>In a Pinch</h1>
              <p className='text-sm text-SiteName' style={{"fontFamily":"InterRegular"}}>Emergency? Sick nanny? No problem, we can help! We can fill requests with as little as two hours' notice.</p>
            </div>
            <div className='place-content-center'>
              <img src={BottomRight} className='mx-14 w-56' alt='BottomRight'></img>
            </div>
          </div>
        </div>
      </div>
      {/*seventh block */}
      <div className='flex flex-col justify-center align-middle place-content-center mx-52'>
        <div className='flex flex-row mb-10 mt-52'><h1 className='text-SiteName text-5xl font-bold flex-grow' style={{"fontFamily":"InterRegular"}}>Common questions</h1> <button className='rounded-full text-SiteName bg-button w-28 h-12 m-0' onClick={()=>{toggleAll();}}> <p className='text-sm font-semibold' style={{"fontFamily":"InterRegular"}}> view all FAQs</p></button></div>
        <div className='h-fit'>
        <div id="accordionExample">
      {/* Accordion Item 1 */}
      <div className={` shadow-lg bg-white mb-5 overflow-hidden ${openAccordion.includes(1)?"h-fit rounded-[35px]":"h-20 rounded-full"}  place-content-center`}>
        <h2 className="mb-0 mx-3" id="headingOne">
          <button
            className={`group relative flex w-full text-SiteName font-semibold items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white ${
              openAccordion.includes(1)
                ? 'bg-white text-primary shadow-border-b dark:bg-surface-dark dark:text-primary dark:shadow-white/10'
                : ''
            }`}
            type="button"
            onClick={() => toggleAccordion(1)}
            aria-expanded={openAccordion.includes(1)}
            aria-controls="collapseOne"
          >
            What is Todder?
            <span
              className={`-me-1 ms-auto h-9 w-9 shrink-0 transition-transform duration-200 ease-in-out ${
                !openAccordion.includes(1) ? 'rotate-0' : 'rotate-45'
              }`}
            >
              <img src={plus} className='w-full h-full' alt='plus'></img>
            </span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`px-5 py-4 ${openAccordion.includes(1) ? '!visible' : 'hidden'} mx-3`}
          aria-labelledby="headingOne"
        >
          <strong>This is the first item's accordion body.</strong> It is shown by default...
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className={`shadow-lg bg-white mb-5 overflow-hidden ${openAccordion.includes (2)?"h-fit rounded-[35px]":"h-20 rounded-full"}  place-content-center`}>
        <h2 className="mb-0 mx-3" id="headingTwo">
          <button
            className={`group relative flex w-full text-SiteName font-semibold items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white ${
              openAccordion.includes (2)
                ? 'bg-white text-primary shadow-border-b dark:bg-surface-dark dark:text-primary dark:shadow-white/10'
                : ''
            }`}
            type="button"
            onClick={() => toggleAccordion(2)}
            aria-expanded={openAccordion.includes (2)}
            aria-controls="collapseTwo"
          >
            How is Todder different from other childecare options?
            <span
              className={`-me-1 ms-auto h-9 w-9 shrink-0 transition-transform duration-200 ease-in-out ${
                !openAccordion.includes (2) ? 'rotate-0' : 'rotate-45'
              }`}
            >
              <img src={plus} className='w-full h-full' alt='plus'></img>
            </span>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`px-5 py-4 ${openAccordion.includes (2) ? '!visible' : 'hidden'} mx-3`}
          aria-labelledby="headingTwo"
        >
          <strong>This is the second item's accordion body.</strong> It is hidden by default...
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className={`shadow-lg bg-white mb-5 overflow-hidden ${openAccordion.includes (3)?"h-fit rounded-[35px]":"h-20 rounded-full"}  place-content-center`}>
        <h2 className="mb-0 mx-3" id="headingThree">
          <button
            className={`group relative flex w-full text-SiteName font-semibold items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white ${
              openAccordion.includes (3)
                ? 'bg-white text-primary shadow-border-b dark:bg-surface-dark dark:text-primary dark:shadow-white/10'
                : ''
            }`}
            type="button"
            onClick={() => toggleAccordion(3)}
            aria-expanded={openAccordion.includes (3)}
            aria-controls="collapseThree"
          >
            Does Todder offer last-minute backup care?
            <span
              className={`-me-1 ms-auto h-9 w-9 shrink-0  transition-transform duration-200 ease-in-out ${
                !openAccordion.includes (3) ? 'rotate-0' : 'rotate-45'
              }`}
            >
              <img src={plus} className='w-full h-full' alt='plus'></img>
            </span>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`px-5 py-4 ${openAccordion.includes (3) ? '!visible' : 'hidden'} mx-3`}
          aria-labelledby="headingThree"
        >
          <strong>This is the third item's accordion body.</strong> It is hidden by default...
        </div>
      </div>
      {/* Accordion Item 4 */}
      <div className={`shadow-lg bg-white mb-5 overflow-hidden ${openAccordion.includes (4)?"h-fit rounded-[35px]":"h-20 rounded-full"}  place-content-center`}>
        <h2 className="mb-0 mx-3" id="headingThree">
          <button
            className={`group relative flex w-full text-SiteName font-semibold items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white ${
              openAccordion.includes (4)
                ? 'bg-white text-primary shadow-border-b dark:bg-surface-dark dark:text-primary dark:shadow-white/10'
                : ''
            }`}
            type="button"
            onClick={() => toggleAccordion(4)}
            aria-expanded={openAccordion.includes (4)}
            aria-controls="collapseThree"
          >
            How are Todders sitters vetted?
            <span
              className={`-me-1 ms-auto h-9 w-9 shrink-0 transition-transform duration-200 ease-in-out ${
                !openAccordion.includes (4) ? 'rotate-0' : 'rotate-45'
              }`}
            >
              <img src={plus} className='w-full h-full' alt='plus'></img>
            </span>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`px-5 py-4 ${openAccordion.includes (4) ? '!visible' : 'hidden'} mx-3`}
          aria-labelledby="headingThree"
        >
          <strong>This is the third item's accordion body.</strong> It is hidden by default...
        </div>
      </div>
      {/* Accordion Item 5 */}
      <div className={`shadow-lg bg-white mb-5 overflow-hidden ${openAccordion.includes (5)?"h-fit rounded-[35px]":"h-20 rounded-full"}  place-content-center`}>
        <h2 className="mb-0 mx-3" id="headingThree">
          <button
            className={`group relative flex w-full text-SiteName font-semibold items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white ${
              openAccordion.includes (5)
                ? 'bg-white text-primary shadow-border-b dark:bg-surface-dark dark:text-primary dark:shadow-white/10'
                : ''
            }`}
            type="button"
            onClick={() => toggleAccordion(5)}
            aria-expanded={openAccordion.includes (5)}
            aria-controls="collapseThree"
          >
            Where is Todder available?
            <span
              className={`-me-1 ms-auto h-9 w-9 shrink-0 transition-transform duration-200 ease-in-out ${
                !openAccordion.includes (5) ? 'rotate-0' : 'rotate-45'
              }`}
            >
              <img src={plus} className='w-full h-full' alt='plus'></img>
            </span>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`px-5 py-4 ${openAccordion.includes (5) ? '!visible' : 'hidden'} mx-3`}
          aria-labelledby="headingThree"
        >
          <strong>This is the third item's accordion body.</strong> It is hidden by default...
        </div>
      </div>
      </div>
        </div>
      </div>
      {/*Last block */}
      <div className='flex flex-col lg:flex-row mt-32 mb-20 gap-10 place-content-center px-4'>
  <div className='flex flex-col justify-center items-start space-y-3'>
    <div className='relative w-full lg:w-96'>
      <img src={bgImage} className='w-full' alt="bgImage"></img>
      <div className='absolute left-4 top-0 lg:left-9'>
        <h1 className='mt-12 text-white text-2xl lg:text-4xl font-bold' style={{"fontFamily":"InterRegular"}}>
          The bright side<br /> of kidcare
        </h1>
        <p className='text-white text-md lg:text-xl mt-6 leading-relaxed' style={{"fontFamily":"InterRegular"}}>
          Get reliable on demand<br /> childcare from vetted sitters<br /> in<br /> your community.
        </p>
        <button className='bg-button rounded-full w-28 h-10 mt-4 font-semibold text-sm' style={{"fontFamily":"InterRegular"}}>
          Get Started
        </button>
      </div>
    </div>
  </div>

  <div className='w-full relative rounded-[30px] flex overflow-visible'>
    <div className='grid grid-rows-[auto,auto] w-full space-y-3 bg-white rounded-[30px] top-0 overflow-hidden shadow-lg'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-auto text-lg font-semibold gap-5 '>
        <div className='flex flex-col space-y-5 pt-5 pl-5'>
          <Link to={"/"}>Parents</Link>
          <Link to={"/"}>Sitters</Link>
          <Link to={"/"} className='w-32'>Trust & Safety</Link>
        </div>
        <div className='flex flex-col space-y-5 pt-5'>
          <Link to={"/"}>FAQ</Link>
          <Link to={"/"}>Careers</Link>
          <Link to={"/"}>Blog</Link>
          <Link to={"/"}>Contact</Link>
        </div>
        <div className='flex flex-col space-y-5 pt-5'>
          <Link to={"/"}>Instagram</Link>
          <Link to={"/"}>Facebook</Link>
          <Link to={"/"}>Twitter</Link>
          <Link to={"/"}>LinkedIn</Link>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <img src={todder} alt='logo' className='w-full' />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-lg font-semibold p-5' style={{"fontFamily":"InterRegular"}}>
        <div>
          <h1>2023 With Todder Inc.</h1>
        </div>
        <div className='text-sm flex justify-center sm:justify-end'>
          <h1>Terms of Use <span className='text-xs'>●</span> Privacy Policy</h1>
        </div>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}
