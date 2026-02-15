import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedSwitch({ children, animationKey }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={animationKey}
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.96 }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
