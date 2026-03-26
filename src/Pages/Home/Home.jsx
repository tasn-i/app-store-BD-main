import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
;
import Logo from "../../assets/logo.png"



const Home = () => {

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
        <div className='bg-white pt-10'>
            <Banner></Banner>
            
            
            
        </div>
    );
};

export default Home;