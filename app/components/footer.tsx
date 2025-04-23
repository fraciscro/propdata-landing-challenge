import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Navigation links data with proper routing
  const navigationLinks = {
    Solutions: [
      { name: "CRM", href: "/solutions/crm" },
      { name: "AI Engine", href: "/solutions/ai-engine" },
      { name: "Services", href: "/solutions/services" },
      { name: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { name: "Updates", href: "/updates" },
      { name: "Github", href: "https://github.com" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
    Company: [
      { name: "Story", href: "/company/story" },
      { name: "Careers", href: "/company/careers" },
      { name: "Customers", href: "/company/customers" },
    ],
  };

  return (
    <footer className="w-full bg-[#121212] py-12 md:py-[72px] px-4 md:px-24 relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Main content wrapper */}
        <div className="relative">
          {/* Navigation columns */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-0">
            {/* Navigation links */}
            {Object.entries(navigationLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col items-start gap-6">
                <h3 className="font-medium text-neutral-50 text-base tracking-[-0.48px] leading-4">
                  {category}
                </h3>
                <div className="flex flex-col items-start gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="font-normal text-[#616161] text-base tracking-[-0.48px] leading-4 hover:text-neutral-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Newsletter subscription */}
            <div className="md:ml-auto w-full md:w-auto">
              <div className="flex h-12 items-center">
                <div className="relative flex items-center w-full md:w-[400px]">
                  <Input
                    className="h-12 pl-4 pr-24 py-2 bg-transparent border border-[#2b2b2b] text-[#616161] text-sm tracking-[-0.42px] leading-[14.7px] rounded-none"
                    placeholder="Enter your email"
                  />
                  <Button className="absolute right-0 h-12 px-4 py-2 bg-white hover:bg-white/90 text-black border border-solid border-white font-medium text-sm tracking-[-0.42px] leading-[14.7px] rounded-none">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-4 justify-center md:justify-start md:absolute md:top-20 md:right-0 mt-8 md:mt-0">
            <a
              href="#"
              className="text-[#616161] hover:text-white transition-colors"
            >
              <Twitter className="w-[22px] h-[22px]" />
            </a>
            <a
              href="#"
              className="text-[#616161] hover:text-white transition-colors"
            >
              <Github className="w-[22px] h-[22px]" />
            </a>
            <a
              href="#"
              className="text-[#616161] hover:text-white transition-colors"
            >
              <Linkedin className="w-[22px] h-[22px]" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-8 md:my-16 bg-[#2b2b2b]" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center">
            <Image
              src="/mobile-logo.svg"
              alt="Propdata"
              width={121}
              height={18}
              priority
            />
          </div>
          <div className="font-medium text-neutral-50 text-base md:text-l tracking-[-0.60px] leading-5 text-center md:text-left">
            New horizons for your property data.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
