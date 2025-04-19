import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AppDownload() {
  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download Our Mobile App
              </h2>
              <p className="max-w-[600px] text-primary-foreground md:text-xl">
                Access courses, study materials, and mock tests anytime, anywhere with our mobile app
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-1 h-5 w-5 text-white" />
                  <div>
                    <h3 className="font-bold">Offline Access</h3>
                    <p className="text-sm text-primary-foreground">
                      Download videos and study materials for offline study
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-1 h-5 w-5 text-white" />
                  <div>
                    <h3 className="font-bold">Practice Tests</h3>
                    <p className="text-sm text-primary-foreground">
                      Take mock tests and practice questions on the go
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-1 h-5 w-5 text-white" />
                  <div>
                    <h3 className="font-bold">Live Classes</h3>
                    <p className="text-sm text-primary-foreground">
                      Join live classes and interact with faculty in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-1 h-5 w-5 text-white" />
                  <div>
                    <h3 className="font-bold">Personalized Learning</h3>
                    <p className="text-sm text-primary-foreground">
                      Get personalized recommendations based on your performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <GooglePlayIcon className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </Link>
              <Link href="#" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[420px] w-[220px] md:h-[520px] md:w-[270px] rounded-3xl border-[8px] border-white/10 bg-slate-950/20 p-2 shadow-lg backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl border-[1px] border-white/10 bg-slate-950/80 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-6 flex items-center justify-center bg-slate-950">
                  <div className="h-2 w-20 rounded-full bg-slate-800"></div>
                </div>
                <div className="absolute inset-0 mt-6 p-1">
                  <div className="h-full w-full rounded-2xl bg-primary/20 flex items-center justify-center">
                    <MobileScreenIcon className="h-20 w-20 text-white/50" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-center bg-slate-950">
                  <div className="h-4 w-4 rounded-full bg-slate-800/80 border border-slate-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 3 7.07 16.97 2.51-7.39 2.51 7.39L22 3" />
      <path d="m3 3 6.36 2.64 4.35-2.64" />
      <path d="M3 3v16.81" />
      <path d="M15 9.5 9 11.5" />
    </svg>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function MobileScreenIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}
