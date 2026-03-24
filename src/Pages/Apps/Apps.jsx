import React from 'react';
import AllApps from '../AllApps/AllApps';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const data = useLoaderData();
    console.log(data);
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