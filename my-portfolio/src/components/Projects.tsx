import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

export default function Projects() {
    return (
    //   <BackgroundGradientAnimation>
    <section id="projects" className="py-20 px-4 md:px-8 ">
         {/* < div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <Card className="max-w-8xl mx-auto p-6 md:p-10">
            <CardTitle className="text-4xl font-bold text-red-600">Projects</CardTitle>
            <CardDescription className="text-lg text-gray-700 mb-6">
                Here are some of the projects I have worked on, showcasing my skills in web development and design.
            </CardDescription>
      <Card className="max-w-8xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 p-6 md:p-10">

        <WobbleCard containerClassName="max-w-4xl mx-auto  bg-red-600 rotate-180">
          {/* Add your card content here */}
          <Card className="rotate-180">
            <CardContent>
              <Image
                src="/home3.jpg"
                alt="Project Image"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
            </CardContent>
            <CardContent>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Project description goes here.</CardDescription>
            </CardContent>
          </Card>
        </WobbleCard>
        <WobbleCard containerClassName="max-w-4xl mx-auto bg-cyan-500">
          <Card>
            <CardContent>
              <Image
                src="/home3.jpg"
                alt="Project Image"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
            </CardContent>
            <CardContent>
              <CardTitle>Another Project Title</CardTitle>
              <CardDescription>
                Another project description goes here.
              </CardDescription>
            </CardContent>
          </Card>
        </WobbleCard>
        <WobbleCard containerClassName="max-w-4xl mx-auto bg-gray-900 rotate-180">
          <Card className="rotate-180">
            <CardContent>
              <Image
                src="/home3.jpg"
                alt="Project Image"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
            </CardContent>
            <CardContent>
              <CardTitle>Another Project Title</CardTitle>
              <CardDescription>
                Another project description goes here.
              </CardDescription>
            </CardContent>
          </Card>
        </WobbleCard>
        <WobbleCard containerClassName="max-w-4xl mx-auto bg-blue-600 rotate-180">
          <Card className="rotate-180">
            <CardContent >
              <Image
                src="/home3.jpg"
                alt="Project Image"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
            </CardContent>
            <CardContent>
              <CardTitle>Another Project Title</CardTitle>
              <CardDescription>
                Another project description goes here.
              </CardDescription>
            </CardContent>
          </Card>
        </WobbleCard>
        <WobbleCard containerClassName="max-w-4xl mx-auto bg-green-600 rotate-180">
          <Card className="rotate-180">
            <CardContent>
              <Image
                src="/home3.jpg"
                alt="Project Image"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
            </CardContent>
            <CardContent>
              <CardTitle>Another Project Title</CardTitle>
              <CardDescription>
                Another project description goes here.
              </CardDescription>
            </CardContent>
          </Card>
        </WobbleCard>
        <WobbleCard containerClassName="max-w-4xl mx-auto bg-purple-500 rotate-180">
          <Card className="rotate-180">
            <CardContent>
              <Image
                src="/home3.jpg"
                alt="Project Image"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
            </CardContent>
            <CardContent>
              <CardTitle>Another Project Title</CardTitle>
              <CardDescription>
                Another project description goes here.
              </CardDescription>
            </CardContent>
          </Card>
        </WobbleCard>
      
    </Card>
      </Card>
      {/* </div> */}

    </section>
                // </BackgroundGradientAnimation>
  );
}
