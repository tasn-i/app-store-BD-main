import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
// import iconDownload from "../../assets/icon-downloads.png";
import Ratings from "../../assets/icon-ratings.png";
import iconDownload from "../../assets/icon-downloads.png"
import { addToStoredDB } from "../../Installed/addToDB";
import review from "../../assets/icon-review.png"

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

  const { image, title, downloads, ratingAvg, reviews, description  } = singleApp || {};

  const handleInstalled = id =>{

    addToStoredDB(id);

  }

  // BarChart
  if(!singleApp){
    return <p className="text-center mt-10">Loading....</p>
  }

  return (
    <div>
      {/* <div className='p-28 text-black' >
                <h1>App Details</h1>
            </div> */}

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
                  <h2 className="card-title text-black font-semibold text-xl">{title}</h2>
                  <p className=" font-normal text-base text-gray-600">Click the button to watch on Jetflix app.</p>
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
                     <button onClick={()=>handleInstalled(appId)} className="btn btn-outline text-black hover:bg-white">Installed </button>
              </div>

                    {/* <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white" href="/">Go Back!</a> */}
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
                <p className="font-normal text-xl text-black py-8">Description:{description}</p>
              </div>
        </div>
      </div>
    </div>
    // <h1>test or s</h1>
  );
};

export default AppDetails;