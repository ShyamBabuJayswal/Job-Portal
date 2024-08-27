import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "DevOps Engineer",
    "UI/UX Designer",
    "Mobile App Developer",
    "Cloud Architect",
    "Cybersecurity Analyst",
    "AI/ML Engineer",
    "Product Manager",
    "QA Engineer",
    "Technical Writer",
    "Blockchain Developer"
]


function CategoryCarousel() {
  return (
    <div>
     <Carousel className='w-full max-w-xl mx-auto my-15'>
        <CarouselContent className="flex">
            {
               category.map((cat,index) => (
               <CarouselItem key={index} className='w-1/2 md:w-1/3 lg:w-1/4'>

                <Button variant='outline' className='rounded-full' >
                {cat}
                </Button>

             </CarouselItem>
               ))
            }
           
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
     </Carousel> 
    </div>
  )
}

export default CategoryCarousel