"use client"

import { motion } from "framer-motion"

const activityData=[

{day:"Mon",minutes:45},
{day:"Tue",minutes:90},
{day:"Wed",minutes:65},
{day:"Thu",minutes:120},
{day:"Fri",minutes:85},
{day:"Sat",minutes:140},
{day:"Sun",minutes:75},

]

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

className="
rounded-3xl
border
border-zinc-800
bg-zinc-900/80
p-6
"

>

<header className="mb-8">

<h2
className="
text-xl
md:text-2xl
font-semibold
"
>

Learning Activity

</h2>

<p
className="
mt-2
text-zinc-400
text-sm
"
>

Daily learning minutes • Last 7 Days

</p>

</header>



{/* MOBILE + DESKTOP SAFE GRAPH */}

<div
className="
overflow-x-auto
pb-4
"
>

<div
className="
min-w-[500px]
flex
items-end
justify-between
gap-5
h-64
"
>

{activityData.map((item,index)=>(

<div

key={item.day}

className="
flex
flex-col
items-center
flex-1
h-full
"

>

{/* VALUE */}

<p
className="
mb-3
text-xs
text-zinc-500
"
>

{item.minutes}m

</p>

{/* BAR */}

<motion.div

initial={{
height:0
}}

animate={{
height:`${(item.minutes/140)*100}%`
}}

transition={{
delay:index*0.07
}}

className="
w-full
max-w-[42px]
rounded-xl
bg-gradient-to-t
from-cyan-400
to-purple-500
"

/>

{/* LABEL */}

<p
className="
mt-4
text-sm
text-zinc-400
"

>

{item.day}

</p>

</div>

))}

</div>

</div>



{/* FOOTER METRICS */}

<footer
className="
mt-8
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
>

<div
className="
rounded-2xl
bg-zinc-800/60
p-4
"
>

<p
className="
text-zinc-500
text-sm
"
>

Weekly Total

</p>

<p
className="
mt-2
text-xl
font-bold
"
>

620 min

</p>

</div>

<div
className="
rounded-2xl
bg-zinc-800/60
p-4
"
>

<p
className="
text-zinc-500
text-sm
"
>

Best Day

</p>

<p
className="
mt-2
text-xl
font-bold
"
>

Saturday

</p>

</div>

</footer>

</motion.section>

)

}