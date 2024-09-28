import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';


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
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const searchJobHandler=(query)  => {
     dispatch(setSearchedQuery(query));
     navigate("/browse");
  }
  return (
    <div>
     <Carousel className='w-full max-w-xl mx-auto my-15'>
        <CarouselContent className="flex">
            {
               category.map((cat,index) => (
               <CarouselItem key={index} className='w-1/2 md:w-1/3 lg:w-1/4'>

                <Button onClick={() =>searchJobHandler(cat)} variant='outline' className='rounded-full' >
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