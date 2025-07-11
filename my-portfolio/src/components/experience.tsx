// import React from "react";
// import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import {
//   Building,
//   ChevronRight,
//   ChevronRightCircle,
//   LocateIcon,
//   Map,
//   MapPin,
//   Monitor,
// } from "lucide-react";
// import { PinContainer } from "./ui/3d-pin";

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20 px-4 md:px-8">
//       <Card className="max-w-10xl grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto p-6 md:p-8 bg-gray-900">
//         <CardContent className="flex flex-col items-start text-left justify-center">
//           <CardTitle className="text-4xl font-bold mb-4 text-white">
//             Experience
//           </CardTitle>
//           {/* <CardDescription className="text-lg text-gray-700 mb-6">
//             Here are some of my professional experiences and projects.
//           </CardDescription> */}
//         </CardContent>
//         <CardContent className="space-y-6">
//           {/* <PinContainer
//             title="Experience"> */}

//           <Card className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 hover:border-red-600">
//             <CardContent>
//               <div className="text-center mb-4">
//                 <h3 className="text-2xl font-semibold text-center mb-4">
//                   <Monitor className="inline-block mr-2 text-red-600" />
//                   Web Developer{" "}
//                 </h3>
//                 <strong className="text-red-600 mb-2">current working</strong>
//               </div>
//               <div>
//                 <p className="text-gray-700 mb-2">
//                   <Building className="inline-block mr-2 text-red-600" />
//                   <span>Abdullah Al Arif Investment Company</span>
//                   {/* <span className="text-black m-4">|</span>
//                   <strong>July 2024 - Present</strong> */}
//                 </p>
//               </div>
//               <div className="mt-4">
//                 <MapPin className="inline-block mr-2 text-red-600" />
//                 <span className="text-gray-700">Dubai, UAE</span>
//               </div>
//               <div className="mt-4 ">
//                 <p className="text-gray-700 text-left">
//                   <ChevronRightCircle className="inline-block mr-2 text-red-600" />
//                   Developed and maintained responsive web applications primarily
//                   using WordPress with Elementor and Bricks builders.
//                   Additionally, built modern applications leveraging React,
//                   Next.js, Node.js, and Supabase. Collaborated closely with the
//                   design team to implement intuitive, user-friendly interfaces
//                   that enhance user experience.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//           {/* </PinContainer> */}
//         </CardContent>
//       </Card>
//     </section>
//   );
// }

import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Building,
  ChevronRightCircle,
  MapPin,
  Monitor,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <Card className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-8 bg-gray-900 rounded-lg shadow-lg">
        {/* Left column - Heading */}
        <CardContent className="flex flex-col justify-center items-start text-left">
          <CardTitle className="text-4xl font-bold mb-6 text-white">
            Experience
          </CardTitle>
          {/* Optional description below */}
          {/* <p className="text-gray-300 max-w-md leading-relaxed">
            Here are some of my professional experiences and projects.
          </p> */}
        </CardContent>

        {/* Right column - Experience Card */}
        <CardContent className="space-y-8">
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-red-600">
            <CardContent>
              {/* Job Title and Status */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-2">
                  <Monitor className="text-red-600" size={28} />
                  Web Developer
                </h3>
                <strong className="text-red-600 uppercase tracking-wide text-sm">
                  Current Working
                </strong>
              </div>

              {/* Company and Location */}
              <div className="flex items-center gap-2 text-gray-700 mb-4">
                <Building className="text-red-600" size={20} />
                <span className="font-medium">Abdullah Al Arif Investment Company</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 mb-6">
                <MapPin className="text-red-600" size={20} />
                <span>Dubai, UAE</span>
              </div>

              {/* Job Description */}
              <p className="text-gray-700 leading-relaxed flex items-start gap-2">
                {/* <ChevronRightCircle className="text-red-600 mt-1" /> */}
                <span>
                  Developed and maintained responsive web applications primarily
                  using WordPress with Elementor and Bricks builders. Additionally,
                  built modern applications leveraging React, Next.js, Node.js, and
                  Supabase. Collaborated closely with the design team to implement
                  intuitive, user-friendly interfaces that enhance user experience.
                </span>
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
