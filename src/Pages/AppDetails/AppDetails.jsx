import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
// import iconDownload from "../../assets/icon-downloads.png";
import Ratings from "../../assets/icon-ratings.png";
import iconDownload from "../../assets/icon-downloads.png"
import { addToStoredDB } from "../../Installed/addToDB";
import review from "../../assets/icon-review.png"
import { ToastContainer, toast } from 'react-toastify';
// import{getStoredDB} from "../../Installed/addToDB"

// bar Chart

import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  console.log(id);

  const data = useLoaderData(); 
  // console.log(data);
  const singleApp = data?.find((app) => app.id === appId); 
  // console.log(singleApp);
  // console.log(typeof id, data);

  // if(!singleApp || true){
  //   return <p className="text-center items-center text-black text-2xl font-bold">Loading....</p>
  // }

  // const singleApp = useLoaderData();  ekhon
   const [isInstalled, setIsInstalled] = useState(false);
  // const storedApps = getStoredDB()
  //  const [isInstalled, setIsInstalled] = useState(storedApps.includes(appId));

  const { image, title, downloads, ratingAvg, reviews, description, companyName  } = singleApp || {};
 

  const handleInstalled = id =>{
    addToStoredDB(id);
      setIsInstalled (true);
      toast.success("App installed successfully!")
  };

  // BarChart
  if(!singleApp){
    return <p className="text-center mt-10">Loading....</p>
  }

  return (
    <div>

      <div className="py-20">
        <div className="bg-white w-full pt-5 px-3 md:px-0">
          <div className="card bg-white shadow-lg mx-auto p-4 md:p-8 mt-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:w-10/12 ">
            <figure>
              <img className="w-20 h-20 md:w-32 md:h-32 object-contain "
                src={image}
                alt="App"
              />
            </figure>
            <div className="card-body p-0 w-full">
              <div className="border-b-2 text-gray-400 pb-4 text-center md:text-left">
                  <h2 className=" text-black font-bold text-xl md:text-2xl">{title}</h2>
                  <p className=" font-normal text-sm  md:text-base text-gray-600"><span className="font-semibold text-black">CompanyName : </span> {companyName}</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-black my-6">
                <div className="btn btn-outline hover:bg-white text-black flex gap-2 ">
                    <img className=" w-4" src={iconDownload} alt="" />
                    <h4 className="text-black text-sm font-normal ">Download</h4>
                    <button className="">{downloads}</button>
                </div>
                <div className="btn btn-outline hover:bg-white text-black flex gap-2 ">
                    <img className="w-4" src={Ratings} alt="" />
                    <h4 className="text-black text-sm font-normal ">RatingAvg</h4>
                    <button className="">{ratingAvg}</button>
                </div>
                <div className="btn btn-outline hover:bg-white text-black flex gap-2 ">
                    <img className=" w-4" src={review} alt="" />
                    <h4 className="text-black text-sm font-normal">Review</h4>
                    <button className="">{reviews}</button>
                </div>
              </div>
              <div className="text-center md:text-left">
                     <button onClick={()=>handleInstalled(appId)} disabled={isInstalled}
                         className={`btn btn-outline text-black w-full md:w-auto ${
                            isInstalled ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                            : ' hover:bg-purple-600 '
                         }`}>
                           {isInstalled ? 'Installed ' : 'Install Now'}
                           
                      </button>
                      <ToastContainer />
              </div>
            </div>
          </div>

           {/* bar Chart */}

              <div className="w-full md:10/12 mx-auto px-2">
                <h2 className="text-xl font-semibold text-black my-4 text-center">Rating Breakdown</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={singleApp?.ratings} layout="vertical" margin={{top: 20, right: 30, left: 40, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="count" fill="#9F62F2"></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-10/12 mx-auto px-3">
                <p className="font-normal text-sm text-gray-600 py-8"><span className="font-bold text-black">Description : </span>{description}</p>
              </div>
        </div>
      </div>
    </div>
    // <h1>test or s</h1>
  );
};

export default AppDetails;