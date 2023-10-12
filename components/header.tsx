"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DrawerContent from "./drawer";
import { Links } from "@/utils/navbarData";
import { Abril_Fatface } from "next/font/google";

const abril_Fatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="pt-5 grid max-lg:grid-cols-2 marginContent mb-6">
      <div className="flex justify-between gap-8">
        <Link
          href={`/`}
          className={`${abril_Fatface.className} text-xl lg:text-2xl my-auto `}
        >
          FoodWekaa
        </Link>
        <ul className="flex gap-10 mt-1 max-lg:hidden">
          {Links.map((link) => (
            <Link
              href={`${link.link}`}
              key={link.name}
              className={`${
                !pathname.endsWith(link.link) && "text-primaary"
              }  font-medium hover:text-black `}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="justify-end flex gap-3 my-auto">
        <DrawerContent />
      </div>
    </nav>
  );
}
