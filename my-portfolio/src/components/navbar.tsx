"use client";
import React, { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "./ui/resizable-navbar";
// import {
//   MobileNav,
//   MobileNavHeader,
//   MobileNavMenu,
//   MobileNavToggle,
//   Navbar,
//   NavbarButton,
//   NavBody,
//   NavItems,
// } from "@/components/ui/resizable-navbar";

export default function NewNavbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-background/80 border-b border-muted">
      <Navbar className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-2">
        {/* Desktop Nav */}
        <NavBody className="flex items-center justify-between w-full">
          <NavItems items={navItems} />
          <div className="hidden md:flex items-center gap-4 ml-auto">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <NavbarButton variant="primary" className=" bg-red-600 text-white">
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="space-y-4 px-6 pb-6"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition"
              >
                {item.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4 border-t border-muted mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
