"use client";
import React, { useState, MouseEvent } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "../../utils/utils";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Function to scroll to the specific section smoothly
  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align at the top of the viewport
      });
    }
  };
  return (
    <div
      className={cn(
        "fixed top-0 w-full  z-[1000]  border border-transparent bg-transparent backdrop-blur-md ",
        className
      )}
    >
      <div className="max-w-7xl mx-auto  flex items-center justify-between px-4 py-3 md:py-0">
        <div>
          <h2
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth scrolling to top
              });
            }}
            className="select-none text-2xl whitespace-nowrap md:text-3xl font-bold text-red-600 hover:cursor-pointer"
          >
            𝕾 𝖍 𝖆 𝖘 𝖍 𝖛 𝖆 𝖙
          </h2>
        </div>

        <div className="md:hidden">
          <IoMenuSharp
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            <HoveredLink
              href="#experties"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(e, "experties")
              }
            >
              Experties
            </HoveredLink>
            <HoveredLink
              href="#experience"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(e, "experience")
              }
            >
              Experience
            </HoveredLink>
            <HoveredLink
              href="#projects"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(e, "projects")
              }
            >
              Projects
            </HoveredLink>
            <HoveredLink
              href="#skills"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(e, "skills")
              }
            >
              Skills
            </HoveredLink>
            <HoveredLink
              href="#contact"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                scrollToSection(e, "contact")
              }
            >
              Contact
            </HoveredLink>
          </Menu>
        </div>
      </div>

      {/* Sliding Menu */}
      {menuOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ x: "100%" }} // Start completely off-screen to the right
            animate={{ x: "calc(100% - 250px)" }} // Slide in and stay at 200px width
            exit={{ x: "100%" }} // Slide out back to the right
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0  z-[1000] flex flex-col h-screen w-[250px] bg-gray-950 backdrop-blur-md"
          >
            {/* Close Icon */}
            <div className="py-4 pl-8">
              <IoClose
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-white cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-start space-y-6 mt-10  pl-8 ">
              <HoveredLink
                href="#experties"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "experties");
                  setMenuOpen(false); // Close menu on link click
                }}
              >
                Experties
              </HoveredLink>
              <HoveredLink
                href="#experience"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "experience");
                  setMenuOpen(false); // Close menu on link click
                }}
              >
                Experience
              </HoveredLink>
              <HoveredLink
                href="#projects"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "projects");
                  setMenuOpen(false); // Close menu on link click
                }}
              >
                Projects
              </HoveredLink>
              <HoveredLink
                href="#skills"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "skills");
                  setMenuOpen(false); // Close menu on link click
                }}
              >
                Skills
              </HoveredLink>
              <HoveredLink
                href="#contact"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "contact");
                  setMenuOpen(false); // Close menu on link click
                }}
              >
                Contact
              </HoveredLink>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

{
  /* <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem> */
}
