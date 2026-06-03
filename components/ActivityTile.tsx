"use client"

import { motion } from "framer-motion"

const bars=[40,70,50,90,60,80,45]

export default function ActivityTile(){

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
delay:0.3
}}

whileHover={{
scale:1.01
}}

className="
rounded-3xl
border
border-zinc-800
bg-zinc-900/80
backdrop-blur-xl
p-6
"

>

<h2
className="
text-2xl
font-semibold
mb-8
"
>

Weekly Activity

</h2>

<div
className="
flex
items-end
gap-4
h-52
"
>

{bars.map((height,index)=>(

<motion.div

key={index}

initial={{
height:0
}}

animate={{
height:`${height}%`
}}

transition={{
delay:index*0.08
}}

className="
flex-1
rounded-xl
bg-gradient-to-t
from-cyan-400
to-purple-500
"

/>

))}

</div>

</motion.section>

)

}