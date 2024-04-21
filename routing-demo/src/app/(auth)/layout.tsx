"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const NavLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <h1>Inner layout</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {NavLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
