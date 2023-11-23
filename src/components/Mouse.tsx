// "use client";

// import { relative } from "path";
// import { useEffect, useRef } from "react";
// const Mouse = () => {
//   const first = useRef(null);
//   const handleMouseMove = (e: any) => {
//     const ref: any = first.current;
//     if (ref) {
//       ref.cursorVisible = true;

//       // Position the dot
//       ref.endX = e.pageX;
//       ref.endY = e.pageY;
//       ref.style.top = ref.endY + "px";
//       ref.style.left = ref.endX + "px";
//     }
//     // You can perform additional actions based on the mouse position here
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [first]);

//   return (
//     <>
//       <div
//         ref={first}
//         className="cursor"
//         style={{ width: "300px", height: "300px", backgroundColor: "white" }}
//       ></div>
//     </>
//   );
// };

// export default Mouse;
