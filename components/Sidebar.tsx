"use client"

import { useState } from "react"

import Link from "next/link"

import { usePathname } from "next/navigation"

import {

Menu,
X,
Home,
BookOpen,
BarChart3,
Settings

} from "lucide-react"

import {
AnimatePresence,
motion
} from "framer-motion"



const navigationItems = [

{
name:"Home",
href:"/",
icon:Home
},

{
name:"Courses",
href:"/courses",
icon:BookOpen
},

{
name:"Analytics",
href:"#",
icon:BarChart3
},

{
name:"Settings",
href:"#",
icon:Settings
},

]



export default function Sidebar(){

const pathname =
usePathname()

const [isOpen,setIsOpen] =
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
fixed
top-5
left-5
z-[100]
rounded-xl
border
border-zinc-800
bg-zinc-900
p-3
text-white
shadow-lg
md:hidden
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

{/* OVERLAY */}

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
z-[90]
bg-black/70
backdrop-blur-sm
md:hidden
"
/>



{/* SIDEBAR PANEL */}

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
stiffness:260,
damping:28

}}

className="
fixed
top-0
left-0
bottom-0
z-[95]
w-[280px]
bg-zinc-950
border-r
border-zinc-800
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
text-white
"
>

Dashboard

</h2>

<button

onClick={()=>
setIsOpen(false)
}

>

<X className="text-white"/>

</button>

</div>



<nav>

<ul className="space-y-3">

{navigationItems.map((item)=>{

const Icon =
item.icon

const isActive =
pathname===item.href

return(

<li key={item.name}>

<Link

href={item.href}

onClick={()=>
setIsOpen(false)
}

className="
relative
flex
items-center
gap-4
rounded-xl
px-4
py-3
overflow-hidden
"

>

{isActive && (

<motion.div

layoutId="active-mobile"

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

<Icon
className="
relative
z-10
text-white
"
/>

<span
className="
relative
z-10
text-white
"
>

{item.name}

</span>

</Link>

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

const Icon =
item.icon

const isActive =
pathname===item.href

return(

<li key={item.name}>

<Link

href={item.href}

className="
relative
flex
items-center
justify-center
xl:justify-start
gap-3
rounded-xl
px-4
py-3
overflow-hidden
"

>

{isActive && (

<motion.div

layoutId="active-desktop"

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

</Link>

</li>

)

})}

</ul>

</nav>

</aside>

</>

)

}