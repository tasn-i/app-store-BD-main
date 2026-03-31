// import React, { use } from 'react';
import { Link } from "react-router";
import iconDownload from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const App = ({ singleApp, showButton, onUninstall, children }) => {
  // const data =use(appPromise);
  // console.log(data)
  console.log(singleApp);
  const { image, title, downloads, ratingAvg, id } = singleApp;
  return (
    <div className=" ">
      {/* single app */}

      <div className=" shadow-lg items-center p-1 bg-white">
        {/* <Link to={`/appDetails/${id}`}> { */}
        {children ? (
          <div className=" flex flex-wrap gap-4 justify-between items-center w-full p-4">
            <Link to={`/appDetails/${id}`} className="flex-1">
              {children}
            </Link>
            <div>
              {/* {children} */}
              {showButton && (
                <button
                  onClick={() => onUninstall(id)}
                  className=" btn btn-outline bg-purple-500 text-black text-center items-center hover:bg-purple-600"
                >
                  Uninstall
                </button>
              )}
            </div>
          </div>
        ) : (
          <Link to={`/appDetails/${id}`}>
            <div className="card">
              <div className=" ">
                <figure>
                  <img className="w-30 h-30" src={image} alt="App" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-2xl text-black">
                    {title}
                  </h2>

                  <div className="gap-4 flex justify-between text-black">
                    <div className="badge badge-outline">
                      <img className="w-3" src={iconDownload} alt="" />
                      {downloads}
                    </div>
                    <div className="badge badge-outline">
                      <img className="w-3" src={ratings} alt="" />
                      {ratingAvg}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default App;