"use client"

import { motion } from "framer-motion"
import { iconMap } from "@/lib/icons"

interface Props{
title:string
progress:number
icon_name:string
}

export default function CourseCard({

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
group
relative
overflow-hidden
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
absolute
inset-0
opacity-0
group-hover:opacity-100
transition
duration-300
bg-gradient-to-br
from-cyan-500/15
via-transparent
to-purple-500/15
"
/>

<div
className="
absolute
inset-0
opacity-[0.05]
bg-[url('/noise.png')]
mix-blend-soft-light
"
/>

<div className="relative z-10">

<Icon
className="
mb-5
text-cyan-400
"
/>

<h2
className="
text-lg
font-semibold
"
>

{title}

</h2>

<p
className="
mt-2
text-zinc-400
"
>

{progress}% Complete

</p>

<div
className="
mt-6
h-2
overflow-hidden
rounded-full
bg-zinc-800
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
duration:1.2
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