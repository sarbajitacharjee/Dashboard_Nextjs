"use client"

import { motion } from "framer-motion"

export default function HeroTile() {

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        y: -4,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}

      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/80
      backdrop-blur-xl
      p-10
      mb-6
      hover:border-cyan-500/30
      hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >

      {/* ====================================== */}
      {/* BACKGROUND GRADIENT */}
      {/* ====================================== */}

      <div
        className="
        absolute
        inset-0
        opacity-80
        bg-gradient-to-r
        from-cyan-500/10
        via-transparent
        to-purple-500/10
        "
      />

      {/* ====================================== */}
      {/* HOVER GLOW */}
      {/* ====================================== */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-purple-500/10
        "
      />

      {/* ====================================== */}
      {/* ANIMATED SHINE */}
      {/* ====================================== */}

      <div
        className="
        absolute
        -left-[150%]
        top-0
        h-full
        w-[50%]
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/5
        to-transparent
        transition-all
        duration-1000
        group-hover:left-[150%]
        "
      />

      {/* ====================================== */}
      {/* CONTENT */}
      {/* ====================================== */}

      <div className="relative z-10">

        <p
          className="
          text-cyan-400
          font-medium
          mb-3
          tracking-wide
          uppercase
          text-sm
          "
        >

          Learning Dashboard

        </p>

        <h1
          className="
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
          "
        >

          Welcome Back,
          <br />

          Sarbajit 👋

        </h1>

        <p
          className="
          mt-5
          text-zinc-400
          text-lg
          "
        >

          Continue your learning journey and
          track your progress across courses.

        </p>

        {/* Stats */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          gap-4
          "
        >

          <div
            className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-800/50
            px-4
            py-3
            "
          >

            <p className="text-zinc-500 text-sm">
              Active Courses
            </p>

            <p className="font-bold text-xl">
              8
            </p>

          </div>

          <div
            className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-800/50
            px-4
            py-3
            "
          >

            <p className="text-zinc-500 text-sm">
              Avg Progress
            </p>

            <p className="font-bold text-xl">
              71%
            </p>

          </div>

        </div>

      </div>

    </motion.section>

  )

}