import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock, Users, GraduationCap, BookOpen, Briefcase, Code } from "lucide-react";
import { courseDetails } from "@/data/courseData";

// Course images imports
import mbaDigitalMarketingImg from "@/assets/courses/mba-digital-marketing.jpg";
import mbaLogisticsImg from "@/assets/courses/mba-logistics.jpg";
import mbaFinanceImg from "@/assets/courses/mba-finance.jpg";
import mbaProjectManagementImg from "@/assets/courses/mba-project-management.jpg";
import mcaAiMlImg from "@/assets/courses/mca-ai-ml.jpg";
import mcaAiDsImg from "@/assets/courses/mca-ai-ds.jpg";
import mcaCyberSecurityImg from "@/assets/courses/mca-cyber-security.jpg";
import mcaCloudComputingImg from "@/assets/courses/mca-cloud-computing.jpg";
import bbaImg from "@/assets/courses/bba.jpg";
import bcomImg from "@/assets/courses/bcom.jpg";
import bcaImg from "@/assets/courses/bca.jpg";
import baImg from "@/assets/courses/ba.jpg";
import mbaGeneralImg from "@/assets/courses/mba-general.jpg";
import mcaGeneralImg from "@/assets/courses/mca-general.jpg";
import mcomImg from "@/assets/courses/mcom.jpg";
import maImg from "@/assets/courses/ma.jpg";
import majmcImg from "@/assets/courses/majmc.jpg";

interface CourseCardProps {
  name: string;
  shortName: string;
  category: "UG" | "PG" | "MBA" | "MCA";
  duration?: string;
  students?: string;
}

const categoryColors = {
  UG: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  PG: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  MBA: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  MCA: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

const categoryIcons = {
  UG: GraduationCap,
  PG: BookOpen,
  MBA: Briefcase,
  MCA: Code,
};

// Course-specific images based on shortName
const getCourseImage = (shortName: string): string => {
  const imageMap: Record<string, string> = {
    // MBA courses
    "MBA Digital Marketing": mbaDigitalMarketingImg,
    "MBA Logistics & SCM": mbaLogisticsImg,
    "MBA Finance": mbaFinanceImg,
    "MBA Project Management": mbaProjectManagementImg,
    // MCA courses
    "MCA AI & ML": mcaAiMlImg,
    "MCA AI & DS": mcaAiDsImg,
    "MCA Cyber Security": mcaCyberSecurityImg,
    "MCA Cloud Computing": mcaCloudComputingImg,
    // UG courses
    "BBA": bbaImg,
    "BCom": bcomImg,
    "BCA": bcaImg,
    "BA": baImg,
    // PG courses
    "MBA": mbaGeneralImg,
    "MCA": mcaGeneralImg,
    "MCom": mcomImg,
    "MA": maImg,
    "MAJMC": majmcImg,
  };
  return imageMap[shortName] || mbaGeneralImg;
};

export const CourseCard = ({
  name,
  shortName,
  category,
  duration = "2 Years",
  students = "500+",
}: CourseCardProps) => {
  const navigate = useNavigate();
  const CategoryIcon = categoryIcons[category];
  const courseImage = getCourseImage(shortName);

  // Find the course ID from courseDetails
  const courseData = courseDetails.find(c => c.shortName === shortName);
  const courseId = courseData?.id;

  const handleClick = () => {
    if (courseId) {
      navigate(`/course/${courseId}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      onClick={handleClick}
      className="min-w-[300px] md:min-w-[340px] bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all cursor-pointer group"
    >
      {/* Card Header with Image */}
      <div className="h-40 relative overflow-hidden">
        <img 
          src={courseImage} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
            <CategoryIcon className="h-3.5 w-3.5 text-foreground" />
            <span className="text-xs font-semibold text-foreground">{category}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Category Tag */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[category]} mb-4`}
        >
          {category === "UG" ? "Undergraduate" : category === "PG" ? "Postgraduate" : category}
        </span>

        {/* Course Name */}
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">({shortName})</p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students} Students</span>
          </div>
        </div>

        {/* View Details Link */}
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-primary font-medium text-sm group-hover:underline flex items-center gap-1">
            View Details 
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
