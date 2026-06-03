import SkeletonCard from "@/components/SkeletonCard"

export default function Loading(){

return(

<main
className="
min-h-screen
bg-black
text-white
p-6
"
>

<section
className="
max-w-[1600px]
mx-auto
grid
grid-cols-1
lg:grid-cols-[260px_1fr]
gap-6
"
>

<div
className="
hidden
lg:block
rounded-3xl
bg-zinc-900
animate-pulse
"
/>

<section>

<div
className="
h-40
rounded-3xl
bg-zinc-900
animate-pulse
mb-6
"
/>

<div
className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
"
>

{[1,2,3,4].map((item)=>(

<SkeletonCard
key={item}
/>

))}

</div>

</section>

</section>

</main>

)

}