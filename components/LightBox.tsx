"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate
}: LightboxProps) {
  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 80;
    if (info.offset.x < -swipeThreshold) {
      goNext();
    } else if (info.offset.x > swipeThreshold) {
      goPrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors p-2 cursor-pointer z-10"
      >
        <X height={28} width={28} />
      </button>

      {images.length > 1 && (
        <div className="absolute top-5 sm:top-7 left-1/2 -translate-x-1/2 text-white/70 text-sm z-10">
          {index + 1} / {images.length}
        </div>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="hidden sm:flex absolute left-4 items-center justify-center text-white/80 hover:text-white transition-colors p-2 cursor-pointer z-10"
        >
          <ChevronLeft height={36} width={36} />
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="hidden sm:flex absolute right-4 items-center justify-center text-white/80 hover:text-white transition-colors p-2 cursor-pointer z-10"
        >
          <ChevronRight height={36} width={36} />
        </button>
      )}

      <div
        className="relative w-full h-full flex items-center justify-center px-4 py-16 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" custom={index}>
          <motion.div
            key={index}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full h-full max-w-5xl cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[index]}
              alt={`Image ${index + 1}`}
              fill
              className="object-contain pointer-events-none select-none"
              draggable={false}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs">
          Swipe to view more
        </div>
      )}
    </motion.div>
  );
}
