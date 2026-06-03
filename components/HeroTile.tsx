"use client"

import { motion } from "framer-motion"

export default function HeroTile(){

return(

<motion.section

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:0.2
}}

whileHover={{
scale:1.01
}}

className="
relative
overflow-hidden
rounded-3xl
border
border-zinc-800
bg-zinc-900/80
backdrop-blur-xl
p-10
mb-6
"

>

<div
className="
absolute
inset-0
bg-gradient-to-r
from-cyan-500/10
via-transparent
to-purple-500/10
"
/>

<div className="relative z-10">

<h1
className="
text-3xl
md:text-5xl
font-bold
leading-tight
"
>

Welcome back,
Sarbajit

</h1>

<p
className="
mt-5
text-zinc-400
text-lg
"
>

🔥 14 Day Learning Streak

</p>

</div>

</motion.section>

)

}