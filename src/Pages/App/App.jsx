// import React, { use } from 'react';
import iconDownload from "../../assets/icon-downloads.png"
import ratings from "../../assets/icon-ratings.png"

const App = ({ singleApp }) => {
  // const data =use(appPromise);
  // console.log(data)
//   console.log(singleApp);
const {image, title, description, downloads, ratingAvg } = singleApp;
  return (
    <div>
      {/* single app */}

      <div>
        <div className="card bg-base-100 shadow-lg ">
          <figure>
            <img className="w-64 `h-[166px]`"
              src={image}
              alt="App"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl text-black">
              {title}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            {/* <p className=" py-3">
              {description}
            </p> */}
            <div className="card-actions flex justify-between">
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
    </div>
  );
};

export default App;
