import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
// import iconDownload from "../../assets/icon-downloads.png";
import Ratings from "../../assets/icon-ratings.png";
import iconDownload from "../../assets/icon-downloads.png"
import { addToStoredDB } from "../../Installed/addToDB";
import review from "../../assets/icon-review.png"
import { ToastContainer, toast } from 'react-toastify';
// import{getStoredDB} from "../../Installed/addToDB"

import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  console.log(id);

  const data = useLoaderData(); 
  // console.log(data);
   const singleApp = data?.find((app) => app.id === appId);
   const [isInstalled, setIsInstalled] = useState(false);
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
      <div>
        <div className="bg-white w-full pt-5">
          <div className="card card-side bg-white shadow-lg mx-auto p-8 mt-6 ">
            <figure>
              <img className="w-30 h-auto"
                src={image}
                alt="App"
              />
            </figure>
            <div className="card-body">
              <div className="border-b-2 text-gray-400 pb-4">
                  <h2 className="card-title text-black font-bold text-2xl">{title}</h2>
                  <p className=" font-normal text-base text-gray-600"><span className="font-semibold text-black">CompanyName : </span> {companyName}</p>
              </div>
              <div className="flex justify-start gap-8 text-black my-6">
                <div className="btn btn-outline hover:bg-white text-black ">
                    <img className=" w-4" src={iconDownload} alt="" />
                    <h4 className="text-black text-sm font-normal ">Download</h4>
                    <button className="">{downloads}</button>
                </div>
                <div className="btn btn-outline hover:bg-white text-black">
                    <img className="w-4" src={Ratings} alt="" />
                    <h4 className="text-black text-sm font-normal ">RatingAvg</h4>
                    <button className="">{ratingAvg}</button>
                </div>
                <div className="btn btn-outline hover:bg-white text-black">
                    <img className=" w-4" src={review} alt="" />
                    <h4 className="text-black text-sm font-normal">Review</h4>
                    <button className="">{reviews}</button>
                </div>
              </div>
              <div>
                     <button onClick={()=>handleInstalled(appId)} disabled={isInstalled}
                         className={`btn btn-outline text-black ${
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

              <div>
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

              <div className="w-10/12 mx-auto">
                <p className="font-normal text-sm text-gray-600 py-8"><span className="font-bold text-black">Description : </span>{description}</p>
              </div>
        </div>
      </div>
    </div>
    // <h1>test or s</h1>
  );
};

export default AppDetails;