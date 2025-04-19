import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const featuredCourses = [
  {
    id: 1,
    title: "GATE CSE Complete Course",
    description: "Comprehensive course covering all subjects for GATE Computer Science Engineering exam.",
    duration: "6 months",
    rating: 4.9,
    students: 1250,
    price: "₹8,999",
    originalPrice: "₹15,999",
    instructor: {
      name: "Dr. Rajesh Kumar",
      avatar: "/instructors/instructor-1.png",
      credentials: "IIT Delhi, PhD"
    },
    topics: ["Algorithms", "Data Structures", "Operating Systems", "DBMS", "Computer Networks"],
    category: "GATE",
    slug: "gate-cse-complete-course"
  },
  {
    id: 2,
    title: "UGC NET Computer Science",
    description: "Complete preparation for UGC NET Computer Science & Applications exam with mock tests and practice questions.",
    duration: "4 months",
    rating: 4.8,
    students: 850,
    price: "₹7,499",
    originalPrice: "₹12,999",
    instructor: {
      name: "Dr. Priya Singh",
      avatar: "/instructors/instructor-2.png",
      credentials: "IISC Bangalore, PhD"
    },
    topics: ["Research Methodology", "Data Structures", "Information Systems", "Web Technologies", "Database Concepts"],
    category: "UGC NET",
    slug: "ugc-net-computer-science"
  },
  {
    id: 3,
    title: "Ethical Hacking Workshop",
    description: "Learn practical ethical hacking skills with hands-on exercises and real-world scenarios.",
    duration: "2 weeks",
    rating: 4.7,
    students: 720,
    price: "₹4,999",
    originalPrice: "₹7,999",
    instructor: {
      name: "Vikram Sharma",
      avatar: "/instructors/instructor-3.png",
      credentials: "Certified Ethical Hacker (CEH)"
    },
    topics: ["Network Security", "Web Application Security", "Social Engineering", "Penetration Testing", "Security Tools"],
    category: "Workshop",
    slug: "ethical-hacking-workshop"
  },
  {
    id: 4,
    title: "BPSC TRE 4.0 Comprehensive",
    description: "Complete guidance for BPSC Teacher Recruitment Examination with subject knowledge and exam strategies.",
    duration: "3 months",
    rating: 4.8,
    students: 930,
    price: "₹5,999",
    originalPrice: "₹9,999",
    instructor: {
      name: "Dr. Amit Mishra",
      avatar: "/instructors/instructor-4.png",
      credentials: "15+ years teaching experience"
    },
    topics: ["Pedagogy", "Subject Knowledge", "NCERT-based Content", "Previous Papers", "Mock Tests"],
    category: "BPSC TRE",
    slug: "bpsc-tre-comprehensive"
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm bg-primary text-primary-foreground">
              Top Picks
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Courses
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our most popular courses designed to help you succeed in your exams and career
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/courses">
            <Button size="lg" variant="outline">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: typeof featuredCourses[0] }) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Icon className="h-12 w-12 text-primary opacity-70" />
        </div>
        <Badge className="absolute top-2 right-2 bg-white text-primary">
          {course.category}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
        <div className="flex items-center gap-2 mt-1">
          <Avatar className="h-6 w-6">
            <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardDescription className="line-clamp-1 text-xs">
            {course.instructor.name} • {course.instructor.credentials}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="line-clamp-2 text-sm text-muted-foreground mb-3">
          {course.description}
        </p>
        <div className="flex justify-between text-sm mb-3">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-amber-500" />
            <span>{course.rating}</span>
            <span className="text-muted-foreground">({course.students})</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {course.topics.slice(0, 3).map((topic, idx) => (
            <div key={`${course.id}-${idx}`} className="text-xs px-2 py-1 bg-slate-100 rounded-full">
              {topic}
            </div>
          ))}
          {course.topics.length > 3 && (
            <div className="text-xs px-2 py-1 bg-slate-100 rounded-full">
              +{course.topics.length - 3} more
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start">
        <div className="flex items-center gap-2 mb-3 w-full">
          <span className="text-xl font-bold">{course.price}</span>
          <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
          <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-100">
            {Math.round((1 - Number.parseInt(course.price.replace(/[^0-9]/g, "")) / Number.parseInt(course.originalPrice.replace(/[^0-9]/g, ""))) * 100)}% off
          </Badge>
        </div>
        <Link href={`/courses/${course.slug}`} className="w-full">
          <Button className="w-full">Enroll Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function Icon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
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

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
