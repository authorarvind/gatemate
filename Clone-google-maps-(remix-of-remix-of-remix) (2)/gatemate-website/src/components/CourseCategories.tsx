import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CourseCategories() {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
              Our Offerings
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Course Categories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive preparation for competitive exams and hands-on training in cutting-edge technologies
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <ExamCategoryCard
            title="GATE"
            description="Graduate Aptitude Test in Engineering - Prepare with comprehensive study material and expert faculty."
            features={["Subject-wise coverage", "Previous year papers", "Mock tests", "Live doubt clearing"]}
            icon={<GateExamIcon className="h-10 w-10" />}
            href="/courses/gate"
          />
          <ExamCategoryCard
            title="UGC NET"
            description="University Grants Commission National Eligibility Test - Complete preparation for all subjects."
            features={["Subject knowledge", "Exam strategies", "Paper analysis", "Practice sessions"]}
            icon={<UgcExamIcon className="h-10 w-10" />}
            href="/courses/ugc-net"
          />
          <ExamCategoryCard
            title="BPSC TRE 4.0"
            description="Bihar Public Service Commission Teacher Recruitment Examination - Structured preparation."
            features={["Subject expertise", "Customized study plan", "Regular assessments", "Previous papers"]}
            icon={<BpscIcon className="h-10 w-10" />}
            href="/courses/bpsc-tre"
          />
          <ExamCategoryCard
            title="Programming Languages"
            description="Master programming languages like Python, Java, C++, and more with hands-on projects."
            features={["Project-based learning", "Industry relevance", "Code reviews", "Expert guidance"]}
            icon={<ProgrammingIcon className="h-10 w-10" />}
            href="/courses/programming"
          />
          <ExamCategoryCard
            title="Technology Workshops"
            description="Intensive workshops on Ethical Hacking, Blockchain, Generative AI, and more cutting-edge technologies."
            features={["Hands-on sessions", "Real-world problems", "Industry experts", "Certification"]}
            icon={<WorkshopIcon className="h-10 w-10" />}
            href="/courses/workshops"
          />
          <ExamCategoryCard
            title="Corporate & FDP Training"
            description="Customized Faculty Development Programs and Corporate Training solutions for organizations."
            features={["Custom curriculum", "Flexible delivery", "Outcome-based", "Expert trainers"]}
            icon={<CorporateTrainingIcon className="h-10 w-10" />}
            href="/courses/corporate-training"
          />
        </div>
      </div>
    </section>
  );
}

interface ExamCategoryCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  href: string;
}

function ExamCategoryCard({ title, description, features, icon, href }: ExamCategoryCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-2">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="grid gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-secondary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button className="w-full">
            Explore Courses
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function GateExamIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="text-primary"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function UgcExamIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="text-primary"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function BpscIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="text-primary"
    >
      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
      <path d="M12 13v8" />
      <path d="M12 3v3" />
    </svg>
  );
}

function ProgrammingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="text-primary"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function WorkshopIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="text-primary"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CorporateTrainingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="text-primary"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h10" />
      <path d="M7 12h10" />
      <path d="M7 17h10" />
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
