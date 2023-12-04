import React,{useState} from 'react';
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import {FaAngry, FaBars,  FaTimes} from 'react-icons/fa'
import rd from './imags/road.png'
import city from './imags/city.png'
import index from './imags/index.png'
import feed from './imags/feed.png'
import user from './imags/users.png'
import dist from './imags/dist.png'
import vid from './imags/RoadVideo.mp4'


function LoginPage() {
    const  [nav,setNav]= useState(false);
    const DataTable = ({ data }) => {
      const [rowsToShow, setRowsToShow] = useState(5); 
    
      const handleShowMore = () => {
        setRowsToShow(rowsToShow + 5); 
      };
      const handleShowLess = () => {
        setRowsToShow(rowsToShow - 5);
      };
      const initialData = [
        { id: 1, name: 'Bailey Road', City: 'Patna',District: 'Patna' },
        { id: 2, name: 'Cold store road', City: 'Begusarai',District: 'Begusarai' },
        { id: 3, name: 'Bhagwan bazar road', City: 'Chhapra',District: 'Saran' },
        { id: 4, name: 'Gola Road', City: 'Patna',District: 'Patna' },
        { id: 5, name: 'Masjid Street', City: 'Siwan',District: 'Saran' },
        { id: 6, name: 'Boring Road', City: 'Patna',District: 'Patna' },
        { id: 7, name: 'Mansurchak Rd', City: 'Begusarai',District: 'Begusarai' },
        { id: 8, name: 'Bakarganj Road', City: 'Patna',District: 'Patna' },
        { id: 9, name: 'Birchand patel path ', City: 'Patna',District: 'Patna' },
        { id: 10, name: 'Boring kanal road ', City: 'Patna',District: 'Patna' },
        { id: 11, name: 'Exhibition road ', City: 'Patna',District: 'Patna' },
        { id: 12, name: 'Munciple Road', City: 'Chhapra',District: 'Saran' },
        { id: 13, name: 'Frazer road ', City: 'Patna',District: 'Patna' },
        { id: 14, name: 'Khagaul road', City: 'Patna',District: 'Patna' },
        { id: 15, name: 'Kalwari Road', City: 'Muzzafarpur',District: 'Muzzafarpur' },
        { id: 16, name: 'Gandhi Road', City: 'Patna',District: 'Patna' },
        { id: 17, name: 'Gandhi Chowk', City: 'Chhapar',District: 'Saran' },
        { id: 18, name: 'Jamal road ', City: 'Patna',District: 'Patna' },
      ];
    
    return (
      
      <div>
        <div className="flex justify-between items-center w-full h-20  bg-gradient-to-r from-teal-800 to bg-emerald-800 fixed px-4  top-0 ">
          
            <p className="text-3xl pb-6 text-orange-100  font-raleway font-extrabold mt-5 drop-shadow-2xl" >Drive<span className='text-4xl'>G</span>uard </p>
          
          <ul className="md:flex hidden justify-end ">
            <li className=" font-raleway px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link to='Overview' smooth duration={500}>Overview</Link></li>
            <li className=" font-raleway px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link to='Roads' smooth duration={500}>Road</Link></li>
            <li className=" font-raleway px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link to='Analysis' smooth duration={500}>Analysis</Link></li>
            <li className=" font-raleway px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link to='About' smooth duration={500}>About Us</Link></li>
            <li><button className="  bg-blue-500 hover:bg-lime-300 rounded-xl text-white font-extrabold mr-2 p-1 text-center text-md px-8  ml-2 hover:scale-110 duration-200 cursor-pointer hover:text-zinc-800"><Link to='Login' smooth duration={500}>SignOut</ Link></button></li>
          </ul>
          <div onClick={()=> setNav(!nav)} className="cursor-pointer md:hidden z-4  text-orange-100  pr-4 right-0">
          
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          
          <ul className="flex flex-col backdrop-blur-3xl justify-center items-center   absolute top-20 right-0 w-full h-screen md:hidden">
            <li className=" px-3 text-3xl mb-4 text-emerald-800 font-bold hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link onClick={() => setNav(!nav)} to='Overview' smooth duration={500}>Overview</Link></li>
            <li className=" px-3 text-3xl mb-4 text-emerald-800 font-bold hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link onClick={() => setNav(!nav)} to='Roads' smooth duration={500}>Roads</Link></li>
            <li className=" px-3 text-3xl mb-4 text-emerald-800 font-bold hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link onClick={() => setNav(!nav)} to='Analysis' smooth duration={500}>Analysis</Link></li>
            <li className=" px-3 text-3xl mb-4 text-emerald-800 font-bold hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link onClick={() => setNav(!nav)} to='About' smooth duration={500}>About Us</Link></li>
            <li className=" px-3 text-3xl mb-4 text-emerald-800 font-bold hover:scale-110 duration-200 cursor-pointer hover:text-lime-300"><Link onClick={() => setNav(!nav)} to='Login' smooth duration={500}>SignOut</Link></li>
          </ul>
        )}

        </div>
        <div name='Overview' className='  bg-gradient-to-r from-white to-green-100 pt-20 pr-28 '>
          <div className='mx-auto p-4 flex flex-col  items-center w-full h-full '>
              <div>
                  <p className=' font-headd font-extrabold text-5xl mt-6 text-emerald-800 '>Overview</p>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 lg:grid-cols-3 w-full '>   
                  <div className='pl-3 pr-3 pt-2 ml-20 mb-20 bg-gray-300  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-xl font-bold'><img  className='w-18 h-12 mb-5 ' src={dist}></img>Over 2000 kms covered </p></center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-20 mb-20  bg-blue-300  shadow-md shadow-blue-500 hover:scale-110 duration-200'>
                      <center><p className='mt-1 text-xl font-bold '><img  className='w-18 h-14 mb-1 ' src={city}></img>35 Districts </p>
                      <p className='text-xl font-bold mb-2'>130 cities covered</p>
                      </center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-20 mb-20  bg-red-300  shadow-md shadow-red-500 hover:scale-110 duration-200'>
                      <center><p className='mt-1 text-xl font-bold '><img  className='w-16 h-14 mb-1 ' src={index}></img>50% </p>
                      <p className=' text-xl font-bold mb-3'>Road Quality Index</p></center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-20 mb-20   bg-teal-300  shadow-md shadow-teal-500  hover:scale-110 duration-200'>
                      <center>
                        <p className='mt-1 text-xl font-bold '><img  className='w-16 h-14 mb-1 ' src={feed}></img>5000+ </p>
                        <p className=' text-xl font-bold mb-4'>Feedbacks and Suggestions</p>
                      </center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-20  mb-20 bg-purple-300  shadow-md shadow-purple-500 hover:scale-110 duration-200'>
                      <center>
                        <p className='mt-1 text-xl font-bold '><img  className='w-14 h-14 mb-1 mt-4 ' src={user}></img>1000+ registered users </p>
                        
                      </center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-20  mb-20  bg-yellow-100  shadow-md shadow-yellow-300 hover:scale-110 duration-200'>
                  <center>
                        <p className='mt-1 text-xl font-bold '><img  className='w-10 h-10 mb-1 mt-4 ' src={rd}></img>50 National </p>
                        <p className=' text-xl font-bold mb-3'>highways covered</p>
                      </center>
                  </div>
              </div>
            </div>
        </div>
        <div name='Roads' className='bg-gradient-to-r from-white to-green-100 pb-10  '>
              <div>
                  <center><p className='  font-headd font-extrabold text-5xl mb-5 text-emerald-800 '>Road</p></center>
                  <center><p className=' font-extrabold text-2xl  text-emerald-800 '>Search the roads here</p></center>
              </div> 
              <div className=' flex flex-col items-center  overflow-hidden'>
                  
                    <table className='w-4/5 mt-10 table-auto border border-collapse border-gray-800'>
                      <thead className='bg-gradient-to-l from-green-700 to-teal-900 text-white'>
                        <tr>
                          <th className='py-2 px-4'>Road Name</th>
                          <th className='py-2 px-4'>City</th>
                          <th className='py-2 px-4 hidden sm:block'>District</th>
                          <th className='py-2 px-4'>Search</th>
                        </tr>
                      </thead>
                      <tbody>
                        {initialData.slice(0, rowsToShow).map((user) => (
                          <tr key={user.id} className='bg-lime-100 hover:bg-lime-300'>
                            <td className='py-2 px-4'>{user.name}</td>
                            <td className='py-2 px-4'>{user.City}</td>
                            <td className='py-2 px-4 hidden sm:block'>{user.District}</td>
                            <td className='py-2 px-4'><button className='bg-blue-500 text-white hover:scale-110 duration-200 hover:bg-red-400 py-1 px-2 rounded-lg'>Search</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className='mt-4'>
                      <button onClick={handleShowMore} className='hover:scale-110 duration-200 bg-gradient-to-r from-gray-900 to-slate-600 text-white py-2 px-4 rounded-lg mr-2'>
                        Show More
                      </button>
                      {rowsToShow > 5 && (
                        <button onClick={handleShowLess} className='hover:scale-110 duration-200 bg-gradient-to-l from-gray-900 to-slate-600 text-white py-2 px-4 rounded-lg '>
                          Show Less
                        </button>
                      )}
                    </div>
                  
            </div>

            <div className='flex flex-col items-center mt-8'>
              <p className='font-extrabold text-2xl  text-emerald-800 mb-6 '>Location on the Map</p>
              <div className='flex flex-col items-center align-middle w-4/5  border-4  border-emerald-800'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147
                    200.78339801382!2d85.02776993217155!3d25.601888003334384!2m3!1f0!2f0!3
                    f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f6
                    07b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000672321!5m2!1sen!2sin"
                    className='w-full ' height='450' allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
              
        </div>
        <div name='Analysis' className='bg-gradient-to-r from-white to-green-100'>
              <div>
                  <center><p className='  font-headd font-extrabold text-5xl  text-emerald-800 '>Analysis</p></center>
              </div> 
              <div className='grid md:grid-cols-3 w-full mt-10 grid-cols-1 '>
                  <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-2xl font-bold'>Road Name </p></center>
                      <center><p className='mt-2 text-xl font-medium'>Bailey Road </p></center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-2xl font-bold'> Road Length </p></center>
                      <center><p className='mt-2 text-xl font-medium'>14 Km </p></center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-10  mr-10 mb-20 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-2xl font-bold'>GPS Coordinates </p></center>
                      <center><p className='mt-2 text-xl font-medium'>25.6054183 , 85.0839307 </p></center>
                  </div>
              </div>
              {/* <div className='flex flex-col items-center  ml-6 mr-6 '>
                <div className='bg-red-200 w-4/5 flex flex-col items-center shadow-md mb-10 shadow-gray-600 hover:scale-105 duration-200'>
                <p className='mt-4 text-4xl font-bold'>Video </p>
                  <video className='w-3/4 h-2/3 mt-6 mb-6 rounded-lg' controls>
                    <source src={vid} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>  
              </div> */}
              <div className='grid md:grid-cols-3 w-full mt-10 grid-cols-1 '>
                  <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-6 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-2xl font-bold'>Last Updated </p></center>
                      <center><p className='mt-2 text-xl font-medium'>20-08-2023 </p></center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-10 mr-10 mb-6 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-2xl font-bold'> Average Rating </p></center>
                      <center><p className='mt-2 text-xl font-medium'>4</p></center>
                  </div>
                  <div className='pl-3 pr-3 pt-2 ml-10  mr-10 mb-6 pb-8 bg-red-200  shadow-md shadow-gray-600 hover:scale-110 duration-200'>
                      <center><p className='mt-2 text-2xl font-bold'> Road Condition</p></center>
                      <center><p className='mt-2 text-xl font-medium'>Good</p></center>
                  </div>
              </div>
              <div className='pb-10'>
                <center>
                <center><p className='mt-2 text-2xl font-bold hover:scale-110 duration-200'> For All Details <span className='   text-emerald-800 hover:text-lime-300 cursor-pointer '><RouterLink  to='/analysis' smooth duration={500}>Click Here</RouterLink></span></p></center>
                </center>
              </div>

        </div>
        <div name='About' className='bg-gradient-to-r from-white to-green-100 '>
                <div className='text-center'>
                    <p className='font-headd font-extrabold text-5xl text-emerald-800 mb-10'>About Us</p>
                    <p className='text-xl font-raleway font-normal text-emerald-900 mx-auto pl-10 pr-10 pb-10 max-w-3xl leading-relaxed tracking-wider'>
                        At Drive<span className='text-2xl'>G</span>uard , our mission is to improve the road quality and safety. We are a dedicated team of individuals passionate about making a positive impact on the infrastructure and lives of those who rely on Bihar's roads every day. Whether you're a concerned citizen, a government representative, or an organization with a shared vision, we invite you to join us in our mission. Together, we can build a road network that ensures safe and seamless journeys for everyone in Bihar.
                    </p>
                  </div>
        </div>
        <footer className="bg-gradient-to-r from-teal-800 to bg-emerald-800 h-20 text-orange-100  rounded-t-lg">
          <center className='text-xl font-bold tracking-wider '>For Querry, Complaint or Suggestions  </center>
          <center> Contact Us: +91 9876543210  </center>
          <center>Mail: DriveGuard@gmail.com </center>
        </footer>
        
      </div>
    );
    };
    return<DataTable />;
  }
  
  
  export default LoginPage;
  