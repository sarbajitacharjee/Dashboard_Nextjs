"use client"

import { motion } from "framer-motion"
import {
  Home,
  BookOpen,
  BarChart3,
  Settings
} from "lucide-react"

import { useState } from "react"

const navItems = [
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

const [active,setActive]=useState("Home")

return(

<aside
className="
bg-zinc-950
rounded-3xl
border
border-zinc-800
p-5
h-full
"
>

<nav className="flex flex-col h-full">

<h2
className="
text-2xl
font-bold
mb-10
"
>

Dashboard

</h2>

<ul className="space-y-3">

{navItems.map((item)=>{

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
gap-3
w-full
px-4
py-3
rounded-xl
overflow-hidden
"

>

{active===item.name && (

<motion.div

layoutId="sidebar-highlight"

transition={{
type:"spring",
stiffness:300,
damping:24
}}

className="
absolute
inset-0
rounded-xl
bg-gradient-to-r
from-cyan-500/20
to-purple-500/20
border
border-cyan-500/30
"

/>

)}

<Icon className="relative z-10 size-5"/>

<span
className="
relative
z-10
hidden
lg:block
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

)

}