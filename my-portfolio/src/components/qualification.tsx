import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { BackgroundLines } from "./ui/background-lines";
import { BackgroundBeams } from "./ui/background-beams";

export default function Qualification() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <Card className=" flex w-full  flex-col gap-8 p-6 md:p-8 ">
        <Tabs className="items-center ">
          {/* <BackgroundLines> */}

          <TabsList className="w-[90%]  active:bg-red-500 text-white">
            <TabsTrigger value="SSLC"> SSLC</TabsTrigger>
            <TabsTrigger value="HSC"> HSC</TabsTrigger>
            <TabsTrigger value="UG">UnderGraduate</TabsTrigger>
            <TabsTrigger value="PG">PostGraduate</TabsTrigger>
          </TabsList>
          <TabsContent value="SSLC">
            <Card className="max-w-10xl">
              <CardContent>
                <CardTitle className="w-full">test1</CardTitle>
                <CardDescription>123</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="HSC">
            <Card>
              <CardContent>
                <CardTitle className="w-full">test1</CardTitle>
                <CardDescription>123</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="UG">
            <Card>
              <CardContent>
                <CardTitle className="w-full">test1</CardTitle>
                <CardDescription>123</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="PG">
            <Card>
              <CardContent>
                <CardTitle className="w-full">test1</CardTitle>
                <CardDescription>123</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          {/* <BackgroundLines> */}
          {/* <BackgroundBeams/> */}
        </Tabs>
      </Card>
    </section>
  );
}
