import React, { useEffect, useState } from 'react';
import AllApps from '../AllApps/AllApps';
import { Link, useLoaderData } from 'react-router';
import Logo from "../../assets/logo.png"
import App from "../../assets/App-Error.png"

const Apps = () => {
    const data = useLoaderData();
    // console.log(data);

    const [search, setSearch] = useState("");

    // loading
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() =>{
            setLoading(false);
        }, 200)
    },[])


    // loading
    if(loading){
            return(
                <div className='flex flex-col justify-center items-center h-screen'>
                    <img className='w-16 animate-spin mb-4' src={Logo} alt='Loading...'></img>
                    <p className='text-gray-600 font-nomal text-lg animate-pulse'>Loading Apps.....</p>
                </div>
            );
        }

        const filteredData = data. filter(app =>
            app.title.toLowerCase(). includes(search.toLowerCase())
        );
    return (
        <div className='pt-15 '> 
            <div className='text-center items-center py-8'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-black md:mt-10'>Our All Applications</h1>
                <p className='font-normal text-sm text-gray-500 pt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            
            <div className=' md:flex md:justify-between items-center w-11/12 mx-auto space-y-3 sm:px-10'>
                
                    <h1 className='text-black font-bold text-2xl text-center'>Total Apps -({filteredData.length}) </h1>
                    <input type="search" placeholder='Search...' value={search} onChange={
                        (e) => setSearch (e.target.value)
                    } className='w-full mx-auto md:mx-0 md:w-3xs  border border-black text-black rounded-3xl tex px-5 py-2' /> 
           
            </div>

            {/* search filterData */}

            {
                filteredData.length > 0 ? (
                    <AllApps data={filteredData}></AllApps>
                ) : ( 

                    // <h1 className='font-extrabold text-5xl text-purple-600 text-center items-center pt-10 h-screen'>
                    //     App Not Found
                    // </h1>
                  
                    
                      <div className='flex flex-col justify-center items-center gap-6 h-screen'>

                        <img className='w-96' src={App} alt="App-error" />

                        <h1 className='font-extrabold text-5xl text-purple-600 text-center items-center pt-10 '>
                             App Not Found
                        </h1>
                        {/* <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white" href="/Apps">Go Back!</a> */}
                        <Link to="/" className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white">
                            Go Back!
                        </Link>
                      </div>
                    
                    
                )
            }
            {/* <AllApps data={data}></AllApps>  */}
        </div>
    );
};

export default Apps;