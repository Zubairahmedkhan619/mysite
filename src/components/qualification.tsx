import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { BackgroundBeams } from "./ui/background-beams";

export default function Qualification() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <Card className="w-full max-w-8xl mx-auto flex flex-col gap-8 p-6 md:p-10 relative overflow-hidden">
        {/* Beams inside Card, behind Tabs */}
        <div className="absolute inset-0 z-0 pointer-events-none rotate-180">
          {/* <BackgroundBeams /> */}
        </div>
        <div>
          <CardTitle className="text-4xl font-bold mb-6">
            <span className="text-red-600">
              Qualifications <span className="text-gray-900"> & </span>{" "}
              Academics{" "}
            </span>{" "}
          </CardTitle>
          <CardDescription className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            My academic journey has equipped me with a solid foundation in
            computer science and computer application principles, preparing me
            for a successful career in web development & software development.
          </CardDescription>
        </div>

        {/* Tabs content on top of beams */}
        <div className="relative z-10 w-full">
          <Tabs defaultValue="SSLC" className="w-full">
            <TabsList className="w-full justify-center flex flex-wrap gap-4 mb-6">
              <TabsTrigger
                value="SSLC"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                SSLC
              </TabsTrigger>
              <TabsTrigger
                value="HSC"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                HSC
              </TabsTrigger>
              <TabsTrigger
                value="UG"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                UnderGraduate
              </TabsTrigger>
              <TabsTrigger
                value="PG"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                PostGraduate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="SSLC">
              <Card>
                <CardContent>
                  <CardTitle className=" flex justify-between text-red-600 text-2xl mb-5">
                    
                    Secondary School Certificate (SSLC){" "}
                    <div>
                      {" "}
                      <p className="text-gray-500 justify-end items-end text-end text-xl ">
                        (
                        <span className=" text-red-600 text-xl font-extrabold">
                          {" "}
                          Year:{" "}
                        </span>
                        2016 )
                      </p>
                    </div>
                  </CardTitle>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      School Name :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      The British English Medium matric School
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Percentage :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      80%
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Place :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Trichy, Tamil Nadu, India
                    </p>
                  </div>
                  <p></p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="HSC">
              <Card>
                <CardContent>
                  <CardTitle className=" flex justify-between text-red-600 text-2xl mb-5">
                    Higher Secondary Certificate (HSC){" "}
                    <div>
                      {" "}
                      <p className="text-gray-500 justify-end items-end text-end text-xl ">
                        (
                        <span className=" text-red-600 text-xl font-extrabold">
                          {" "}
                          Year:{" "}
                        </span>
                        2016-2018 )
                      </p>
                    </div>
                  </CardTitle>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Major :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Computer Science
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      School Name :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Sri Jayendra Matriculation Higher Secondary School
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Percentage :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      75%
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Place :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Trichy, Tamil Nadu, India
                    </p>
                  </div>
                  <p></p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="UG">
              <Card>
                <CardContent>
                  <CardTitle className=" flex justify-between text-red-600 text-2xl mb-5">
                    Under Graduate (UG){" "}
                    <div>
                      {" "}
                      <p className="text-gray-500 justify-end items-end text-end text-xl ">
                        (
                        <span className=" text-red-600 text-xl font-extrabold">
                          {" "}
                          Year:{" "}
                        </span>
                        2018 -2021 )
                      </p>
                    </div>
                  </CardTitle>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Degree :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Bsc. Computer Science
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      College:{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Jamal Mohamed College
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Percentage :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      72%
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Place :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Trichy, Tamil Nadu, India
                    </p>
                  </div>
                  <p></p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="PG">
              <Card>
                <CardContent>
                  <CardTitle className=" flex justify-between text-red-600 text-2xl mb-5">
                    Post Graduate (PG){" "}
                    <div>
                      {" "}
                      <p className="text-gray-500 justify-end items-end text-end text-xl ">
                        (
                        <span className=" text-red-600 text-xl font-extrabold">
                          {" "}
                          Year:{" "}
                        </span>
                        2022 - 2024 )
                      </p>
                    </div>
                  </CardTitle>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Degree :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Master of Computer Application (MCA)
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      College :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Jamal Mohamed College
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Percentage :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      75%
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <h3 className="text-gray-900 text-xl font-extrabold ">
                      {" "}
                      Place :{" "}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-xl">
                      Trichy, Tamil Nadu, India
                    </p>
                  </div>
                  <p></p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </section>
  );
}
