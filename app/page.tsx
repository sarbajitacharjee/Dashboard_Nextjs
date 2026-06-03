import Sidebar from "@/components/Sidebar"
import HeroTile from "@/components/HeroTile"
import CourseCard from "@/components/CourseCard"
import ActivityTile from "@/components/ActivityTile"

import { supabase } from "@/lib/supabase"

// ======================================
// DASHBOARD PAGE
// SERVER COMPONENT
// Fetches live course data from Supabase
// ======================================

export default async function Home() {

  // --------------------------------------
  // FETCH COURSE DATA FROM SUPABASE
  // --------------------------------------

  const { data: courses, error } = await supabase

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
      "Failed to fetch Supabase courses"
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

      {/* ====================================== */}
      {/* BACKGROUND GLOW EFFECT */}
      {/* ====================================== */}

      <div
        className="
        fixed
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_top_left,#06b6d422,transparent_40%),radial-gradient(circle_at_bottom_right,#9333ea22,transparent_40%)]
        "
      />

      {/* ====================================== */}
      {/* DASHBOARD LAYOUT */}
      {/* ====================================== */}

      <section
        className="
        max-w-[1600px]
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-[90px_1fr]
        xl:grid-cols-[260px_1fr]
        gap-6
        "
      >

        {/* SIDEBAR */}

        <Sidebar />

        {/* MAIN CONTENT */}

        <main>

          {/* HERO TILE */}

          <HeroTile />

          {/* ====================================== */}
          {/* SUPABASE COURSE DATA SECTION */}
          {/* ====================================== */}

          <section
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            mb-6
            "
          >

            {courses?.map((course) => (

              <CourseCard

                key={course.id}

                id={course.id}

                title={course.title}

                progress={course.progress}

                icon_name={course.icon_name}

              />

            ))}

          </section>

          {/* ====================================== */}
          {/* DEBUG VIEW (OPTIONAL)
             Shows raw fetched data visually
          */}
          {/* ====================================== */}

          {/*

          <pre
            className="
            mb-6
            rounded-2xl
            bg-zinc-900
            p-5
            text-xs
            overflow-x-auto
            "
          >

            {JSON.stringify(
              courses,
              null,
              2
            )}

          </pre>

          */}

          {/* ACTIVITY GRAPH */}

          <ActivityTile />

        </main>

      </section>

    </main>

  )

}