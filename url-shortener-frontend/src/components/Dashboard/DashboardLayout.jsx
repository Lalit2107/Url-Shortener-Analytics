// import React, { useState } from "react";
// import Graph from "./Graph";
// import { useFetchTotalClicks } from "../hooks/useQuery";
// import { useStoreContext } from "../contextapi/ContextApi";
// import { dummyData } from "../dummyData/data"; // make sure this exists

// const DashboardLayout = () => {
//   const { token } = useStoreContext();
//   const [shortenPopUp, setShortenPopUp] = useState(false);


//   function onError (){
//     console.log("ERROR");
//   };

//   // console.log(useFetchTotalClicks(token, onError))

//   if (isLoading) return <div className="text-center py-20">Loading...</div>;
//   if (isError) return <div className="text-center py-20 text-red-500">Error loading data</div>;

//   // const { data, isLoading, isError } = useFetchTotalClicks({ token, onError });
//   const {isLoading: loader, data: totalClicks } = useFetchTotalClicks({ token, onError });

  

//   //  const graphDataToShow = data && data.length > 0 ? data : dummyData;

//   return (
//     <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
//        {loader ? ( 
//             <p>Loading...</p>
//         ): ( 
//       <div className="lg:w-[90%] w-full mx-auto py-16">
      
//         <div className="h-96 relative">
//          {totalClicks.length === 0 && (
//           <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
//                      <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
//                        No Data For This Time Period
//                      </h1>
//                      <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
//                        Share your short link to view where your engagements are
//                        coming from
//                      </h3>
//                    </div>
//          )}
          
//           <Graph graphData={totalClicks} />
//         </div>
//         <div className="py-5 sm:text-end text-center">
//           <button
//             className="bg-custom-gradient px-4 py-2 rounded-md text-white"
//             onClick={() => setShortenPopUp(true)}
//           >
//             Create a New Short URL
//           </button>
//         </div>
        
//       </div>
//         )}
//     </div>
//   )
// };

// export default DashboardLayout;



// import React, { useState } from "react";
// import Graph from "./Graph";
// import { useFetchTotalClicks } from "../hooks/useQuery";
// import { useStoreContext } from "../contextapi/ContextApi";
// import { dummyData } from "../dummyData/data"; // make sure this exists

// const DashboardLayout = () => {
//   const { token } = useStoreContext();
//   const [shortenPopUp, setShortenPopUp] = useState(false);


//   function onError (){
//     console.log("ERROR");
//   };

//   // console.log(useFetchTotalClicks(token, onError))

  

//   const { data, isLoading, isError } = useFetchTotalClicks({ token, onError });

//   if (isLoading) return <div className="text-center py-20">Loading...</div>;
//   if (isError) return <div className="text-center py-20 text-red-500">Error loading data</div>;

//    const graphDataToShow = data && data.length > 0 ? data : dummyData;

//   return (
//     <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
     
//       <div className="lg:w-[90%] w-full mx-auto py-16">
//         <div className="h-96 relative">
      
          
//           <Graph graphData={graphDataToShow} />
//         </div>
//         <div className="py-5 sm:text-end text-center">
//           <button
//             className="bg-custom-gradient px-4 py-2 rounded-md text-white"
//             onClick={() => setShortenPopUp(true)}
//           >
//             Create a New Short URL
//           </button>
//         </div>
//       </div>
  
//     </div>
//   );
// };

// export default DashboardLayout;


// import React from 'react'
// import Graph from './Graph'
// import { dummyData } from '../dummyData/data'
// const DashboardLayout = () => {
//   return (
//      <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
//      <div className="lg:w-[90%] w-full mx-auto py-16"> 
//             <div className=" h-96 relative ">
//               <Graph myurlList={dummyData} />
//             </div>
//             <div className='py-5 sm:text-end text-center'>
//                 <button
//                     className='bg-custom-gradient px-4 py-2 rounded-md text-white'
//                     onClick={() => setShortenPopUp(true)}>
//                     Create a New Short URL
//                 </button>
//             </div>
//             </div>
//      </div>
      
//   )
// }

// export default DashboardLayout

// import React from "react";
// import Graph from "./Graph";
// import { useFetchTotalClicks } from "../hooks/useQuery";
// import { useStoreContext } from "../contextapi/ContextApi";

// const DashboardLayout = () => {
//   const { token } = useStoreContext();

//   const onError = () => {
//     console.log("ERROR");
//   };

//   const { data, isLoading, isError } = useFetchTotalClicks({ token, onError });

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading data</div>;

//   return (
//     <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
//       <div className="lg:w-[90%] w-full mx-auto py-16">
//         <div className="h-96 relative">
//           <Graph graphData={data} />
//         </div>
//         <div className="py-5 sm:text-end text-center">
//           <button
//             className="bg-custom-gradient px-4 py-2 rounded-md text-white"
//             onClick={() => setShortenPopUp(true)} // make sure setShortenPopUp is defined!
//           >
//             Create a New Short URL
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useState } from "react";
// import Graph from "./Graph";
// import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";

// import { useStoreContext } from "../../contextapi/ContextApi";

// import { dummyData } from "../../dummyData/data";// Optional fallback
// import ShortenPopUp from "./ShortenPopUp";
// import ShortenUrlList from "./ShortenUrlList";

// const DashboardLayout = () => {
//   // const refetch = false;
//   const { token } = useStoreContext();
//   const [shortenPopUp, setShortenPopUp] = useState(false);

//   const onError = () => {
//     console.log("ERROR");
//   };

//   // ✅ First call the hook correctly
//   //  const { isLoading, data: myShortenUrls, refetch} = useFetchMyShortUrls({ token, onError });
//   const { isLoading, isError, data } = useFetchTotalClicks({ token, onError });
  

//   // ✅ Handle loading
//   if (isLoading) {
//     return (
//       <div className="text-center py-20 text-lg font-semibold">Loading...</div>
//     );
//   }

//   // ✅ Handle error
//   // if (isError) {
//   //   return (
//   //     <div className="text-center py-20 text-red-500">
//   //       Error loading data. Please try again.
//   //     </div>
//   //   );
//   // }

//   // ✅ Handle empty or missing data
//   const totalClicks = Array.isArray(data) ? data : [];

//   return (
//     <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
//       <div className="lg:w-[90%] w-full mx-auto py-16">
//         <div className="h-96 relative">
//           {totalClicks.length === 0 && (
//             <div className="absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto">
//               <h1 className="text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
//                 No Data For This Time Period
//               </h1>
//               <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600">
//                 Share your short link to view where your engagements are coming from.
//               </h3>
//             </div>
//           )}
//           <Graph graphData={totalClicks} />
//         </div>
//         <div className="py-5 sm:text-end text-center">
//           <button
//             className="bg-custom-gradient px-4 py-2 rounded-md text-white"
//             onClick={() => setShortenPopUp(true)}
//           >
//             Create a New Short URL
//           </button>
//         </div>
//           <div>
//             {!isLoading  && myShortenUrls.length === 0  ? (
//               <div className="flex justify-center pt-16">
//                   <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
//                     <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
//                       You haven't created any short link yet
//                     </h1>
//                     <FaLink className="text-blue-500 sm:text-xl text-sm " />
//                   </div>
//               </div>
//             ): (
//                  <ShortenUrlList data={myShortenUrls}/>
//             )}
//           </div>
//       </div>
//        <ShortenPopUp
//           refetch={refetch}
//           open={shortenPopUp}
//           setOpen={setShortenPopUp}
//         />
//     </div>

//   );
// };

// export default DashboardLayout;

// import React, { useState } from 'react'
// import Graph from './Graph'
// import { dummyData } from '../../dummyData/data'
// import { useStoreContext } from '../../contextApi/ContextApi'
// import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
// import ShortenPopUp from './ShortenPopUp'
// import { FaLink } from 'react-icons/fa'
// import ShortenUrlList from './ShortenUrlList'
// import { useNavigate } from 'react-router-dom'
// import Loader from '../Loader'

// const DashboardLayout = () => {
//     // const refetch = false;
//     const { token } = useStoreContext();
//     const navigate = useNavigate();
//     const [shortenPopUp, setShortenPopUp] = useState(false);

//     // console.log(useFetchTotalClicks(token, onError));

//     const {isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)
    
//     const {isLoading: loader, data: totalClicks} = useFetchTotalClicks(token, onError)

//     function onError() {
//       navigate("/error");
//     }

//   return (
//     <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
//         {loader ? ( 
//             <Loader />
//         ): ( 
//         <div className="lg:w-[90%] w-full mx-auto py-16">
//             <div className=" h-96 relative ">
//                 {totalClicks.length === 0 && (
//                      <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
//                      <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
//                        No Data For This Time Period
//                      </h1>
//                      <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
//                        Share your short link to view where your engagements are
//                        coming from
//                      </h3>
//                    </div>
//                 )}
//                 <Graph graphData={totalClicks} />
//             </div>
//             <div className='py-5 sm:text-end text-center'>
//                 <button
//                     className='bg-custom-gradient px-4 py-2 rounded-md text-white'
//                     onClick={() => setShortenPopUp(true)}>
//                     Create a New Short URL
//                 </button>
//             </div>

//             <div>
//               {!isLoading && myShortenUrls.length === 0 ? (
//                 <div className="flex justify-center pt-16">
//                   <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
//                     <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
//                       You haven't created any short link yet
//                     </h1>
//                     <FaLink className="text-blue-500 sm:text-xl text-sm " />
//                   </div>
//               </div>
//               ) : (
//                   <ShortenUrlList data={myShortenUrls} />
//               )}
//             </div>
//         </div>
//         )}

//         <ShortenPopUp
//           refetch={refetch}
//           open={shortenPopUp}
//           setOpen={setShortenPopUp}
//         />
//     </div>
//   )
// }

// export default DashboardLayout


import React, { useState } from 'react'
import Graph from './Graph'
import { dummyData } from '../../dummyData/data'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'
const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  function onError() {
    navigate("/error");
  }

  const {
    isLoading,
    data: myShortenUrls = [],  // ✅ Default to empty array
    refetch
  } = useFetchMyShortUrls({ token, onError });

  const {
    isLoading: loader,
    data: totalClicks = []     // ✅ Default to empty array
  } = useFetchTotalClicks({ token, onError });

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className="h-96 relative">
            {totalClicks.length === 0 && (
              <div className="absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto">
                <h1 className="text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                  No Data For This Time Period
                </h1>
                <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600">
                  Share your short link to view where your engagements are coming from
                </h3>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>

          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-custom-gradient px-4 py-2 rounded-md text-white"
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>

          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-50">
                  <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                    You haven't created any short link yet
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm" />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </div>
      )}

      <ShortenPopUp refetch={refetch} open={shortenPopUp} setOpen={setShortenPopUp} />
    </div>
  );
};
export default DashboardLayout
