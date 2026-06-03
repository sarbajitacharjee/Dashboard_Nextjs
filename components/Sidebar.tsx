"use client"

import { motion, AnimatePresence } from "framer-motion"

import {

Menu,
X,
Home,
BookOpen,
BarChart3,
Settings

} from "lucide-react"

import { useState } from "react"



const navigationItems=[

{
name:"Home",
icon:Home
},

{
name:"Courses",
icon:BookOpen
},

{
name:"Analytics",
icon:BarChart3
},

{
name:"Settings",
icon:Settings
}

]



export default function Sidebar(){

const [active,setActive]=
useState("Home")

const [isOpen,setIsOpen]=
useState(false)

return(

<>

{/* ====================================== */}
{/* MOBILE HAMBURGER BUTTON */}
{/* ====================================== */}

<button

onClick={()=>
setIsOpen(true)
}

className="
md:hidden
fixed
top-5
left-5
z-50
rounded-xl
border
border-zinc-800
bg-zinc-900
p-3
"

>

<Menu className="size-5"/>

</button>



{/* ====================================== */}
{/* MOBILE DRAWER */}
{/* ====================================== */}

<AnimatePresence>

{isOpen && (

<>

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

onClick={()=>
setIsOpen(false)
}

className="
fixed
inset-0
z-40
bg-black/60
backdrop-blur-sm
"
/>



<motion.aside

initial={{
x:-320
}}

animate={{
x:0
}}

exit={{
x:-320
}}

transition={{
type:"spring",
stiffness:250,
damping:28
}}

className="
fixed
top-0
left-0
bottom-0
z-50
w-[280px]
border-r
border-zinc-800
bg-zinc-950
p-6
md:hidden
"

>

<div
className="
flex
items-center
justify-between
mb-10
"
>

<h2
className="
text-2xl
font-bold
"
>

Dashboard

</h2>

<button

onClick={()=>
setIsOpen(false)
}

>

<X/>

</button>

</div>

<nav>

<ul className="space-y-3">

{navigationItems.map((item)=>{

const Icon=item.icon

return(

<li key={item.name}>

<button

onClick={()=>
setActive(item.name)
}

className="
relative
flex
items-center
gap-4
w-full
rounded-xl
px-4
py-3
"

>

{active===item.name && (

<motion.div

layoutId="active-nav"

className="
absolute
inset-0
rounded-xl
bg-gradient-to-r
from-cyan-500/20
to-purple-500/20
"

/>

)}

<Icon className="relative z-10"/>

<span
className="
relative
z-10
"
>

{item.name}

</span>

</button>

</li>

)

})}

</ul>

</nav>

</motion.aside>

</>

)}

</AnimatePresence>



{/* ====================================== */}
{/* TABLET + DESKTOP SIDEBAR */}
{/* ====================================== */}

<aside
className="
hidden
md:flex
flex-col
rounded-3xl
border
border-zinc-800
bg-zinc-950
p-5
"
>

<h2
className="
hidden
xl:block
text-2xl
font-bold
mb-10
"
>

Dashboard

</h2>

<nav>

<ul className="space-y-3">

{navigationItems.map((item)=>{

const Icon=item.icon

return(

<li key={item.name}>

<button

onClick={()=>
setActive(item.name)
}

className="
relative
flex
items-center
justify-center
xl:justify-start
gap-3
w-full
rounded-xl
px-4
py-3
"

>

{active===item.name && (

<motion.div

layoutId="active-nav"

className="
absolute
inset-0
rounded-xl
bg-gradient-to-r
from-cyan-500/20
to-purple-500/20
"

/>

)}

<Icon className="relative z-10"/>

<span
className="
hidden
xl:block
relative
z-10
"

>

{item.name}

</span>

</button>

</li>

)

})}

</ul>

</nav>

</aside>

</>

)

}