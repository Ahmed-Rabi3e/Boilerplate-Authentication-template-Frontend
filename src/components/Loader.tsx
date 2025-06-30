import { motion } from "framer-motion";

export default function Loader() {
  const circleVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  const containerVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <motion.div
        className="relative w-20 h-20"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-black to-black/90"
            style={{
              top: i % 2 === 0 ? 0 : "auto",
              bottom: i % 2 === 1 ? 0 : "auto",
              left: i === 0 || i === 3 ? 0 : "auto",
              right: i === 1 || i === 2 ? 0 : "auto",
            }}
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.5,
              ease: "backOut",
              delay: i * 0.15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
