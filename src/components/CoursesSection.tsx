import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CourseCard } from "./CourseCard";
import { ChevronLeft, ChevronRight, X, Search } from "lucide-react";

interface Course {
  name: string;
  shortName: string;
  category: "UG" | "PG" | "MBA" | "MCA";
  duration: string;
  students: string;
}

const courses: Course[] = [
  // MBA Courses
  { name: "Master of Business Administration in Digital Marketing", shortName: "MBA Digital Marketing", category: "MBA", duration: "2 Years", students: "650+" },
  { name: "Master of Business Administration in Logistics and Supply Chain Management", shortName: "MBA Logistics & SCM", category: "MBA", duration: "2 Years", students: "480+" },
  { name: "Master of Business Administration in Finance", shortName: "MBA Finance", category: "MBA", duration: "2 Years", students: "720+" },
  { name: "Master of Business Administration in Project Management", shortName: "MBA Project Management", category: "MBA", duration: "2 Years", students: "550+" },
  
  // MCA Courses
  { name: "Master of Computer Applications in Artificial Intelligence & Machine Learning", shortName: "MCA AI & ML", category: "MCA", duration: "2 Years", students: "600+" },
  { name: "Master of Computer Applications in Artificial Intelligence & Data Science", shortName: "MCA AI & DS", category: "MCA", duration: "2 Years", students: "580+" },
  { name: "Master of Computer Applications in Cyber Security", shortName: "MCA Cyber Security", category: "MCA", duration: "2 Years", students: "420+" },
  { name: "Master of Computer Applications in Cloud Computing", shortName: "MCA Cloud Computing", category: "MCA", duration: "2 Years", students: "390+" },
  
  // UG Courses
  { name: "Bachelor of Business Administration", shortName: "BBA", category: "UG", duration: "3 Years", students: "1200+" },
  { name: "Bachelor of Commerce", shortName: "BCom", category: "UG", duration: "3 Years", students: "1500+" },
  { name: "Bachelor of Computer Applications", shortName: "BCA", category: "UG", duration: "3 Years", students: "900+" },
  { name: "Bachelor of Arts", shortName: "BA", category: "UG", duration: "3 Years", students: "800+" },
  
  // PG Courses
  { name: "Master of Business Administration", shortName: "MBA", category: "PG", duration: "2 Years", students: "850+" },
  { name: "Master of Computer Applications", shortName: "MCA", category: "PG", duration: "2 Years", students: "700+" },
  { name: "Master of Commerce", shortName: "MCom", category: "PG", duration: "2 Years", students: "450+" },
  { name: "Master of Arts", shortName: "MA", category: "PG", duration: "2 Years", students: "380+" },
  { name: "Master of Arts in Journalism and Mass Communication", shortName: "MAJMC", category: "PG", duration: "2 Years", students: "320+" },
];

export const CoursesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "UG", "PG", "MBA", "MCA"];
  
  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a wide range of undergraduate and postgraduate programs 
            designed to launch your career to new heights.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "gradient-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-card transition-colors border border-border hidden md:block"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredCourses.slice(0, 8).map((course, index) => (
              <motion.div
                key={course.shortName}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-start"
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-card transition-colors border border-border hidden md:block"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
            className="gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowAll(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card rounded-2xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">All Courses</h3>
                <button
                  onClick={() => setShowAll(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors flex-shrink-0"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              
              {/* Search and Filters */}
              <div className="p-4 border-b border-border space-y-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? "gradient-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[55vh]">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCourses.map((course, index) => (
                      <motion.div
                        key={course.shortName}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <CourseCard {...course} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No courses found matching your search.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      className="mt-4 text-primary hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
              
              {/* Results count */}
              <div className="p-4 border-t border-border bg-secondary/30">
                <p className="text-sm text-muted-foreground text-center">
                  Showing {filteredCourses.length} of {courses.length} courses
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
