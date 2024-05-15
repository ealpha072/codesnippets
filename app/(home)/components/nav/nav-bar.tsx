"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Btn from "@/components/custom/btn";
import { redirect } from "next/navigation";
import NavItems from "./nav-items";
import { navBarItems } from "../../types/home";
import Logo from "@/app/components/logo";
import MobileMenu from "./mobile-menu";
import MobileToggleBtn from "./mobile-toggle-btn";

interface Props {}

function NavBar(props: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "relative  top-4  z-50   bg-primary bg-transparent-[#0D0F11]/50 backdrop-blur-sm  shadow-xl rounded-xl p-2  border-primary border w-full md:sticky",
        open ? "h-auto" : "h-16"
      )}
    >
      <nav className="justify-between flex md:flex-row flex-col p-0.5 items-center">
        <div className="flex md:w-auto w-full justify-between items-center">
          <Logo platform="Code-snippets" />
          <MobileToggleBtn setOpen={setOpen} open={open} />
        </div>
        <ul className="md:flex hidden p-2 justify-center items-center gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavItems key={item.label} items={item} />
            </li>
          ))}
        </ul>
        <Btn hidden action={() => redirect("/")} name="Log in" />
        <MobileMenu links={navItems} open={open} />
      </nav>
    </header>
  );
}

export default NavBar;

// NavBar Items/Links
const navItems: navBarItems[] = [
  {
    label: "App",
    link: "/app",
  },
  {
    label: "Community",
    link: "https://discord.gg/tqm4eKy2",
  },
  {
    label: "Github",
    link: "/",
  },
];
