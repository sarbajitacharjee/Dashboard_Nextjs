import Sidebar from "@/components/Sidebar"
import HeroTile from "@/components/HeroTile"
import ActivityTile from "@/components/ActivityTile"
import CourseCard from "@/components/CourseCard";

import { supabase }
from "@/lib/supabase"

export default async function Home(){

const {data,error}

=

await supabase

.from("courses")

.select("*")

.order(
"created_at",
{
ascending:false
}
)

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

<Sidebar/>

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

</section>



</main>

)

}