"use client";

import { motion } from "framer-motion";

const StreamingLoader = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          repeatType: "reverse",
        }}
        className="bg-gray-200 dark:bg-gray-700 rounded-xl p-6 shadow-lg h-80 flex flex-col justify-between"
      >
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
          <div className="flex-1 space-y-3">
            <div className="w-1/4 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
            <div className="w-2/4 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
          <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
          <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

export default StreamingLoader;
