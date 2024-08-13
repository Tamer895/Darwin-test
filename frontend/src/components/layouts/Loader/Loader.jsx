// import React, {useState, useEffect} from 'react'
// import { hourglass } from 'ldrs'

// hourglass.register()

// export default function Loader() {

//     const [loading, setLoading] = useState();

//     useEffect(() => {
//         const handleLoad = () => {
//             setLoading(false);
//         };

//         window.addEventListener('load', handleLoad);

//         // Удаляем слушатель события при размонтировании компонента
//         return () => {
//             window.removeEventListener('load', handleLoad);
//         };
//     }, []);

//     if (!loading) return null;
//     else{
//         return (
//           <div className='w-screen h-screen bg-white fixed top- flex-center'>
//             <l-hourglass
//               size="40"
//               bg-opacity="0.1"
//               speed="1.75" 
//               color="black" 
//               ></l-hourglass>
//           </div>
//         )
            
//     }


// }
