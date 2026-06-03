"use client"

import { motion } from "framer-motion"
import { iconMap } from "@/lib/icons"

interface Props{

id:string
title:string
progress:number
icon_name:string

}

export default function CourseCard({

id,
title,
progress,
icon_name

}:Props){

const Icon=

iconMap[
icon_name as keyof typeof iconMap
]

return(

<motion.article

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

whileHover={{
scale:1.02
}}

transition={{

type:"spring",
stiffness:300,
damping:20

}}

className="
relative
overflow-hidden
rounded-3xl
border
border-zinc-800
bg-zinc-900/80
p-6
"

>

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
{id.slice(0,8)}

</p>

{/* ICON */}

<Icon
className="
mb-5
text-cyan-400
"
/>

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

{/* PROGRESS */}

<p
className="
mt-3
text-zinc-400
"
>

Progress:
{progress}%

</p>

{/* BAR */}

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
width:0
}}

animate={{
width:`${progress}%`
}}

transition={{
duration:1
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

</div>

</motion.article>

)

}