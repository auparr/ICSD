"use client";

import { motion } from "framer-motion";

interface CurvedDividerProps {
  variant?: "wave" | "hill" | "river";
  flip?: boolean;
  color?: string;
  className?: string;
}

export function CurvedDivider({
  variant = "wave",
  flip = false,
  color = "#FDFBF6",
  className = "",
}: CurvedDividerProps) {
  // Define multiple path variations for subtle morph animation
  const pathSets = {
    wave: [
      "M0,80C60,100,120,140,240,140C360,140,480,100,600,90C720,80,840,120,960,140C1080,160,1200,120,1320,100C1380,90,1440,80,1440,80L1440,320L0,320Z",
      "M0,90C80,110,160,130,280,120C400,110,520,90,640,100C760,110,880,150,1000,140C1120,130,1240,100,1360,90C1400,80,1440,100,1440,100L1440,320L0,320Z",
      "M0,70C100,90,200,130,300,120C400,110,500,80,600,100C700,120,800,160,900,150C1000,140,1100,110,1200,100C1300,90,1400,110,1440,120L1440,320L0,320Z",
    ],
    hill: [
      "M0,160C80,130,160,100,280,100C400,100,520,130,640,160C760,190,880,190,1000,150C1120,110,1240,70,1360,100C1400,110,1440,120,1440,120L1440,320L0,320Z",
      "M0,150C100,120,200,110,320,100C440,90,560,130,680,150C800,170,920,170,1040,130C1160,90,1280,60,1400,100L1440,120L1440,320L0,320Z",
    ],
    river: [
      "M0,100C100,130,200,160,300,150C400,140,500,90,600,110C700,130,800,200,900,190C1000,180,1100,110,1200,100C1300,90,1400,110,1440,120L1440,320L0,320Z",
      "M0,110C120,140,240,160,360,140C480,120,600,100,720,130C840,160,960,200,1080,180C1200,160,1320,100,1440,90L1440,320L0,320Z",
    ],
  };

  const wavePaths = pathSets[variant];

  return (
    <div
      className={`w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        className="relative block w-full h-[100px] md:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true" // <-- NEW: Improves accessibility by hiding decorative element from screen readers
      >
        <motion.path
          fill={color}
          fillOpacity="1"
          d={wavePaths[0]}
          animate={{ d: wavePaths }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </svg>
    </div>
  );
}
