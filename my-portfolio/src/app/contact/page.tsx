import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <Card className="max-w-7xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
        <CardContent className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-gray-300 mb-6">
            I would love to hear from you! Whether you have a question, want to
            collaborate, or just want to say hi, feel free to reach out.
          </CardDescription>
          {/* Add contact form or details here */}
        </CardContent>
      </Card>
      <Card className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <BackgroundLines className="absolute inset-0 z-0 pointer-events-none opacity-10" >
            <CardContent className="relative z-10 text-center">
                <CardTitle className="text-2xl font-semibold mb-4">
                Contact Information
                </CardTitle>
                <p className="text-gray-700 mb-2">Email:</p>
                <a href="mailto:"
                     className="text-blue-600 hover:underline">
                </a>
                <p className="text-gray-700 mb-2">Phone:</p>
                <a href="tel:+1234567890" className="text-blue-600
                hover:underline">
                  +123 456 7890
                </a>
                <p className="text-gray-700 mb-2">LinkedIn:</p>
                <a href="https://www.linkedin.com/in/your-profile/" className="text-blue-
                600 hover:underline">
                    https://www.linkedin.com/in/your-profile/
                    </a>
                
            </CardContent>
        </BackgroundLines>

      </Card>
    </section>
  );
}