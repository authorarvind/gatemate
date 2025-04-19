import { HeroSection } from "@/components/HeroSection";
import { CourseCategories } from "@/components/CourseCategories";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Testimonials } from "@/components/Testimonials";
import { AppDownload } from "@/components/AppDownload";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseCategories />
      <FeaturedCourses />
      <Testimonials />
      <AppDownload />
    </>
  );
}
