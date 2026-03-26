import React, { useEffect, useState } from 'react';
import AllApps from '../AllApps/AllApps';
import { useLoaderData } from 'react-router';
import Logo from "../../assets/logo.png"

const Apps = () => {
    const data = useLoaderData();
    // console.log(data);

    // loading
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() =>{
            setLoading(false);
        }, 200)
    })


    // loading
    if(loading){
            return(
                <div className='flex flex-col justify-center items-center h-screen'>
                    <img className='w-16 animate-spin mb-4' src={Logo} alt='Loading...'></img>
                    <p className='text-gray-600 font-nomal text-lg animate-pulse'>Loading Installation.....</p>
                </div>
            );
        }
    return (
        <div> 
            <div className='text-center items-center py-8'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-black md:mt-10'>Our All Applications</h1>
                <p className='font-normal text-sm text-gray-500 pt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <AllApps data={data}></AllApps>
        </div>
    );
};

export default Apps;