import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
// import iconDownload from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import iconDownload from "../../assets/icon-downloads.png"
import { addToStoredDB } from "../../Installed/addToDB";
import review from "../../assets/icon-review.png"


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

  const { image, title, downloads, ratingAvg, reviews } = singleApp;

  const handleInstalled = id =>{

    addToStoredDB(id);

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
                    <img className="w-4" src={ratings} alt="" />
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


              
                {/* Go back */}

                    <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white" href="/">Go Back!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <h1>test or s</h1>
  );
};

export default AppDetails;