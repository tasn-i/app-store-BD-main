// import React, { Suspense, useEffect, useState } from 'react';
import React, { Suspense  } from 'react';
import App from '../App/App';

const AllApps = ({data}) => {
    // const [allApps, setAllApps] = useState([]);

    // useEffect(() =>{
    //     fetch("appData.json").then(res => res.json()).then(data =>{
    //         // console.log(data);
    //         setAllApps(data)
    //     },[])
    // })

    // const appPromise=fetch('./appData.json').then(res => res.json());

    return (
        <div>
           <div>
            <Suspense fallback={<span>Loading...</span>}>
                {/* <App appPromise={appPromise}></App> */}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 p-8 gap-8">
                    
                    {
                        data.map((singleApp) =><App key={singleApp.id} singleApp={singleApp}>

                            <button>Uninstall</button>
                        </App>)
                    }

                </div>
                
            </Suspense>
           </div>
        </div>
    );
};

export default AllApps;