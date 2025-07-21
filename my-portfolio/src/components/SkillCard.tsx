

"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CircleX, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";

const skillCards = [
  {
    title: "Frontend Expertise",
    description: "HTML, CSS, JavaScript, React.js, Figma, WordPress",
    content: () => (
      <>
        <p className="mb-4">
          I specialize in building responsive and accessible websites using HTML,
          CSS, and JavaScript. My proficiency with React.js enables me to create
          dynamic interfaces. I also work with Figma for translating designs into
          clean, functional layouts and use WordPress for content-driven projects.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Figma", color: "bg-purple-500" },
            { label: "WordPress", color: "bg-blue-600" },
            { label: "HTML", color: "bg-orange-500" },
            { label: "CSS", color: "bg-sky-500" },
            { label: "JavaScript", color: "bg-yellow-400 text-black" },
            { label: "React.js", color: "bg-cyan-500" },
          ].map((badge) => (
            <Badge key={badge.label} className={badge.color}>
              {badge.label}
            </Badge>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "Backend Expertise",
    description: "Node.js, Express.js, MySQL, Supabase, Oracle APEX",
    content: () => (
      <>
        <p className="mb-4">
          I develop secure and scalable backend services with Node.js and
          Express.js. I use MySQL and Supabase for data management and Oracle APEX
          for enterprise-grade solutions. My focus is on building performant,
          maintainable APIs and systems.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Node.js", color: "bg-green-600" },
            { label: "Express.js", color: "bg-gray-700" },
            { label: "MySQL", color: "bg-yellow-600 text-black" },
            { label: "Supabase", color: "bg-emerald-500" },
            { label: "Oracle APEX", color: "bg-red-600" },
          ].map((badge) => (
            <Badge key={badge.label} className={badge.color}>
              {badge.label}
            </Badge>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "What Sets Me Apart",
    description: "Problem Solving, Collaboration, Full-Stack Mindset",
    content: () => (
      <p>
        I’m committed to continuous learning and team-driven development. My
        full-stack capabilities help bridge frontend and backend to deliver
        seamless digital experiences that are user-focused and efficient.
      </p>
    ),
  },
];

export default function SkillCards() {
  const [active, setActive] = useState<(typeof skillCards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // useOutsideClick(ref, () => setActive(null));
  

  return (
    <>
     

      <div className="space-y-4">
  {skillCards.map((card) => {
    const isActive = active?.title === card.title;

    return (
      <motion.div
        key={card.title}
        layout
        onClick={() =>
          setActive(isActive ? null : card) // toggle on second click
        }
        className={`cursor-pointer p-4 bg-gray-50 dark:bg-neutral-800 hover:border-red-100 dark:hover:bg-neutral-700 rounded-lg shadow-sm transition flex flex-col gap-2 ${
          isActive ? "ring-2 ring-red-500" : ""
        }`}
      >
        {/* Header Row */}
        <div className="flex items-center gap-2">
          <ChevronRight
            className={`h-5 w-5 transition-transform duration-200 ${
              isActive ? "rotate-90 text-red-500" : "text-red-500"
            }`}
          />
          <h4
            className={`text-lg font-semibold transition-colors ${
              isActive ? "text-red-500" : "text-gray-900 dark:text-white"
            }`}
          >
            {card.title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {card.description}
        </p>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 text-gray-700 dark:text-gray-300 overflow-hidden"
            >
              {typeof card.content === "function" ? card.content() : card.content}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  })}
</div>


    </>
  );
}
