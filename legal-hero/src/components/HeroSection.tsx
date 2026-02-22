"use client";

import { motion } from "framer-motion";
import {
  Gavel,
  FileText,
  CheckSquare,
  DollarSign,
  Calendar,
  Scale,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import FloatingCard from "./FloatingCard";

// ─── Left-panel entrance animation helpers ───────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]">
      {/* ── Background blobs ─────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Primary large blob – top right */}
        <div
          className="
            absolute -top-32 -right-32 w-[600px] h-[600px]
            rounded-full bg-blue-200/50 dark:bg-blue-900/20
            blur-[100px]
            animate-[blob-move_12s_ease-in-out_infinite]
          "
        />
        {/* Secondary blob – bottom left */}
        <div
          className="
            absolute -bottom-24 -left-24 w-[480px] h-[480px]
            rounded-full bg-indigo-200/40 dark:bg-indigo-900/20
            blur-[90px]
            animate-[blob-move_15s_ease-in-out_infinite_3s]
          "
        />
        {/* Accent blob – center right */}
        <div
          className="
            absolute top-1/2 right-1/4 w-[300px] h-[300px]
            rounded-full bg-sky-200/30 dark:bg-sky-900/15
            blur-[80px]
            animate-[blob-move_18s_ease-in-out_infinite_6s]
          "
        />
      </div>

      {/* ── Main grid ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-screen lg:min-h-0 lg:py-24">

          {/* ── Left: Text content ──────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-lg"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="
                  inline-flex items-center gap-2 px-4 py-1.5
                  bg-blue-50 dark:bg-blue-950/60
                  border border-blue-200 dark:border-blue-800
                  text-blue-700 dark:text-blue-300
                  text-sm font-medium rounded-full
                "
              >
                <Sparkles size={14} />
                The #1 Legal Work Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="
                text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight
                text-slate-900 dark:text-white
              "
            >
              All Your Legal
              <br />
              Work,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                One Platform
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Manage matters, track deadlines, generate documents, and bill
              clients — all from a single, beautifully designed workspace built
              for modern legal teams.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                className="
                  flex items-center justify-center gap-2
                  px-7 py-3.5 rounded-xl
                  bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                  text-white font-semibold text-base
                  shadow-lg shadow-blue-600/30
                  hover:shadow-xl hover:shadow-blue-600/40
                  hover:-translate-y-0.5
                  transition-all duration-200
                  cursor-pointer
                "
              >
                Get Started Free
                <ArrowRight size={16} />
              </button>

              <button
                className="
                  flex items-center justify-center gap-2
                  px-7 py-3.5 rounded-xl
                  bg-white dark:bg-slate-800
                  border border-slate-200 dark:border-slate-700
                  text-slate-700 dark:text-slate-200
                  font-semibold text-base
                  shadow-sm
                  hover:bg-slate-50 dark:hover:bg-slate-700
                  hover:-translate-y-0.5 hover:shadow-md
                  transition-all duration-200
                  cursor-pointer
                "
              >
                <Play size={15} className="fill-current" />
                Watch Demo
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"].map(
                  (color, i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: color }}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900"
                    />
                  )
                )}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Trusted by{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  2,400+ law firms
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating cards ───────────────────────────────────── */}
          <div className="relative hidden lg:block h-[560px]">

            {/* ── Pill cards ─────────────────────────────────────────── */}

            {/* Billing – top-left, slight CCW tilt */}
            <FloatingCard
              variant="pill"
              color="amber"
              rotation={-8}
              icon={DollarSign}
              label="Billing"
              className="top-[4%] left-[5%]"
              floatDelay={0}
            />

            {/* Matters – top-center, slight CW tilt */}
            <FloatingCard
              variant="pill"
              color="blue"
              rotation={5}
              icon={Gavel}
              label="Matters"
              className="top-[8%] left-[38%]"
              floatDelay={0.3}
            />

            {/* Documents – top-right */}
            <FloatingCard
              variant="pill"
              color="purple"
              rotation={-4}
              icon={FileText}
              label="Documents"
              className="top-[2%] right-[4%]"
              floatDelay={0.6}
            />

            {/* Tasks – mid-left, strong CCW tilt */}
            <FloatingCard
              variant="pill"
              color="green"
              rotation={-12}
              icon={CheckSquare}
              label="Tasks"
              className="top-[38%] left-[2%]"
              floatDelay={0.2}
            />

            {/* Calendar / Deadlines – mid-right */}
            <FloatingCard
              variant="pill"
              color="red"
              rotation={10}
              icon={Calendar}
              label="Deadlines"
              className="top-[52%] right-[6%]"
              floatDelay={0.5}
            />

            {/* Scales of Justice – lower-left */}
            <FloatingCard
              variant="pill"
              color="dark"
              rotation={6}
              icon={Scale}
              label="Compliance"
              className="bottom-[10%] left-[8%]"
              floatDelay={0.8}
            />

            {/* Documents (orange dupe) – lower-center */}
            <FloatingCard
              variant="pill"
              color="orange"
              rotation={-7}
              icon={FileText}
              label="Contracts"
              className="bottom-[14%] left-[38%]"
              floatDelay={1.0}
            />

            {/* ── Portal card (unique variant) ─────────────────────── */}
            <FloatingCard
              variant="portal"
              rotation={4}
              name="John Doe"
              role="Client Portal"
              initials="JD"
              stats={[
                { label: "Matters", value: "12" },
                { label: "Docs", value: "38" },
                { label: "Tasks", value: "5" },
                { label: "Invoices", value: "9" },
              ]}
              className="top-[28%] left-[28%]"
              floatDelay={0.4}
            />

            {/* Subtle grid dots background for the card area */}
            <div
              aria-hidden
              className="
                absolute inset-0 -z-10
                [background-image:radial-gradient(circle,#CBD5E1_1px,transparent_1px)]
                dark:[background-image:radial-gradient(circle,#334155_1px,transparent_1px)]
                [background-size:28px_28px]
                opacity-50
                rounded-3xl
              "
            />
          </div>

          {/* ── Mobile: simplified card strip ──────────────────────────── */}
          <div className="flex lg:hidden flex-wrap gap-3 justify-center pt-4">
            {[
              { color: "blue" as const, icon: Gavel, label: "Matters" },
              { color: "purple" as const, icon: FileText, label: "Documents" },
              { color: "green" as const, icon: CheckSquare, label: "Tasks" },
              { color: "amber" as const, icon: DollarSign, label: "Billing" },
            ].map(({ color, icon, label }) => (
              <div
                key={label}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl
                  border shadow-sm text-sm font-medium
                  ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200 text-blue-800"
                      : color === "purple"
                      ? "bg-violet-50 border-violet-200 text-violet-800"
                      : color === "green"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-amber-50 border-amber-200 text-amber-800"
                  }
                `}
              >
                {icon === Gavel && <Gavel size={14} />}
                {icon === FileText && <FileText size={14} />}
                {icon === CheckSquare && <CheckSquare size={14} />}
                {icon === DollarSign && <DollarSign size={14} />}
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
