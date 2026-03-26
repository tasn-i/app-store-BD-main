import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Installed/addToDB';
import App from '../App/App';
import Apps from '../Apps/Apps';
import Logo from "../../assets/logo.png"


const Installation = () => {
    const [loading,setLoading] =useState(true);
    const [appList, setAppList]=useState([])
    const [sort, setSort] = useState("")
    const data = useLoaderData();
    const [originalApps, setOriginalApps] =useState([]);
    console.log(data);
    useEffect(() =>{
        const storedAppData = getStoredApp();
        const ConvertedStoredApps= storedAppData.map(id => parseInt(id));
        // console.log(ConvertedStoredApps);
        const myInstallated = data.filter (app =>ConvertedStoredApps.includes(app.id));
        console.log(myInstallated)
         setAppList(myInstallated)

        //  sort
        setOriginalApps(myInstallated);

        // Loading
        setTimeout(() =>{
            setLoading(false);
        }, 500)
    },[data])

    // sort
    const handleSort =(type) =>{
        setSort (type)
        if(type === "High"){
           const sorted = [...originalApps].sort((a, b) => b.downloads - a.downloads);
           setAppList(sorted);
        }
        else if(type === "Low"){
            const sorted = [...originalApps].sort((a,b) => a.downloads - b.downloads);
            setAppList(sorted);
        }
            

    }

    if(loading){
        return(
            <div className='flex flex-col justify-center items-center h-screen'>
                <img className='w-16 animate-spin mb-4' src={Logo} alt='Loading...'></img>
                <p className='text-gray-600 font-nomal text-lg animate-pulse'>Loading Installation.....</p>
            </div>
        );
    }
    return (
        <div className='bg-white p-30'>
            
            {/* <h1 className='text-black'>Hellow the world</h1> */}
            <div className='text-center items-center gap-4 '>
                <h1 className='text-black font-bold text-3xl'>Your Installed Apps</h1>
                <p className='text-sm font-normal text-gray-500 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center cursor-pointer'>
                <div><h1 className='font-bold text-black'>Installed App{appList.length}</h1></div>
                <div>
                    <details className="dropdown">
                        <summary className="btn btn-outline text-black hover:bg-purple-600">Sort By downloads: {sort?sort:""}</summary>
                        <ul className="menu dropdown-content rounded-box z-1 w-52 shadow-sm">
                            <li><a className='btn btn-outline text-black hover:bg-purple-600' onClick={()=>handleSort("High")}>High - Low</a></li>
                            <li><a className='btn btn-outline text-black hover:bg-purple-600' onClick={()=>handleSort("Low")}>Low - High</a></li>
                        </ul>
                    </details>
                </div>
            </div>

            <div>
                
                <div className= ''>

                    <div className='grid grid-cols-1 gap-10 mt-10  '>
                       {
                          appList.map(a => <App key={a.id} singleApp={a} ></App>)
                       } 
                   </div>

                </div>
                
            </div>


        </div>
    );
};

export default Installation;