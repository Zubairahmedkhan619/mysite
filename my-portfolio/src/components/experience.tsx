
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Building, ChevronRightCircle, MapPin, Monitor } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-45 px-4 md:px-8">
      <Card className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-8 bg-gray-900 rounded-lg shadow-lg">
        {/* Left column - Heading */}
        <CardContent className="flex flex-col justify-center items-start text-left">
          <CardTitle className="text-4xl font-bold mb-6 text-white bg-blur">
            Experience
          </CardTitle>
          {/* Optional description below */}
          <p className="text-gray-300 max-w-md leading-relaxed">
            Here are some of my professional experiences and projects.
          </p>
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
                <span className="font-medium">
                  Abdullah Al Arif Investment Company
                </span>
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
                  using WordPress with Elementor and Bricks builders.
                  Additionally, built modern applications leveraging React,
                  Next.js, Node.js, and Supabase. Collaborated closely with the
                  design team to implement intuitive, user-friendly interfaces
                  that enhance user experience.
                </span>
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
