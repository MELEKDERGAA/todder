import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import Frobes from "../image/Forbes.png";
import Parents from "../image/Parents.png";
import MOM from "../image/MOM.png";

// Set your images
const images = [
  Frobes,
  Parents,
  MOM,
];

export default function AutoScrollInfiniteImages() {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
        
        <motion.div
          className="flex flex-row items-center my-auto"
          animate={{
            x:[820, -700], // Adjust based on total width of the repeated images (the container width)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 90, // Adjust to control how fast images move; slower if you want
              ease: "linear",
            },
          }}
        >
          {/* Render the images twice to create a seamless loop */}
          {[...images].map((src, index) => (
            <div
              key={index}
              className="w-auto h-fit flex items-center justify-center mr-32 my-auto"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </motion.div>
  );
}
