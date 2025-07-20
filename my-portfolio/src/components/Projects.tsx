import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 ">
      <Card className="max-w-8xl mx-auto p-6 md:p-10 ">
        <CardTitle className="text-4xl font-bold text-red-600">
          Projects
        </CardTitle>
        <CardDescription className="text-lg text-gray-700 mb-6">
          Here are some of the projects I have worked on, showcasing my skills
          in web development and design.
        </CardDescription>
        {/* <Card className="max-w-8xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 p-6 md:p-10  border-0 shadow-none"> */}
        <Card className="max-w-12xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10 border-0 shadow-none">
          {/* first card-1 */}

          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-red-100 rotate-180 ">
            {/* Add your card content here */}
            <Card className="rotate-180">
              <CardContent>
                <a
                  href="https://naresco.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Naresco.png"
                    alt="Project Image"
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-fit rounded-lg mb-4 border-2 border-black"
                  />
                </a>
              </CardContent>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                  Naresco Website
                </CardTitle>

                <CardDescription className="text-gray-700 font-medium">
                  Redesign and redevelopment of the current Naresco website
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="default"
                    className="bg-red-600 text-white m-5 "
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <a
                      href="https://naresco.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DialogTitle className="text-2xl font-bold text-red-600 mb-1">
                        Naresco Website
                      </DialogTitle>
                    </a>
                    <span className="text-sm text-gray-500 ">
                      <a
                        href="https://naresco.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xl font-semibold"
                      >
                        https://naresco.ae
                      </a>
                    </span>
                    <CardDescription className="text-gray-700 font-medium mt-2">
                      Redesign and redevelopment of the current Naresco website{" "}
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      This project involved a complete overhaul of the existing
                      Naresco website, focusing on modern design principles and
                      improved user experience. The new site features a
                      responsive layout, enhanced navigation, and updated
                      content to better serve the needs of its users.
                    </CardDescription>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-cyan-600 text-white mr-2 mb-2 p-2">
                      Worpress
                    </Badge>
                    <Badge className="bg-orange-600 text-white mr-2 mb-2 p-2">
                      Elementor
                    </Badge>
                    <Badge className="bg-green-600 text-white mr-2 mb-2 p-2">
                      Translate Press
                    </Badge>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>

          {/* second card-2 */}

          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-blue-100 rotate-180 ">
            {/* Add your card content here */}
            <Card className="rotate-180">
              <CardContent>
                <Image
                  src="/itims.png"
                  alt="Project Image"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-fit rounded-lg mb-4 border-2 border-black"
                />
              </CardContent>
              <CardContent>
                {/* <a
                  href="https://naresco.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                  ITIMS Application
                </CardTitle>
                {/* </a> */}
                <CardDescription className="text-gray-700 font-medium">
                  ITIMS: IT Inventory Management System{" "}
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="default"
                    className="bg-red-600 text-white m-5"
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    {/* <a
                      href="https://naresco.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                    > */}
                    <DialogTitle className="text-2xl font-bold text-red-600 m-1">
                      ITIMS: IT Inventory Management System
                    </DialogTitle>
                    {/* </a> */}
                    {/* <span className="text-sm text-gray-500 ">
                      <a
                        href="https://itims.aaai.ae/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xl font-semibold"
                      >
                        https://itims.aaai.ae/
                      </a>
                    </span> */}
                    <span className="text-sm text-gray-500 ">
                      https://itims.aaai.ae/ {"(Internal application)"}
                    </span>

                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      The IT Inventory Management System is a comprehensive
                      solution designed to streamline the management of hardware
                      and software assets for AAAI’s IT department. The system
                      will provide a centralized platform for tracking,
                      assigning, and monitoring IT resources, enhancing
                      efficiency and accountability in asset management.
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      The IT Inventory Management System will be used to: Add
                      and catalog hardware and software licenses Assign assets
                      to specific users or departments Track asset location and
                      status using QR codes Generate reports and visualize
                      inventory data Access inventory information via mobile
                      devices or web browsers
                    </CardDescription>
                  </div>
                  <h2 className="font-semibold "> Tech Stack Used :</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "React", color: "bg-yellow-600 text-black p-2" },
                      { label: "Shadcn", color: "bg-purple-600" },
                      { label: "Tanstack table", color: "bg-gray-700" },
                      { label: "Expresss.js", color: "bg-red-600" },
                      { label: "Firebase", color: "bg-orange-500" },
                      { label: "Clerk", color: "bg-blue-500" },
                    ].map((badge) => (
                      <Badge key={badge.label} className={badge.color}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>

          {/* third card-3 */}

          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-yellow-100 rotate-180">
            {/* Add your card content here */}
            <Card className="rotate-180">
              <CardContent>
                <a
                  href="https://www.daytonaproperties.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/daytonahome.png"
                    alt="Project Image"
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-fit rounded-lg mb-4 "
                  />
                </a>
              </CardContent>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                  Daytona Properties
                </CardTitle>

                <CardDescription className="text-gray-700 font-medium">
                  daytona Properties is a real estate company
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="default"
                    className="bg-red-600 text-white m-5 "
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <a
                      href="https://www.daytonaproperties.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DialogTitle className="text-2xl font-bold text-red-600 m-1">
                        Daytona Properties Website
                      </DialogTitle>
                    </a>
                    <span className="text-sm text-gray-500 ">
                      <a
                        href="https://www.daytonaproperties.ae/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xl font-semibold"
                      >
                        https://www.daytonaproperties.ae/
                      </a>
                    </span>
                    {/* <span className="text-sm text-gray-500 ">(Internal application)</span> */}

                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      Daytona Properties is a real estate company that
                      specializes in buying, selling, and renting properties in
                      Dubai. Our mission is to provide exceptional service and
                      expertise to our clients, helping them navigate the
                      dynamic real estate market with confidence.
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      creations of properties details and off-plans on daytona
                      properties website, focusing on modern design principles
                      and improved user experience. The site features a
                      responsive layout, enhanced navigation, and updated
                      content to better serve the needs of its users.
                    </CardDescription>
                  </div>
                  <h2 className="font-semibold "> Tech Stack Used :</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        label: "React",
                        color: " bg-orange-500 text-black p-2",
                      },
                      { label: "Shadcn", color: "bg-purple-600 bg-blue-500" },
                      { label: "Tanstack table", color: "bg-gray-700" },
                      { label: "Expresss.js", color: "bg-red-600" },
                      { label: "Firebase", color: "bg-yellow-600" },
                      { label: "Clerk", color: "bg-purple-600" },
                    ].map((badge) => (
                      <Badge key={badge.label} className={badge.color}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>

          {/* fourth card-4 */}

          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-purple-100 rotate-180 ">
            {/* Add your card content here */}
            <Card className="rotate-180">
              <CardContent>
                <Image
                  src="/proguardhome.png"
                  alt="Project Image"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-fit rounded-lg mb-4"
                />
              </CardContent>
              <CardContent>
                <a
                  href="https://proguard.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardTitle className="text-xl font-semibold mb-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                    proguard Website
                  </CardTitle>
                </a>
                <CardDescription className="text-gray-700 font-medium">
                  Redesign and redevelopment of the proguard website
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="default"
                    className="bg-red-600 text-white m-5"
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <a
                      href="https://proguard.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DialogTitle className="text-2xl font-bold text-red-600 mb-1">
                        proguard Website
                      </DialogTitle>
                    </a>
                    <span className="text-sm text-gray-500 ">
                      <a
                        href="https://proguard.ae/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xl font-semibold"
                      >
                        https://proguard.ae/
                      </a>
                    </span>
                    <CardDescription className="text-gray-700 font-medium mt-2">
                      Redesign and redevelopment of the current proguard website{" "}
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      This project involved a complete overhaul of the existing
                      proguard website, focusing on modern design principles and
                      improved user experience. The new site features a
                      responsive layout, enhanced navigation, and updated
                      content to better serve the needs of its users.
                    </CardDescription>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-cyan-600 text-white mr-2 mb-2 p-2">
                      Worpress
                    </Badge>
                    <Badge className="bg-orange-600 text-white mr-2 mb-2 p-2">
                      Elementor
                    </Badge>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>
          {/* fifth card-5 */}

          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-green-100 rotate-180 ">
            {/* Add your card content here */}
            <Card className="rotate-180">
              <CardContent>
                <a
                  href="http://admin.wpa.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/wpaportal.png"
                    alt="Project Image"
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-contain rounded-lg mb-4 border-1 border-black/20"
                  />
                </a>
              </CardContent>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                  WPA Portals
                </CardTitle>
                <CardDescription className="text-gray-700 font-medium">
                  The new tracking platform for WPA
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="default"
                    className="bg-red-600 text-white m-5"
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-red-600 mb-1">
                      WPA Portals
                    </DialogTitle>

                    <span className="text-sm text-gray-500 ">
                      http://admin.wpa.ae/ {"(Internal application)"}
                    </span>

                    <CardDescription className="text-gray-900 mt-2 font-medium">
                      web portal for WPA to track sessions, starting from
                      reception data entry, and all the way to admin overview of
                      all the data.
                    </CardDescription>
                    <CardDescription className="text-gray-900 mt-2 font-medium">
                      The platform will consist of 3 portals:
                      <br />
                      <strong>Reception Portal</strong>, this is where all the
                      data entry will be.
                      <br />
                      <strong>Admin Portal</strong>, where WPA admins can get an
                      overview of all the sessions and all the coaches'
                      performances.
                      <br />
                      <strong>Coaches Portal</strong>, where the coaches will
                      get an overview of their salaries, how it's calculated,
                      and detailed per-day session data.
                    </CardDescription>
                  </div>
                  <h2 className="font-semibold "> Tech Stack Used :</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        label: "React",
                        color: " bg-orange-500 text-black p-2",
                      },
                      { label: "Nextjs", color: "bg-red-600" },
                      { label: "Shadcn", color: "bg-purple-600 bg-blue-500" },
                      { label: "Re-Charts", color: "bg-yellow-600" },
                      { label: "Tanstack table", color: "bg-gray-700" },
                      { label: "Supabase", color: "bg-purple-600" },
                    ].map((badge) => (
                      <Badge key={badge.label} className={badge.color}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>

          {/* sixth card-6 */}

          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-orange-100 rotate-180 ">
            {/* Add your card content here */}
            <Card className="rotate-180">
              <CardContent>
                <a
                  href="https://wpa.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/wpahome.png"
                    alt="Project Image"
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-contain rounded-lg mb-4 border-1 "
                  />
                </a>
              </CardContent>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                  WPA Website
                </CardTitle>
                <CardDescription className="text-gray-700 font-medium">
                  World Padel Academy (WPA) is the Padel Tennis operator{" "}
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="default"
                    className="bg-red-600 text-white m-5 "
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <a
                      href="https://wpa.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DialogTitle className="text-2xl font-bold text-red-600 mb-1">
                        WPA (UAE Website)
                      </DialogTitle>
                    </a>
                    <span className="text-sm text-gray-500 ">
                      <a
                        href="https://wpa.ae/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xl font-semibold"
                      >
                        https://wpa.ae/
                      </a>
                    </span>
                    <CardDescription className="text-gray-700 font-medium mt-2">
                      handling and adding of new tournaments and events of the
                      WPA{" "}
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      WPA (UAE) is the Padel Tennis operator in the UAE,
                      responsible for managing and handling and adding of new
                      tournaments and events of the WPA and there are six venues
                      in UAE
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      there are websites for
                      <div className="gap-2">
                        <a
                          href="https://wpa.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:underline m-1 font-medium "
                        >
                          Dubai,
                        </a>
                        <a
                          href="https://wpa.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline m-1 font-medium "
                        >
                          Abu Dhabi,
                        </a>

                        <a
                          href="https://wpa.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline m-1 font-medium "
                        >
                          Bahrain,
                        </a>

                        <a
                          href="https://wpa.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:underline font-medium m-1"
                        >
                          Sharjah,
                        </a>
                        <a
                          href="https://wpa.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline font-medium m-1"
                        >
                          UK
                        </a>
                      </div>
                      handles the respective tournaments and events.
                    </CardDescription>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-cyan-600 text-white mr-2 mb-2 p-2">
                      Worpress
                    </Badge>
                    <Badge className="bg-orange-600 text-white mr-2 mb-2 p-2">
                      Elementor
                    </Badge>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>

          {/* CARD-7 */}
          <WobbleCard containerClassName="max-w-5xl mx-auto  bg-gray-900 rotate-180 ">
            {/* Add your card content here */}
            <Card className="rotate-180 bg-black border-0 ">
              <CardContent>
                <Image
                  src="/home6.jpg"
                  alt="Project Image"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-fit rounded-lg mb-4 border-2 border-black"
                />
              </CardContent>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2 text-white hover:text-red-600 transition-colors duration-300">
                  Current Learning
                </CardTitle>
                <CardDescription className="text-gray-400 font-medium">
                  React native
                </CardDescription>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild className="mt-4">
                  <Button
                    variant="ghost"
                    className="bg-red-600 text-white m-5 "
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <CardTitle className="text-gray-700 font-semibold mt-2 text-xl">
                      Creating Mobile application
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2 font-medium">
                      As start to learing new things to upgrade my skill. I am
                      learning how to create mobile application using react
                      native. Learning how to create a simple application using
                      Expo and React Native.
                    </CardDescription>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-orange-600 text-white mr-2 mb-2 p-2">
                      React Native
                    </Badge>
                    <Badge className="bg-gray-900 text-white mr-2 mb-2 p-2">
                      Expo APP
                    </Badge>
                    <Badge className="bg-cyan-400 text-white mr-2 mb-2 p-2">
                      node js
                    </Badge>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </WobbleCard>
        </Card>
      </Card>
    </section>
  );
}
