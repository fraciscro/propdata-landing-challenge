"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
// Animation variants for the mobile menu
const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false); // Controls mobile menu visibility
  const [showBlur, setShowBlur] = useState(false); // Controls blur effect for dropdowns
  const [hidden, setHidden] = useState(false); // Controls dropdown visibility
  const lastPath = `/${pathname.split("/").pop()}`;

  // Handles pixel ratio for responsive design
  useEffect(() => {
    const setPixelRatio = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      document.documentElement.style.setProperty(
        "--pixel-ratio",
        `${1 / pixelRatio}`
      );
    };

    setPixelRatio();
    window.addEventListener("resize", setPixelRatio);

    return () => window.removeEventListener("resize", setPixelRatio);
  }, []);

  // Toggles mobile menu and prevents body scroll when open
  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  };

  // Handles dropdown visibility and blur effect
  const handleOnClick = () => {
    setShowBlur(false);
    setHidden(true);

    setTimeout(() => {
      setHidden(false);
    }, 100);
  };

  // Service cards data
  const serviceCards = [
    {
      title: "CRM",
      description: "AI-Powered platform",
      backgroundImage: "/rectangle-61.png",
      path: "/solutions/crm",
    },
    {
      title: "AI engine",
      description: "Actionable insights",
      backgroundImage: "/rectangle-62.png",
      path: "/solutions/ai-engine",
    },
    {
      title: "Services",
      description: "Scaling your business",
      backgroundImage: "/rectangle-63.png",
      path: "/solutions/services",
    },
  ];

  // Company cards data
  const companyCards = [
    {
      title: "Story",
      description: "Meet the team",
      backgroundImage: "/rectangle-65.png",
      path: "/company/story",
    },
    {
      title: "Careers",
      description: "Join us",
      backgroundImage: "/rectangle-66.png",
      path: "/company/careers",
    },
    {
      title: "Customers",
      description: "Meet the experts",
      backgroundImage: "/rectangle-67.png",
      path: "/company/customers",
    },
  ];

  // Navigation links configuration
  // Each item can have a direct path or children for dropdowns
  const links = [
    {
      title: "Solutions",
      children: [
        {
          path: "/solutions/crm",
          title: "CRM",
        },
        {
          path: "/solutions/ai-engine",
          title: "AI engine",
        },
        {
          path: "/solutions/services",
          title: "Services",
        },
      ],
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Updates",
      path: "/updates",
    },
    {
      title: "Company",
      children: [
        {
          path: "/company/story",
          title: "Story",
        },
        {
          path: "/company/careers",
          title: "Careers",
        },
        {
          path: "/company/customers",
          title: "Customers",
        },
      ],
    },
  ];

  return (
    <header className="sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
      {/* Main navigation bar */}
      <nav className="flex justify-between border border-border px-4 md:flex items-center backdrop-filter backdrop-blur-xl bg-[#FFFFFF] dark:bg-[#121212] bg-opacity-70 h-[50px] z-20 relative">
        {/* Logo */}
        <ContextMenu>
          <ContextMenuTrigger>
            <Link href="/">
              <Image
                src="/mobile-logo.svg"
                alt="PropData Logo"
                width={121}
                height={18}
                className="h-[18px] w-[121px] md:hidden"
              />
              <Image
                src="/logo.svg"
                alt="PropData Logo"
                width={30}
                height={30}
                className="hidden md:block"
              />
            </Link>
          </ContextMenuTrigger>
        </ContextMenu>

        {/* Desktop Navigation Links */}
        <ul className="space-x-2 font-medium text-sm hidden md:flex mx-3">
          {links.map(({ path, title, children }) => {
            if (path) {
              // Regular navigation items (Pricing, Updates)
              return (
                <li key={path}>
                  <Link
                    onClick={handleOnClick}
                    href={path}
                    className="h-8 items-center justify-center text-sm font-medium px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
                  >
                    {title}
                  </Link>
                </li>
              );
            }

            // Dropdown items (Solutions, Company)
            return (
              <li
                key={title}
                className="group"
                onMouseEnter={() => setShowBlur(true)}
                onMouseLeave={() => setShowBlur(false)}
              >
                <span className="h-8 items-center justify-center text-sm font-medium transition-opacity hover:opacity-70 duration-200 px-3 py-2 inline-flex text-secondary-foreground cursor-pointer">
                  {title}
                </span>

                {children && title === "Solutions" ? (
                  <div
                    className={cn(
                      "absolute top-[48px] left-0 right-0 bg-[#121212] flex h-0 group-hover:h-[180px] overflow-hidden transition-all duration-300 ease-in-out border-l border-r border-medium-gray",
                      hidden && "hidden"
                    )}
                  >
                    <div className="flex w-full h-[180px]">
                      {serviceCards.map((card, index) => (
                        <Link
                          key={index}
                          href={card.path}
                          className={`relative flex-1 h-full ${
                            index < serviceCards.length - 1
                              ? "border-r border-medium-gray"
                              : ""
                          }`}
                          style={{
                            backgroundImage: `url(${card.backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="absolute bottom-4 left-4 flex flex-col items-start">
                            <div className="font-medium text-[#ffffff] text-sm tracking-[-0.42px] leading-[14.7px]">
                              {card.title}
                            </div>
                            <div className="font-normal text-[#878787] text-xs tracking-[-0.36px] leading-[18px]">
                              {card.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : children && title === "Company" ? (
                  <div
                    className={cn(
                      "absolute top-[48px] left-0 right-0 bg-[#121212] flex h-0 group-hover:h-[180px] overflow-hidden transition-all duration-300 ease-in-out border-l border-r border-medium-gray",
                      hidden && "hidden"
                    )}
                  >
                    <div className="flex w-full h-[180px]">
                      {companyCards.map((card, index) => (
                        <Link
                          key={index}
                          href={card.path}
                          className={`relative flex-1 h-full ${
                            index < companyCards.length - 1
                              ? "border-r border-medium-gray"
                              : ""
                          }`}
                          style={{
                            backgroundImage: `url(${card.backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="absolute bottom-4 left-4 flex flex-col items-start">
                            <div className="font-medium text-[#ffffff] text-sm tracking-[-0.42px] leading-[14.7px]">
                              {card.title}
                            </div>
                            <div className="font-normal text-[#878787] text-xs tracking-[-0.36px] leading-[18px]">
                              {card.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : children ? (
                  <div
                    className={cn(
                      "absolute top-[48px] left-0 -mx-[calc(var(--pixel-ratio)_*_2px)] bg-[#fff] dark:bg-[#121212] flex h-0 group-hover:h-[250px] overflow-hidden transition-all duration-300 ease-in-out border-l border-r",
                      hidden && "hidden"
                    )}
                  >
                    <ul className="p-4 w-[200px] flex-0 space-y-4 mt-2">
                      {children.map((child) => {
                        return (
                          <li key={child.path}>
                            <Link
                              onClick={handleOnClick}
                              href={child.path}
                              className="flex space-x-2 items-center transition-opacity hover:opacity-70 duration-200"
                            >
                              <span className="text-sm font-medium">
                                {child.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="absolute bottom-0 w-full border-b-[1px]" />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        {/* Sign Up Button */}
        <div className="hidden ml-auto md:flex items-center">
          <div className="h-6 w-px bg-border mx-4" />
          <Link
            href="/signup"
            className="h-8 items-center justify-center text-sm font-medium px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="ml-4 md:hidden p-2"
          onClick={() => handleToggleMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={13}
            fill="none"
          >
            <path
              fill="currentColor"
              d="M0 12.195v-2.007h18v2.007H0Zm0-5.017V5.172h18v2.006H0Zm0-5.016V.155h18v2.007H0Z"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed bg-background -top-[2px] right-0 left-0 bottom-0 h-screen z-10 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="mt-4 flex justify-between p-3 px-4 relative ml-[1px]">
            <button type="button" onClick={handleToggleMenu}>
              <span className="sr-only"></span>
              <br />
            </button>

            <button
              type="button"
              className="ml-auto md:hidden p-2 absolute right-[10px] top-2"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="fill-primary"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="h-screen pb-[150px] overflow-auto">
            <motion.ul
              initial="hidden"
              animate="show"
              className="px-3 pt-8 text-xl text-[#878787] space-y-8 mb-8 overflow-auto"
              variants={listVariant}
            >
              {links.map(({ path, title, children }) => {
                const isActive =
                  path === "/updates"
                    ? pathname.includes("updates")
                    : path === lastPath;

                if (path) {
                  // Regular mobile navigation items
                  return (
                    <motion.li variants={itemVariant} key={path}>
                      <Link
                        href={path}
                        className={cn(isActive && "text-primary")}
                        onClick={handleToggleMenu}
                      >
                        {title}
                      </Link>
                    </motion.li>
                  );
                }

                // Mobile dropdown items using Accordion
                return (
                  <li key={title}>
                    <Accordion collapsible type="single">
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="flex items-center justify-between w-full font-normal p-0 hover:no-underline">
                          <span className="text-[#878787] text-xl">
                            {title}
                          </span>
                        </AccordionTrigger>

                        {children && (
                          <AccordionContent className="text-xl">
                            <ul className="space-y-8 ml-4 mt-6">
                              {children.map((child) => {
                                return (
                                  <li key={child.path}>
                                    <Link
                                      onClick={handleToggleMenu}
                                      href={child.path}
                                      className="text-[#878787]"
                                    >
                                      <span className="text-sm font-medium">
                                        {child.title}
                                      </span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </li>
                );
              })}

              {/* Mobile Sign Up Button */}
              <motion.li
                className="mt-auto border-t-[1px] pt-8"
                variants={itemVariant}
              >
                <Link
                  className="text-[#878787] hover:text-primary transition-colors"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}

      {/* Blur Effect for Dropdowns */}
      <div
        className={cn(
          "fixed w-screen h-screen backdrop-blur-md left-0 top-0 invisible opacity-0 transition-all duration-300 z-10",
          showBlur && "md:visible opacity-100"
        )}
      />
    </header>
  );
}
