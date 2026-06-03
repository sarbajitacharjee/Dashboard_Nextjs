"use client"

import {
Home,
BookOpen,
BarChart3,
Settings
} from "lucide-react"

const items=[
Home,
BookOpen,
BarChart3,
Settings
]

export default function MobileNav(){

return(

<nav
className="
fixed
bottom-5
left-1/2
-translate-x-1/2
z-50
flex
lg:hidden
gap-6
rounded-2xl
border
border-zinc-800
bg-zinc-900/90
backdrop-blur-xl
px-6
py-4
"
>
{/* 
{items.map((Icon,index)=>(

<Icon

key={index}

className="
size-5
text-zinc-300
"

/>

))} */}

</nav>

)

}