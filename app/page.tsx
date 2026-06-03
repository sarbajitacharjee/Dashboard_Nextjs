import Sidebar from "@/components/Sidebar"
import HeroTile from "@/components/HeroTile"
import ActivityTile from "@/components/ActivityTile"
import CourseCard from "@/components/CourseCard"
import BentoGrid from "@/components/BentoGrid"
import MobileNav from "@/components/MobileNav"

import { supabase } from "@/lib/supabase"

export default async function Home(){

const {data,error}=await supabase

.from("courses")

.select("*")

if(error){

throw new Error(
"Supabase fetch failed"
)

}

return(

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
fixed
inset-0
-z-10
bg-[radial-gradient(circle_at_top_left,#06b6d422,transparent_40%),radial-gradient(circle_at_bottom_right,#9333ea22,transparent_40%)]
"
/>

<section
className="
max-w-[1600px]
mx-auto
grid
grid-cols-1
lg:grid-cols-[90px_1fr]
xl:grid-cols-[260px_1fr]
gap-6
"
>

<div className="hidden lg:block">

<Sidebar/>

</div>

<BentoGrid>

<main>

<HeroTile/>

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

{data?.map((course)=>(

<CourseCard

key={course.id}

title={course.title}

progress={course.progress}

icon_name={course.icon_name}

/>

))}

</section>

<ActivityTile/>

</main>

</BentoGrid>

</section>

<MobileNav/>

</main>

)

}