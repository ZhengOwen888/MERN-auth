import { motion } from "framer-motion";

export const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl ${top} ${left}`}
      animate={{
        x: [0, 50, 0],
        y: [0, -50, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    ></motion.div>
  );
};
