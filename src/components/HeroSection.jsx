// import Lottie from 'lottie-react';
// import heroAnimation from '../assets/animations/hero.json';

// const HeroSection = () => {
//     return (
//         <div className="mt-6 lg:mt-20 px-6 lg:px-16">
//             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//                 {/* Left Side - Text + Buttons */}
//                 <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//                     <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
//                         Expert Guidance For Your
//                         <span className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-transparent bg-clip-text'>
//                             {" "}Global Success
//                         </span>
//                     </h1>
//                     <p className='mt-10 text-lg text-neutral-500 max-w-2xl'>
//                         Achieve more than imagined with strategic guidance, expert mentorship,
//                         and insights that transform ideas into action.
//                         Open doors to careers, studies, and opportunities worldwide.
//                     </p>
//                     <div className="flex mt-10">
//                         <a
//                             href=""
//                             className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] py-3 px-6 mx-2 rounded-md text-white'
//                         >
//                             Claim Your Spot
//                         </a>
//                         <a
//                             href=""
//                             className='py-3 px-6 mx-2 rounded-md border border-gray-400'
//                         >
//                             Contact Us
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Side - Video / Illustration */}
//                 <div className="flex justify-center lg:justify-end">
//                    <Lottie
//     animationData={heroAnimation}
//     autoplay={true}
//     loop={true}
//     style={{ width: '800px', height: '550px' }}
// />

//                 </div>


//             </div>
//         </div>
//     )
// }

// export default HeroSection



// import Lottie from 'lottie-react';
// import heroAnimation from '../assets/animations/hero.json';

// const HeroSection = () => {
//     return (
//         <div className="mt-6 lg:mt-10 px-6 lg:px-16">
//             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                
//                 {/* Left Side - Text + Buttons */}
//                 <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//                     <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide font-medium">
//                         Expert Guidance For Your
//                         <span className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-transparent bg-clip-text'>
//                             {" "}Global Success
//                         </span>
//                     </h1>
//                     <p className='mt-10 text-lg text-neutral-500 max-w-2xl font-medium'>
//                         Achieve more than imagined with strategic guidance, expert mentorship,
//                         and insights that transform ideas into action.
//                         Open doors to careers, studies, and opportunities worldwide.
//                     </p>
//                     <div className="flex mt-10">
//                         <a
//                             href=""
//                             className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] py-3 px-6 mx-2 rounded-md text-white'
//                         >
//                             Claim Your Spot
//                         </a>
//                         <a
//                             href=""
//                             className='py-3 px-6 mx-2 rounded-md border border-gray-400'
//                         >
//                             Contact Us
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Side - Video / Illustration */}
//                 <div className="flex justify-center lg:justify-end">
//                     <Lottie
//                         animationData={heroAnimation}
//                         autoplay={true}
//                         loop={true}
//                         style={{ width: '800px', height: '600px' }}
//                     />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default HeroSection;



import Lottie from 'lottie-react';
import heroAnimation from '../assets/animations/hero.json';

const HeroSection = () => {
    return (
        <div className="lg:mt-10 px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
                
                {/* Left Side - Text + Buttons */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wide font-medium leading-tight">
                        Expert Guidance For Your
                        <span className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-transparent bg-clip-text'>
                            {" "}Global Success
                        </span>
                    </h1>
                    <p className='mt-6 lg:mt-10 text-base sm:text-lg text-neutral-500 max-w-2xl font-medium'>
                        Achieve more than imagined with strategic guidance, expert mentorship,
                        and insights that transform ideas into action.
                        Open doors to careers, studies, and opportunities worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row mt-6 lg:mt-10 w-full sm:w-auto">
                        <a
                            href=""
                            className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] py-3 px-6 mx-0 sm:mx-2 mb-3 sm:mb-0 rounded-md text-white text-center'
                        >
                            Claim Your Spot
                        </a>
                        <a
                            href=""
                            className='py-3 px-6 mx-0 sm:mx-2 rounded-md border border-gray-400 text-center'
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Right Side - Animation */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                    <Lottie
                        animationData={heroAnimation}
                        autoplay={true}
                        loop={true}
                        className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[500px] lg:w-[800px] lg:h-[600px]"
                    />
                </div>

            </div>
        </div>
    )
}

export default HeroSection;