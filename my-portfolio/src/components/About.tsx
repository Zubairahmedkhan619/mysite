"use client";

import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { HoverEffect } from "./ui/card-hover-effect"; // Assuming this is used elsewhere
import { MaskContainer } from "./ui/svg-mask-effect"; // Not currently used
import SkillCards from "./SkillCard";
import { FloatingDock } from "./ui/floating-dock";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-50 px-4 md:px-8">
      <Card className=" max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 py-50 ">
        <CardContent className="flex flex-col items-start text-left justify-center">
          <CardHeader className="p-0">
            <h2 className="text-4xl font-bold mb-4 text-red-600 whitespace-nowrap">
              About Me
            </h2>
          </CardHeader>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10">
            As a Web Developer, I'm passionate about learning and creating
            intuitive and engaging digital experiences. With a foundation in
            both frontend and backend development, I bring a full-stack approach
            to web projects that ensures seamless performance, functionality,
            and aesthetic appeal.
          </p>
          <div>

          <FloatingDock 
            items={[
              {
                title: "Mail",
                icon: <FaEnvelope />,
                href: "mailto:zubairahmedkhan619@gmail.com",
              },
              {
                title: "GitHub",
                icon: <FaGithub />,
                href: "https://github.com/zubairahmedkhan619",
              },
              {
                title: "LinkedIn",
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/zubairahmedkhan619/",
              },
            ]}
            mobileClassName="translate-y-20"
            />

          {/* </FloatingDock> */}
            </div>
        </CardContent>

        {/* RIGHT SIDE – SKILL CARDS */}
        <CardContent>
          <SkillCards />
        </CardContent>
      </Card>
    </section>
  );
}
