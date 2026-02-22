"use client";

import { motion } from "framer-motion";
import React from "react";
import { LucideIcon } from "lucide-react";

// ─── Colour maps ────────────────────────────────────────────────────────────
const colorMap = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/60",
    border: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    text: "text-blue-900 dark:text-blue-100",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-950/60",
    border: "border-orange-200 dark:border-orange-800",
    iconBg: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-600 dark:text-orange-400",
    text: "text-orange-900 dark:text-orange-100",
  },
  dark: {
    bg: "bg-slate-800 dark:bg-slate-700",
    border: "border-slate-700 dark:border-slate-600",
    iconBg: "bg-slate-700 dark:bg-slate-600",
    iconColor: "text-slate-200",
    text: "text-slate-100",
  },
  green: {
    bg: "bg-emerald-50 dark:bg-emerald-950/60",
    border: "border-emerald-200 dark:border-emerald-800",
    iconBg: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    text: "text-emerald-900 dark:text-emerald-100",
  },
  red: {
    bg: "bg-rose-50 dark:bg-rose-950/60",
    border: "border-rose-200 dark:border-rose-800",
    iconBg: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-600 dark:text-rose-400",
    text: "text-rose-900 dark:text-rose-100",
  },
  purple: {
    bg: "bg-violet-50 dark:bg-violet-950/60",
    border: "border-violet-200 dark:border-violet-800",
    iconBg: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-600 dark:text-violet-400",
    text: "text-violet-900 dark:text-violet-100",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-950/60",
    border: "border-amber-200 dark:border-amber-800",
    iconBg: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-600 dark:text-amber-400",
    text: "text-amber-900 dark:text-amber-100",
  },
} as const;

export type CardColor = keyof typeof colorMap;

// ─── Pill variant ────────────────────────────────────────────────────────────
interface PillCardProps {
  variant?: "pill";
  color: CardColor;
  rotation: number;
  icon: LucideIcon;
  label: string;
  className?: string;
  floatDelay?: number;
}

// ─── Portal variant ───────────────────────────────────────────────────────────
interface PortalCardProps {
  variant: "portal";
  color?: CardColor;
  rotation: number;
  className?: string;
  floatDelay?: number;
  name: string;
  role: string;
  initials: string;
  stats: { label: string; value: string }[];
}

export type FloatingCardProps = PillCardProps | PortalCardProps;

// intentionally empty – variants replaced with direct motion props below

// ─── Component ────────────────────────────────────────────────────────────────
export default function FloatingCard(props: FloatingCardProps) {
  const { rotation, className = "", floatDelay = 0 } = props;

  if (props.variant === "portal") {
    const { name, role, initials, stats } = props;
    return (
      <motion.div
        className={`absolute ${className}`}
        style={{ rotate: rotation }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: floatDelay, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          }}
        >
          <div
            className="
              bg-white dark:bg-slate-800
              border border-slate-200 dark:border-slate-700
              rounded-2xl shadow-xl p-4 w-52
              backdrop-blur-sm
              cursor-pointer
              hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-slate-900 dark:text-white font-semibold text-sm truncate">
                  {name}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs truncate">
                  {role}
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-50 dark:bg-slate-700/60 rounded-xl p-2 text-center"
                >
                  <p className="text-slate-900 dark:text-white font-bold text-base leading-tight">
                    {s.value}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Pill variant (default)
  const { color, icon: Icon, label } = props as PillCardProps;
  const c = colorMap[color];

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: floatDelay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        <div
          className={`
            flex items-center gap-2.5 px-4 py-3
            ${c.bg} ${c.border} border
            rounded-2xl shadow-lg
            backdrop-blur-sm
            cursor-pointer
            hover:shadow-xl hover:-translate-y-0.5
            transition-all duration-300
            whitespace-nowrap
          `}
        >
          <span className={`${c.iconBg} ${c.iconColor} rounded-xl p-1.5`}>
            <Icon size={16} strokeWidth={2.2} />
          </span>
          <span className={`${c.text} font-semibold text-sm`}>{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
