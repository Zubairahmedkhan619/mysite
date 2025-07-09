
"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16">
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-6 md:p-8 max-w-7xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl w-full">
        
        {/* Left side - Text */}
        <CardContent className="flex flex-col items-start justify-center space-y-4 p-2">
          <div className="w-full flex flex-col ">
            {/* First line */}
            <TypewriterEffectSmooth
              words={[{ text: "Hi there," }]}
              className="text-3xl md:text-4xl w-full"
              cursorClassName="h-8"
            />
            {/* Second line */}
            <TypewriterEffectSmooth
              words={[
                { text: "I'm" },
                { text: "Zubair", className: "text-red-600" },
                { text: "Ahmed", className: "text-red-600" },
                { text: "Khan", className: "text-red-600" },
              ]}
              className="text-3xl md:text-4xl w-full"
              cursorClassName="h-8"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Full-stack Developer
          </h1>

          <CardDescription className="text-base md:text-lg text-gray-700 leading-relaxed">
           I'm a passionate and driven Full-Stack Developer dedicated to crafting intuitive, user-friendly digital experiences.
            I strive to create efficient, high-quality software solutions that meet the needs of both clients and end-users. 
           Let’s work together to bring your next project to life and build something great.
          </CardDescription>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              variant="default"
              className="flex items-center hover:bg-red-600 hover:text-white "
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 border-red-600 text-red-500 hover:bg-red-40 transition-colors"
            >
              View Projects
            </Button>
          
          </div>
            <div className="border-l border-gray-500 mx-4">

                <div className="flex items center gap-2 w-full mt-10" >
                    <div className="bg-amber-200 justify-center items-center align-center">
                        <h2 className=" text-3xl md:text-4xl font-bold text-red-600 mb-6">
                            test
                        </h2>
                        <span className="text-2xl text-center justify-center items-center align-center">123</span>
                    </div>
                     <div className="bg-amber-200 justify-center items-center align-center">
                        <h2 className=" text-3xl md:text-4xl font-bold text-red-600 mb-6">
                            test
                        </h2>
                        <span className="text-2xl text-center justify-center items-center align-center">123</span>
                    </div>
                     <div className="bg-amber-200 justify-center items-center align-center">
                        <h2 className=" text-3xl md:text-4xl font-bold text-red-600 mb-6">
                            test
                        </h2>
                        <span className="text-2xl text-center justify-center items-center align-center">123</span>
                    </div>
                     
                </div>
            </div>

        </CardContent>

        {/* Right side - Image */}
        <CardContent className="flex items-center justify-center p-4">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src="/images/hero-image.jpg"
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
