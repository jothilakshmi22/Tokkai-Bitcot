
// import React, { useEffect, useState } from "react";
// import "./Watch2.css"

// const contentList = [
//   "1 TOKK AI has a dedicate button for effortless volume control.",
//   "2 TOKK AI makes your voice clear and easy to hear with powerful speakers and smart microphones that block out noise.",
//   "3 OKKTM is designed for easy interactions with a second Multi-Function Button for added convenience.",
//   "4 TOKKTM is designed for easy interactions with a second Multi-Function Button for added convenience.",
// ];

// const Watch2 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length)
//     };

//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="image-container">
//         <img
//           src="https://tokk-ai-dev.bitcotapps.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb3.b7a2db24.png&w=640&q=75"
//           alt="Watch"
//           className="center-image"
//         />

//       {contentList.map((content, index) => (
//         <div
//           key={index}
//           className={`content ${index === currentIndex ? `visible content-${index}` : ""} `}
//         >
//           {content}
//         </div>
//       ))}

//       {contentList.map((_, index) => (
//         <div
//           key={index}
//           className={`line line-${index} ${index === currentIndex ? 'visible' : ''}`}
//           style={{
//             animationName: index === currentIndex ? 'growLine' : 'none',
//             animationDuration: '2s',
//             animationFillMode: 'forwards'
//           }}
//         />
//       ))}


//       {contentList.map((_, index) => (
//         <div
//         className={`dot ${index === currentIndex ? `visible dot-${index}` : '' }`}
//           key={index}
//         />
//       ))}
//      </div>
//     </div>
//   );
// };

// export default Watch2;


// Css file 

// body {

//     overflow: hidden;
//   }
  
//   .container {
//     height: 100vh;
//     position: relative;
//     background-color: #121212;
//   }
  
//   .image-container {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     position: fixed;
//   }
  


//   .center-image {
//     max-width: 300px;
//     margin-bottom: 20px;
//   }
  
//   .content {
//     opacity: 0;
//     position: absolute;
//     animation: none;
//     height: 700px;
//     color: #7f8592;
//     width: 200px;
//   }
  
//   .content.visible {
//     animation: fadeIn 2s ease-in-out forwards;
//   }
  
//   @keyframes fadeIn {

//     10%{
//         opacity: 0;
//     }
//     20%{
//         opacity: 0.1;
//     }
//     40%{
//         opacity: 0.2;
//     }
//     60%{
//         opacity: 0.4;
//     }
//     80%{
//         opacity: 0.6;
//     }
//     100%{
//         opacity: 1;
//     }
//   }
  
//   .content-0 {
//     top: 68%;
//     left: 150%;
//   }
  
//   .content-1 {
//     top: 10%;
//     left: 137%;
//   }
  
//   .content-2 {
//     top: 50%;
//     right: 140%;
//   }
  
//   .content-3 {
//     top: 46%;
//     left: 150%;
//   }
  
//  .line {
//     position: absolute;
//     height: 2px;
//     background-color: white;
//     opacity: 0;
//   }
  
//   .line-0 {
//     top: 65%;
//     left: 88%;
// }
  
  
//   .line-1 {
//     top: 159px;
//     left: 77%;
//   }
  
//   .line-2 {
//     top: 66%;
//     right: 72%;
//   }
   
//   .line-3 {
//     top: 44%;
//     left: 86%;
//   } 
  
//   @keyframes growLine {
//     10%{
//         width: 0;
//         opacity: 0;
//     }
//     20%{
//         width: 70px;
//         opacity: 1;
//     }
//     40%{
//         width: 140px;
//         opacity: 1;
//     }
//     60%{
//         width: 210px;
//         opacity: 1;
//     }
//     80%{
//         width: 240px;
//         opacity: 1;
//     }
//     100%{
//         width: 350px;
//         opacity: 1;
//     }
//   }
  
//   .line.visible {
//     animation: growLine 2s ease-in-out forwards;
//   }

//   .dot{
//     width: 10px;
//     height: 10px;
//     background-color: white;
//     border-radius: 50%;
//     position: absolute;
//     opacity: 0;
 
//   }


//   .dot-0{
//     top: 64%;
//     left: 85%;
//   }

//   .dot-1 {
//     top: 155px;
//     left: 74%;
//   }
  
//   .dot-2 {
//     top: 65%;
//     right: 69%;
//   }
   
//   .dot-3 {
//     top: 43%;
//     left: 85%;
//   } 

//   .dot.visible{
//     opacity: 1;
//   }

