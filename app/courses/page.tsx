import Link from "next/link"

import { supabase } from "@/lib/supabase"

import {
  ArrowLeft,
  Code,
  FileCode,
  Layers3,
  Sparkles,
} from "lucide-react"



// ======================================
// ICON MAP
// ======================================

const iconMap = {
  Code,
  FileCode,
  Layers3,
  Sparkles,
}



// ======================================
// COURSES PAGE
// SERVER COMPONENT
// ======================================

export default async function CoursesPage() {

  // --------------------------------------
  // FETCH COURSES FROM SUPABASE
  // --------------------------------------

  const { data: courses, error } =
    await supabase
      .from("courses")
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      )

  // --------------------------------------
  // ERROR HANDLING
  // --------------------------------------

  if (error) {

    throw new Error(
      "Failed to fetch courses"
    )

  }

  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      p-6
      "
    >

      <div
        className="
        max-w-[1500px]
        mx-auto
        "
      >

        {/* ====================================== */}
        {/* BACK BUTTON */}
        {/* ====================================== */}

        <Link
          href="/"
          className="
          inline-flex
          items-center
          gap-2
          mb-8
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900/70
          px-5
          py-3
          text-zinc-300
          transition
          hover:border-cyan-500/40
          hover:text-cyan-400
          "
        >

          <ArrowLeft className="size-4" />

          Back to Dashboard

        </Link>



        {/* ====================================== */}
        {/* PAGE HEADER */}
        {/* ====================================== */}

        <header className="mb-10">

          <h1
            className="
            text-4xl
            font-bold
            "
          >

            Courses

          </h1>

          <p
            className="
            mt-3
            text-zinc-400
            "
          >

            Live course data fetched from Supabase

          </p>

        </header>



        {/* ====================================== */}
        {/* COURSES GRID */}
        {/* ====================================== */}

        <section
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          "
        >

          {courses?.map((course) => {

            // SAFE ICON LOOKUP

            const Icon =
              iconMap[
                course.icon_name as keyof typeof iconMap
              ]

            return (

              <article
                key={course.id}
                className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/80
                backdrop-blur-xl
                p-6
                "
              >

                <div
                  className="
                  flex
                  items-start
                  justify-between
                  gap-4
                  "
                >

                  <div>

                    {/* ICON */}

                    {Icon && (

                      <Icon
                        className="
                        mb-5
                        text-cyan-400
                        "
                      />

                    )}

                    {/* TITLE */}

                    <h2
                      className="
                      text-2xl
                      font-bold
                      "
                    >

                      {course.title}

                    </h2>

                    {/* UUID */}

                    <p
                      className="
                      mt-4
                      text-sm
                      text-zinc-500
                      break-all
                      "
                    >

                      ID: {course.id}

                    </p>

                  </div>



                  {/* PROGRESS BADGE */}

                  <p
                    className="
                    rounded-xl
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-cyan-400
                    font-medium
                    "
                  >

                    {course.progress}%

                  </p>

                </div>



                {/* ====================================== */}
                {/* PROGRESS BAR */}
                {/* ====================================== */}

                <div
                  className="
                  mt-8
                  h-3
                  overflow-hidden
                  rounded-full
                  bg-zinc-800
                  "
                >

                  <div
                    style={{
                      width:
                        `${course.progress}%`
                    }}
                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500
                    "
                  />

                </div>



                {/* ====================================== */}
                {/* CREATED DATE */}
                {/* ====================================== */}

                <p
                  className="
                  mt-6
                  text-sm
                  text-zinc-500
                  "
                >

                  Created:

                  {" "}

                  {

                    new Date(
                      course.created_at
                    ).toLocaleDateString()

                  }

                </p>

              </article>

            )

          })}

        </section>

      </div>

    </main>

  )

}