import { motion, useInView, useMotionValue, useSpring, type MotionProps } from "framer-motion";
import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";

type MotionSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "section" | "div" | "article" | "header";
} & Omit<MotionProps, "children">;

export function MotionSection({ children, delay = 0, className, as = "div", ...rest }: MotionSectionProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function MotionStagger({ children, className, stagger = 0.15 }: { children: ReactNode; className?: string; stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type CounterProps = { to: number; duration?: number; suffix?: string; prefix?: string } & HTMLAttributes<HTMLSpanElement>;

export function AnimatedCounter({ to, duration = 1.6, suffix = "", prefix = "", ...rest }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref} {...rest}>{`${prefix}0${suffix}`}</span>;
}

export function MotionCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
