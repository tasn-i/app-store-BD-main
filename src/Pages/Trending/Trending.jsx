import React from 'react';
import { useLoaderData } from 'react-router';
// import { Link } from 'react-router';
import AllApps from "../AllApps/AllApps"

const Trending = () => {
    const data = useLoaderData();

    const trendingApps = data.slice( 0, 8 );

    return (
        <div className='py-10 '>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl text-center text-black'>Trending Apps</h1>
                <p className='font-normal text-sm text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* 8 Apps */}

            <AllApps data={trendingApps}></AllApps>

            
            <div className='text-center my-4'>
                {/* <Link to="/apps">
                   <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white" href="/">Show All</a>
                </Link> */}
                <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white" href="/Apps">Show All</a>
            </div>
        </div>
    );
};

export default Trending;