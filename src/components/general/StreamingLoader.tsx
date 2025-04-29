"use client";

import { motion } from "framer-motion";

const StreamingLoader = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              repeatType: "reverse",
            }}
            className="bg-gray-200 dark:bg-gray-700 rounded-xl p-4 shadow-md h-48 flex flex-col justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="w-1/3 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
              <div className="w-5/6 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
              <div className="w-2/3 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StreamingLoader;
