// import React from 'react'

// // const TimelineCard = ({ item, index }) => {
// //   return (
// //     <div
// //       className={`w-full flex ${
// //         index % 2 === 0 ? "justify-start" : "justify-end"
// //       }`}
// //     >
// //       <div className="w-[420px] rounded-3xl border border-white/10 bg-[#111] p-8">

// //         <p className="text-[#AEB784] text-sm">
// //           {item.year}
// //         </p>

// //         <h2 className="text-3xl font-bold mt-2">
// //           {item.title}
// //         </h2>

// //         <h4 className="mt-2 text-gray-300">
// //           {item.company}
// //         </h4>

// //         <p className="text-gray-500 mt-1">
// //           {item.duration}
// //         </p>

// //         <p className="text-gray-400 mt-6 leading-7">
// //           {item.description}
// //         </p>

// //       </div>
// //     </div>
// //   );
// // };

// // export default TimelineCard;

// const TimelineCard  =  React.forwardRef(({ item }, ref) => {
   
//   return (
//     <div
//       ref={ref}
//       className={`absolute ${
//         item.side === "left" ? "left-10 lg:left-20" : "right-10 lg:right-20"
//       }`}
//       style={{
//         top: item.top,
//       }}
//     >
//       <div className="w-96 rounded-3xl bg-[#111] border border-white/10 p-8">
//         <p className="text-[#AEB784]">{item.year}</p>

//         <h2 className="text-3xl font-bold mt-2">
//           {item.title}
//         </h2>

//         <p className="text-gray-400 mt-2">
//           {item.company}
//         </p>

//         <p className="text-gray-500 mt-1">
//           {item.duration}
//         </p>

//         <p className="text-gray-300 mt-6 leading-7">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// });

// export default TimelineCard;

import React from "react";

const TimelineCard = React.forwardRef(({ item, top }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute ${
        item.side === "left"
          ? "left-4 lg:left-20"
          : "right-4 lg:right-20"
      }`}
      style={{
        top,
      }}
    >
      <div className="timeline-card w-[320px] lg:w-[420px] rounded-3xl bg-[#111] border border-white/10 p-8 transition-all duration-500">

        <p className="text-[#AEB784]">
          {item.year}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {item.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {item.company}
        </p>

        <p className="text-gray-500 mt-1">
          {item.duration}
        </p>

        <p className="text-gray-300 mt-6 leading-7">
          {item.description}
        </p>

      </div>
    </div>
  );
});

export default TimelineCard;
