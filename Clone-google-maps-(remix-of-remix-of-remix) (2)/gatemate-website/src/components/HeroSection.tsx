import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-pattern py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                India&apos;s Premier Platform for GATE & Competitive Exams
              </h1>
              <p className="max-w-[700px] text-white md:text-xl">
                Expert-led courses, comprehensive study material, and personalized guidance for GATE, UGC NET, BPSC TRE 4.0,
                and cutting-edge technology training.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-white">
              <div className="flex items-center space-x-1">
                <CheckIcon className="h-4 w-4" />
                <span>Live Classes</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckIcon className="h-4 w-4" />
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckIcon className="h-4 w-4" />
                <span>Study Materials</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-white/5 p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                <div className="absolute inset-0 border-2 border-white/10 rounded-xl"></div>
              </div>
              <div className="relative space-y-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <GateIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">GATE Preparation</h3>
                    <p className="text-sm text-white/80">Comprehensive coverage of all subjects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <UgcIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">UGC NET</h3>
                    <p className="text-sm text-white/80">Specialized coaching for all subjects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <TreIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">BPSC TRE 4.0</h3>
                    <p className="text-sm text-white/80">Targeted preparation for success</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <TechIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Tech Workshops</h3>
                    <p className="text-sm text-white/80">Hands-on training in cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <CorporateIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Corporate Training</h3>
                    <p className="text-sm text-white/80">Customized programs for organizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function GateIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

function UgcIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function TreIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );
}

function TechIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 13a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a1 1 0 0 0-1-1h-8v-1a5 5 0 0 0-10 0v1H2a1 1 0 0 0-1 1h9" />
      <line x1="6" x2="6" y1="14" y2="18" />
      <line x1="18" x2="18" y1="14" y2="18" />
    </svg>
  );
}

function CorporateIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 3v18h18" />
      <path d="M18.4 3a4.1 4.1 0 0 0-3.4 1.7" />
      <path d="M15 9a4.1 4.1 0 0 0-3.4 1.7" />
      <path d="M11.5 15a4.1 4.1 0 0 0-3.4 1.7" />
    </svg>
  );
}
