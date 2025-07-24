// "use client";
// import React from "react";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardDescription } from "@/components/ui/card";
// import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// import { Download } from "lucide-react";
// import Image from "next/image";
// import { TextGenerateEffect } from "./ui/text-generate-effect";

// export default function HeroSection() {
//   const words = `Hi, Iam Zubair Ahmed Khan `;

//   return (
//     <section className="w-full min-h-[80vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-10 ">
//       <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-6 md:p-8 max-w-12xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl w-full">
//         {/* <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-6 md:p-8 max-w-[1440px] bg-white/80 backdrop-blur-sm shadow-xl rounded-xl w-full mx-auto"> */}
//         {/* Left side - Text */}
//         <CardContent className="flex flex-col items-start justify-center space-y-4 p-2">
//           <div className="w-full flex flex-col ">
//             <TextGenerateEffect
//               words={words}
//               className="text-4xl md:text-5xl w-full"
//             />
//           </div>

//           <TypewriterEffectSmooth
//             words={[
//               { text: "Full", className: "text-red-600" },
//               { text: "-", className: "text-red-600" },
//               { text: "Stack ", className: "text-red-600" },
//               { text: "Developer", className: "text-red-600" },
//             ]}
//             className="text-3xl md:text-3xl font-bold text-red-600 mb-6"
//           />

//           <CardDescription className="text-base md:text-lg text-gray-700 leading-relaxed">
//             I'm a passionate and driven Full-Stack Developer dedicated to
//             crafting intuitive, user-friendly digital experiences. I strive to
//             create efficient, high-quality software solutions that meet the
//             needs of both clients and end-users. Let’s work together to bring
//             your next project to life and build something great.
//           </CardDescription>

//           <div className="flex flex-wrap gap-4 mt-6">
//             <Button
//               variant="default"
//               className="flex items-center hover:bg-red-600 hover:text-white "
//             >
//               <Download className="w-4 h-4" />
//               Download CV
//             </Button>
//             <a href="#projects">
//               <Button
//                 variant="outline"
//                 className="flex items-center gap-2 border-red-600 text-red-500 hover:border-black transition-colors"
//               >
//                 View Projects
//               </Button>
//             </a>
//           </div>

//           <div className="my-6 border-t border-gray-300 w-full"></div>
//           <div className="flex justify-center ml-10 ">
//             <div className="flex items-center gap-10 w-full max-w-4xl mt-10">
//               {/* Stat 1 */}
//               <div className="flex flex-col items-center text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
//                   2
//                 </h2>
//                 <span className="text-base md:text-lg text-gray-700 leading-relaxed">
//                   Years Experience
//                 </span>
//               </div>

//               {/* Stat 2 */}
//               <div className="flex flex-col items-center text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
//                   7+
//                 </h2>
//                 <span className="text-base md:text-lg text-gray-700 leading-relaxed">
//                   Projects Worked
//                 </span>
//               </div>

//               {/* Stat 3 */}
//               <div className="flex flex-col items-center text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
//                   1
//                 </h2>
//                 <span className="text-base md:text-lg text-gray-700 leading-relaxed">
//                   Companies Worked
//                 </span>
//               </div>
//             </div>
//           </div>
//         </CardContent>

//         {/* Right side - Image */}
//         <CardContent className="flex items-center justify-center p-4">
//           <div className="relative w-full h-90 md:h-100 lg:h-120">
//             <Image
//               src="/home4.jpg"
//               alt="Hero image"
//               fill
//               className="object-cover rounded-md shadow-md"
//               priority
//             />
//           </div>
//         </CardContent>
//       </Card>
//     </section>
//   );
// }


"use client";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Download } from "lucide-react";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  const words = `Hi, Iam Zubair Ahmed Khan `;

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-10">
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 sm:p-6 md:p-8 max-w-screen-xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl w-full">
        {/* Left side - Text */}
        <CardContent className="flex flex-col items-start justify-center space-y-4 p-2">
          <div className="w-full flex flex-col">
            <TextGenerateEffect
              words={words}
              className="text-3xl sm:text-4xl md:text-5xl w-full"
            />
          </div>

          <TypewriterEffectSmooth
            words={[
              { text: "Full", className: "text-red-600" },
              { text: "-", className: "text-red-600" },
              { text: "Stack", className: "text-red-600" },
              { text: "Developer", className: "text-red-600" },
            ]}
            className="text-2xl sm:text-3xl font-bold text-red-600 mb-4"
          />

          <CardDescription className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I'm a passionate and driven Full-Stack Developer dedicated to
            crafting intuitive, user-friendly digital experiences. I strive to
            create efficient, high-quality software solutions that meet the
            needs of both clients and end-users. Let’s work together to bring
            your next project to life and build something great.
          </CardDescription>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              variant="default"
              className="flex items-center gap-2 hover:bg-red-600 hover:text-white"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
            <a href="#projects">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-red-600 text-red-500 hover:border-black transition-colors"
              >
                View Projects
              </Button>
            </a>
          </div>

          <div className="my-6 border-t border-gray-300 w-full" />

          {/* Stats Section */}
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-6 mt-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                2
              </h2>
              <span className="text-base sm:text-lg text-gray-700">
                Years Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                7+
              </h2>
              <span className="text-base sm:text-lg text-gray-700">
                Projects Worked
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                1
              </h2>
              <span className="text-base sm:text-lg text-gray-700">
                Companies Worked
              </span>
            </div>
          </div>
        </CardContent>

        {/* Right side - Image */}
        <CardContent className="flex items-center justify-center p-4">
          <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[420px]">
            <Image
              src="/home4.jpg"
              alt="Hero image"
              fill
              className="object-cover rounded-md shadow-md"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
