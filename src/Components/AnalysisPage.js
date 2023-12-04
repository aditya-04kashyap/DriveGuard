  import React, { useState } from 'react';
  import { Link } from 'react-scroll';
  import { Link as RouterLink } from 'react-router-dom';
  import { FaAngry, FaBars, FaTimes } from 'react-icons/fa';
  import one from './imags/br1.png';
  import two from './imags/br2.png';
  import three from './imags/br3.png';
  import four from './imags/br4.png';
  import five from './imags/br5.png';
  import vid from './imags/RoadVideo.mp4'

  const Rating = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };

    return (
      <center><div className="text-4xl">
        <h2 className="text-zinc-800 text-2xl font-bold ">Leave a Rating</h2>
        <div className=''>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRatingChange(star)}
              style={{ cursor: 'pointer', color: star <= rating ? 'blue' : 'gray' }}
              
            >
              ★
            </span>
          ))}
        </div>
        <p className='text-xl font-medium'>Selected Rating: {rating}</p>
      </div>
      </center>
    );
  };

  function AnalysisPage() {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const photos = [one, two, three, four, five];

    const nextPhoto = () => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };
    const prevPhoto = () => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
      <div>
        <div className="flex justify-between items-center w-full h-20 bg-gradient-to-r from-teal-800 to bg-emerald-800 fixed px-4 top-0">
          <p className="text-3xl pb-6 text-orange-100 font-raleway font-extrabold mt-5 drop-shadow-2xl">Drive<span className='text-4xl'>G</span>uard  </p>
          <ul className="flex flex-col justify-end">
            <li>
              <button className="bg-blue-500 hover:bg-lime-300 rounded-xl text-white font-extrabold mr-2 p-1 text-center text-md px-8 ml-2 hover:scale-110 duration-200 cursor-pointer hover:text-zinc-800">
                <Link to="Login" smooth duration={500}>
                  SignOut
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div name="Analysis" className="bg-gradient-to-r from-white to-green-100 pt-24">
          <div>
            <p className="hover:scale-105 duration-200 ml-4">
              <RouterLink to="/" className="ml-4 text-emerald-800 hover:text-lime-500">
                Go to Home
              </RouterLink>
            </p>
          </div>
          <div>
            <center>
              <p className="font-headd font-extrabold text-4xl sm:text-5xl text-emerald-800 mt-4">Detailed Analysis Report</p>
            </center>
          </div>
          <div className="grid md:grid-cols-2 w-full mt-10 grid-cols-1">
                    <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'>Full Name </p></center>
                        <center><p className='mt-2 text-xl font-medium'>Jawaharlal Nehru Path </p></center>
                    </div>
                    <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'> Road Length </p></center>
                        <center><p className='mt-2 text-xl font-medium'>14 Km </p></center>
                    </div>
                    <div className='pl-3 pr-3 pt-2 ml-10  mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'>GPS Coordinates </p></center>
                        <center><p className='mt-2 text-xl font-medium'>25.6054183 , 85.0839307 </p></center>
                    </div>
                    <div className='pl-3 pr-3 pt-2 ml-10  mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'>Type Of Road</p></center>
                        <center><p className='mt-2 text-xl font-medium'>Main Road </p></center>
                    </div>

                    <div className='pl-3 pr-3 pt-2 ml-10  mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'>Last Updated </p></center>
                        <center><p className='mt-2 text-xl font-medium'>20/08/2023 </p></center>
                    </div>
                    <div className='pl-3 pr-3 pt-2 ml-10  mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'>Road Condition </p></center>
                        <center><p className='mt-2 text-xl font-medium'>Good </p></center>
                    </div>
            </div>
            <div className=''>
              <center>
              <div className='pl-3 pr-3 pt-2 ml-10  mr-10  pb-8 bg-red-200 w-auto sm:w-2/3 shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                          <center>
                          <div className="mt-6 ">
                              <h2 className="text-3xl font-bold mb-4 text-zinc-800">Photo Gallery</h2>
                              <div>
                                <img  className='  hover:scale-150 duration-200 h-auto sm:h-60 lg:h-72 w-2/3 border-4 border-emerald-800' src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} style={{ maxWidth: '100%' }} />
                                <div className="flex justify-between mt-2">
                                  <button
                                    onClick={prevPhoto}
                                    className="bg-blue-500 hover:bg-lime-300 rounded-xl text-white font-extrabold p-1 text-center text-md px-4 hover:scale-110 duration-200 cursor-pointer "
                                  >
                                    Previous
                                  </button>
                                  <button
                                    onClick={nextPhoto}
                                    className="bg-blue-500 hover:bg-lime-300 rounded-xl text-white font-extrabold p-1 text-center text-md px-4 hover:scale-110 duration-200 cursor-pointer"
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </div>

                          </center>                   
                 </div>
                </center>
                <div className='flex flex-col items-center   '>
                  <div className='bg-red-200 w-2/3 flex  pr-3 pl-3 flex-col items-center shadow-md mb-10 mt-20  shadow-gray-600 '>
                  <p className='mt-4 text-4xl font-bold'>Video </p>
                    <video className='w-3/4 h-2/3 mt-6 mb-6 rounded-lg' controls>
                      <source src={vid} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                  </div>  
                </div>
                <div className='flex flex-col items-center mt-8'>
                  <p className='font-extrabold text-2xl  text-emerald-800 mb-6 '>Location on the Map</p>
                  <div className='flex flex-col items-center align-middle w-auto sm:w-2/3  border-4 mb-4  border-emerald-800'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147
                        200.78339801382!2d85.02776993217155!3d25.601888003334384!2m3!1f0!2f0!3
                        f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f6
                        07b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000672321!5m2!1sen!2sin"
                        className='w-full ' height='450' allowfullscreen="" loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
               </div>
               <div className='grid md:grid-cols-2 w-full mt-10 grid-cols-1'>
                    <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <center><p className='mt-2 text-2xl font-bold'>Average Rating </p></center>
                        <center><p className='mt-2 text-xl font-medium'>4 </p></center>
                    </div>
                    <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-105 duration-200'>
                        <Rating />
                    </div>

               </div>
            </div>
            
        </div>
        <footer className="bg-gradient-to-r from-teal-800 to bg-emerald-800 h-20 text-orange-100  rounded-t-lg">
          <center className='text-xl font-bold tracking-wider '>For Querry, Complaint or Suggestions  </center>
          <center> Contact Us: +91 9876543210  </center>
          <center>Mail: DriveGuard@gmail.com </center>
        </footer>
      </div>
    );
  }

  export default AnalysisPage;
