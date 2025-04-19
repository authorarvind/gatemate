import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    image: "/testimonials/testimonial-1.jpg",
    title: "GATE CSE Qualified, AIR 56",
    content:
      "I enrolled in the GATE CSE course at GATEMATE and was extremely impressed with the quality of teaching. The faculty's approach to complex topics made them easy to understand, and the study material was comprehensive. I secured AIR 56 and got admitted to IIT Bombay. Thank you GATEMATE!",
    course: "GATE CSE Complete Course",
    achievement: "AIR 56",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "/testimonials/testimonial-2.jpg",
    title: "UGC NET Qualified",
    content:
      "The UGC NET course at GATEMATE was instrumental in my success. The faculty provided excellent guidance on exam strategy and the most important topics to focus on. The mock tests helped me identify my weak areas. I qualified UGC NET on my first attempt thanks to GATEMATE.",
    course: "UGC NET Computer Science",
    achievement: "Qualified in first attempt",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Mehta",
    image: "/testimonials/testimonial-3.jpg",
    title: "Software Developer at Google",
    content:
      "The Ethical Hacking Workshop completely changed my perspective on cybersecurity. The hands-on approach and real-world scenarios made learning engaging and practical. I'm now working as a security consultant and the skills I learned at GATEMATE are invaluable in my daily work.",
    course: "Ethical Hacking Workshop",
    achievement: "Security Consultant",
    rating: 4,
  },
  {
    id: 4,
    name: "Meera Gupta",
    image: "/testimonials/testimonial-4.jpg",
    title: "Teacher at DPS School",
    content:
      "BPSC TRE 4.0 preparation at GATEMATE was exceptional. The structured study plan, regular mock tests, and personalized guidance helped me navigate the vast syllabus efficiently. The result was that I secured a teaching position at one of the top schools in Patna.",
    course: "BPSC TRE 4.0 Comprehensive",
    achievement: "Top school placement",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
              Student Success
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Students Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our students who have achieved success in their exams and careers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-base">{testimonial.name}</CardTitle>
            <CardDescription className="text-xs">{testimonial.title}</CardDescription>
          </div>
          <div className="ml-auto flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={`star-${testimonial.id}-${index}`}
                className={`h-4 w-4 ${index < testimonial.rating ? "text-amber-500" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="mb-3">
          <Badge variant="outline" className="text-xs font-normal">
            {testimonial.course}
          </Badge>
          <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100 text-xs font-normal">
            {testimonial.achievement}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-6">
          {testimonial.content}
        </p>
      </CardContent>
    </Card>
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
      stroke="none"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
