import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden px-4">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4"
        >
          404
        </motion.div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold border border-border"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
