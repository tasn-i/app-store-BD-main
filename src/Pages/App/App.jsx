// import React, { use } from 'react';
import { Link } from "react-router";
import iconDownload from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const App = ({ singleApp, showButton, onUninstall }) => {
  // const data =use(appPromise);
  // console.log(data)
  console.log(singleApp);

  // const App = ({singleApp, showButton, onUninstall}){
  //   const { image, title, downloads, ratingAvg, id } = singleApp;

  // }
  const { image, title, downloads, ratingAvg, id } = singleApp;
  return (
    <div className=" ">
      {/* single app */}

      <div className="flex justify-between shadow-lg py-10 px-3">
        <Link to={`/appDetails/${id}`}>
          <div className="card bg-white shadow">

            {/* <div>{children}</div> */}
            <div className=" ">
              <figure>
                <img className="w-64 `h-[166px]`" src={image} alt="App" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-xl text-black">
                  {title}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                {/* <p className=" py-3">
              {description}
            </p> */}
                <div className="card-actions flex justify-between text-black">
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

            {/* dg */}
           {/* <div>{children}</div> */}
          </div>

          

        </Link>

        <div>
          {/* {children} */}
          {showButton && (
            <button onClick={()=> onUninstall(id)}
              className=' btn btn-outline bg-purple-500 text-black hover:bg-purple-600'>
              Uninstall
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;