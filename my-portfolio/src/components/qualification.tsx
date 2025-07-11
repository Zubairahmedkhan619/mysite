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
            <span className="text-red-600">Qualifications</span>{" "}
            {/* <span className="text-gray-300">&</span>{" "}
            <span className="text-black">Experience</span> */}
          </CardTitle>
        <CardDescription className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          My academic journey has equipped me with a solid foundation in
          computer science and computer application principles, preparing me for
          a successful career in web development & software development.
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
                  <CardTitle>SSLC Details</CardTitle>
                  <CardDescription>Details about SSLC go here.</CardDescription>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="HSC">
              <Card>
                <CardContent>
                  <CardTitle>HSC Details</CardTitle>
                  <CardDescription>Details about HSC go here.</CardDescription>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="UG">
              <Card>
                <CardContent>
                  <CardTitle>UG Details</CardTitle>
                  <CardDescription>Details about UG go here.</CardDescription>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="PG">
              <Card>
                <CardContent>
                  <CardTitle>PG Details</CardTitle>
                  <CardDescription>Details about PG go here.</CardDescription>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </section>
  );
}
