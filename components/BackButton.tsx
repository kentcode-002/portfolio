"use client";

import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ x: -4 }}
      transition={{ duration: 0.2 }}
      onClick={() => router.back()}
      className="flex gap-4 text-white font-light mb-4 items-center cursor-pointer"
    >
      <MoveLeft />
      <span>Back</span>
    </motion.button>
  );
};

export default BackButton;
