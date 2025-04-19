"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavItems = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "Resources", href: "/resources" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const examCourses = [
  { title: "GATE", href: "/courses/gate" },
  { title: "UGC NET", href: "/courses/ugc-net" },
  { title: "BPSC TRE 4.0", href: "/courses/bpsc-tre" },
];

const techCourses = [
  { title: "Programming", href: "/courses/programming" },
  { title: "Ethical Hacking", href: "/courses/ethical-hacking" },
  { title: "Blockchain", href: "/courses/blockchain" },
  { title: "Generative AI", href: "/courses/generative-ai" },
];

const trainingCourses = [
  { title: "FDP", href: "/courses/fdp" },
  { title: "Corporate Training", href: "/courses/corporate-training" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">GATEMATE</span>
            <span className="text-sm text-gray-500">.co.in</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavItems.map((item) => (
            <React.Fragment key={item.href}>
              {item.title === "Courses" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className="text-base font-medium">
                      {item.title}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-[200px]">
                    <div className="font-medium px-2 py-1.5 text-sm text-muted-foreground">Exam Prep</div>
                    {examCourses.map((course) => (
                      <DropdownMenuItem key={course.href} asChild>
                        <Link href={course.href}>{course.title}</Link>
                      </DropdownMenuItem>
                    ))}
                    <div className="font-medium px-2 py-1.5 text-sm text-muted-foreground">Technology</div>
                    {techCourses.map((course) => (
                      <DropdownMenuItem key={course.href} asChild>
                        <Link href={course.href}>{course.title}</Link>
                      </DropdownMenuItem>
                    ))}
                    <div className="font-medium px-2 py-1.5 text-sm text-muted-foreground">Training</div>
                    {trainingCourses.map((course) => (
                      <DropdownMenuItem key={course.href} asChild>
                        <Link href={course.href}>{course.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className="text-base font-medium transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 z-50 bg-background border-b py-4">
          <div className="container flex flex-col gap-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="font-medium text-sm text-muted-foreground mt-2">Exam Prep</div>
            {examCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="text-sm pl-4 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {course.title}
              </Link>
            ))}
            <div className="font-medium text-sm text-muted-foreground mt-2">Technology</div>
            {techCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="text-sm pl-4 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {course.title}
              </Link>
            ))}
            <div className="font-medium text-sm text-muted-foreground mt-2">Training</div>
            {trainingCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="text-sm pl-4 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {course.title}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-4">
              <Link href="/login" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button size="sm" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
