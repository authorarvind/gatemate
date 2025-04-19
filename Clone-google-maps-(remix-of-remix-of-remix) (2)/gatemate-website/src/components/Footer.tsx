import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">GATEMATE</span>
              <span className="text-sm text-slate-400">.co.in</span>
            </Link>
            <p className="text-sm text-slate-400">
              India&apos;s premier platform for GATE, UGC NET, BPSC TRE, and technical training.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/gate" className="hover:text-white transition-colors">GATE</Link>
              </li>
              <li>
                <Link href="/courses/ugc-net" className="hover:text-white transition-colors">UGC NET</Link>
              </li>
              <li>
                <Link href="/courses/bpsc-tre" className="hover:text-white transition-colors">BPSC TRE 4.0</Link>
              </li>
              <li>
                <Link href="/courses/programming" className="hover:text-white transition-colors">Programming</Link>
              </li>
              <li>
                <Link href="/courses/workshops" className="hover:text-white transition-colors">Technology Workshops</Link>
              </li>
              <li>
                <Link href="/courses/fdp" className="hover:text-white transition-colors">Faculty Development Programs</Link>
              </li>
              <li>
                <Link href="/courses/corporate-training" className="hover:text-white transition-colors">Corporate Training</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/study-materials" className="hover:text-white transition-colors">Study Materials</Link>
              </li>
              <li>
                <Link href="/resources/mock-tests" className="hover:text-white transition-colors">Mock Tests</Link>
              </li>
              <li>
                <Link href="/resources/previous-papers" className="hover:text-white transition-colors">Previous Papers</Link>
              </li>
              <li>
                <Link href="/resources/video-lectures" className="hover:text-white transition-colors">Video Lectures</Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/resources/doubt-solution" className="hover:text-white transition-colors">Doubt Solution</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-white transition-colors">Our Faculty</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPinIcon className="h-5 w-5 text-slate-400" />
                <span>123 Education Park, Patna, Bihar, India - 800001</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-slate-400" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5 text-slate-400" />
                <span>info@gatemate.co.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-slate-400" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} GATEMATE. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund" className="text-slate-400 hover:text-white transition-colors">Refund Policy</Link>
            </li>
            <li>
              <Link href="/sitemap" className="text-slate-400 hover:text-white transition-colors">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
