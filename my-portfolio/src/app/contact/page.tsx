// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from "@/components/ui/card";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import Image from "next/image";
// import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <>
// <section id="contact" className="mt-30  px-4 md:px-8">
//   <Card className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
//     <CardContent className="text-center">
//       <CardTitle className="text-5xl font-bold text-white mb-4">
//         <BackgroundLines
//           children
//           className="bg-transparent absolute rotate-60"
//         />
//         Get in Touch
//       </CardTitle>
//       <CardDescription className="text-white mb-6">
//         I would love to hear from you! Whether you have a question, want
//         to collaborate, or just want to say hi, feel free to reach out.
//       </CardDescription>
//     </CardContent>
//   </Card>
// </section>
//       <section id="contact" className="mt-10 px-4 md:px-30 relative z-10">

//         <BackgroundLines>

//           <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-30 py-80 bg-amber-500 rounded-lg shadow-lg">
//             <div className="flex flex-col items-start text-left justify-center">

//             <h2 className="text-6xl font-bold text-red-600">Contact Me</h2>
//             <p className="text-xl text-white dark:text-gray-300">
//               Feel free to reach out through email or social platforms.
//             </p>
//             </div>

//             <div className="space-y-4 text-gray-800 dark:text-gray-200 mt-10 justify-center items-start bg-amber-100 bg-200% p-6 rounded-lg">
//               <div className="flex flex-wrap items-center gap-3 justify-start">
//                 <FaEnvelope className=" text-red-500 text-3xl" />
//                 <a
//                   href="mailto:zubairahmedkhan619@gmail.com"
//                   className="hover:underline text-gray-900 text-3xl"
//                 >
//                   zubairahmedkhan619@gmail.com
//                 </a>
//               </div>
//               <div className="flex items-center gap-3 justify-start">
//                 <FaWhatsapp className="text-3xl text-green-500" />
//                 <a
//                   href="https://wa.me/0544297485"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline text-gray-900 text-3xl"
//                 >
//                   +971 544297485
//                 </a>
//               </div>
//               <div className="flex items-center gap-3 text-center justify-start">
//                 <FaLinkedin className=" text-blue-600 text-3xl" />
//                 <a
//                   href="https://linkedin.com/in/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline text-gray-900 text-3xl"
//                 >
//                   linkedin.com/in/your-profile
//                 </a>
//               </div>
//             </div>
//           </div>
//         </BackgroundLines>

//         {/* </div> */}
//         {/* </Card> */}
//       </section>
//     </>
//   );
// }
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mt-20 px-4 md:px-30 ">
      {/* Intro Section */}
      <BackgroundLines>
        <section id="contact" className="mt-30  px-4 md:px-8">
          <Card className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
            <CardContent className="text-center">
              <CardTitle className="text-5xl font-bold text-white mb-4">
                <BackgroundLines
                  children
                  className="bg-transparent absolute rotate-60"
                />
                Get in Touch
              </CardTitle>
              <CardDescription className="text-white mb-6">
                I would love to hear from you! Whether you have a question, want
                to collaborate, or just want to say hi, feel free to reach out.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info Section */}
        <section className="mt-16 px-4 md:px-8 relative z-10">
          {/* <BackgroundLines> */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-8 bg-red-600 rounded-lg shadow-lg space-y-16 md:space-y-8">
            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-6 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
                Contact Me
              </h2>
              <p className="text-lg text-gray-900 text-center">
                Feel free to reach out through email or social platforms.
              </p>
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-center space-y-8 bg-white/90 p-6 rounded-lg shadow-md">
              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-2xl" />
                <a
                  href="mailto:zubairahmedkhan619@gmail.com"
                  className="text-xl text-gray-900 hover:underline"
                >
                  zubairahmedkhan619@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <a
                  href="https://wa.me/971544297485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:underline"
                >
                  +971 544297485
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-600 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/s-zubair-ahmed-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:underline"
                >
                  linkedin.com/in/ZubairAhmedKhan
                </a>
              </div>

              {/* Github */}
              <div className="flex items-center gap-4">
                <FaGithub className="text-gray-900 text-2xl" />
                <a
                  href="https://github.com/Zubairahmedkhan619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:underline"
                >
                  github.com/Zubairahmedkhan619
                </a>
              </div>
            </div>
          </div>
          {/* </BackgroundLines> */}
        </section>
      </BackgroundLines>
    </div>
  );
}
