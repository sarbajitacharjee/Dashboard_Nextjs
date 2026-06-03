"use client"

export default function Error({

error,
reset

}:{

error:Error
reset:()=>void

}){

return(

<main
className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
p-6
"
>

<div
className="
text-center
max-w-lg
"
>

<h1
className="
text-5xl
font-bold
mb-4
"
>

Oops.

</h1>

<p
className="
text-zinc-400
mb-8
"
>

{error.message}

</p>

<button

onClick={reset}

className="
rounded-xl
bg-gradient-to-r
from-cyan-500
to-purple-500
px-6
py-3
font-medium
"

>

Retry

</button>

</div>

</main>

)

}