import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = React.memo(() => {
  const [progress, setProgress] = useState(0);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    let interval;

    const updateProgress = () => {
      setProgress((prev) => {
        const nextProgress = prev + Math.floor(Math.random() * 10) + 1;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    };

    interval = setInterval(() => {
      updateProgress();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const hideTimeout = setTimeout(() => setHideLoader(true), 1000);
      return () => clearTimeout(hideTimeout);
    }
  }, [progress]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-accent text-main flex items-center justify-center z-50 font-[Nohemi]"
      initial={{ y: 0 }}
      animate={{ y: hideLoader ? "-100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{
            opacity: progress === 100 ? [1, 0, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: progress === 100 ? Infinity : 0,
          }}
          className="text-2xl"
          aria-live="polite"
        >
          {progress}%
        </motion.h4>
      </div>
    </motion.div>
  );
});

export default Loader;
