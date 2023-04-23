// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./HeaderSideBar.css";
// import SideBarCategories from "./SideBarCategories";
// import { handleMenuCategories } from "./SideBarFunction";

// const HeaderSideBar = () => {

//   return (
//     <div className="sidebar">
//       <div className="sidebar__wrapper">
//         <div className="sidebar__content flex flex-col space-y-5 justify-start">
//           <div className="sidebar__header">
//             <button>Join Fiver</button>
//           </div>
//           <div className="sidebar__menu">
//             <ul className="sidebar__menu-main">
//               <li>
//                 <NavLink>Sign In</NavLink>
//               </li>
//               <li>
//                 <div
//                   className="flex justify-between items-center"
//                   onClick={()=>handleMenuCategories(".sidebar__menu-categories")}
//                 >
//                   <NavLink>Browse Categories</NavLink>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </div>
//                 <SideBarCategories />
//               </li>
//               <li>
//                 <NavLink>Explore</NavLink>
//               </li>
//               <li>
//                 <NavLink>Fiverr Business</NavLink>
//               </li>
//             </ul>
//             <div className="sidebar__menu-general">
//               <span>General</span>
//               <hr />
//               <ul>
//                 <li>
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="sidebar__overlay"></div>
//       </div>
//     </div>
//   );
// };

// export default HeaderSideBar;
