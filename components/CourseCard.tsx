"use client"

import { motion } from "framer-motion"

import { iconMap } from "@/lib/icons"

interface CourseCardProps {
  id: string
  title: string
  progress: number
  icon_name: string
}

export default function CourseCard({
  id,
  title,
  progress,
  icon_name,
}: CourseCardProps) {

  const Icon =
    iconMap[
      icon_name as keyof typeof iconMap
    ]

  return (

    <motion.article

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        scale: 1.02,
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
      p-6
      hover:border-cyan-500/30
      hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
      "
    >

      {/* ====================================== */}
      {/* HOVER GRADIENT LAYER */}
      {/* ====================================== */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-purple-500/10
        pointer-events-none
        "
      />

      {/* ====================================== */}
      {/* CONTENT */}
      {/* ====================================== */}

      <div className="relative z-10">

        {/* COURSE ID */}

        <p
          className="
          text-xs
          uppercase
          tracking-wider
          text-cyan-400
          mb-4
          "
        >

          Course ID:
          {" "}
          {id.slice(0, 8)}

        </p>

        {/* ICON */}

        {Icon && (

          <Icon
            className="
            mb-5
            text-cyan-400
            size-8
            "
          />

        )}

        {/* TITLE */}

        <h2
          className="
          text-xl
          font-bold
          leading-snug
          "
        >

          {title}

        </h2>

        {/* PROGRESS TEXT */}

        <p
          className="
          mt-3
          text-zinc-400
          "
        >

          Progress:
          {" "}
          {progress}%

        </p>

        {/* PROGRESS BAR */}

        <div
          className="
          mt-6
          h-2
          rounded-full
          bg-zinc-800
          overflow-hidden
          "
        >

          <motion.div

            initial={{
              scaleX: 0,
            }}

            animate={{
              scaleX: progress / 100,
            }}

            transition={{
              duration: 1,
            }}

            style={{
              originX: 0,
            }}

            className="
            h-full
            w-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            "
          />

        </div>

      </div>

    </motion.article>

  )

}