"use client"

import { motion } from "framer-motion"

export default function BentoGrid({

children

}:{

children:React.ReactNode

}){

return(

<motion.section

initial="hidden"

animate="show"

variants={

{

hidden:{},

show:{

transition:{

staggerChildren:0.12

}

}

}

}

>

{children}

</motion.section>

)

}