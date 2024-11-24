import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Card, CardContent } from '../ui/Card'

const GalleryImageUrls = [
    { url: 'https://res.cloudinary.com/dkjku8mqe/image/upload/v1732450797/DroneBuddy/pd47uzsqgr9qn7sj3vvh.jpg' },
    { url: 'https://res.cloudinary.com/dkjku8mqe/image/upload/v1732450797/DroneBuddy/onxorqd3mk6rxaylubmj.jpg' },
    { url: 'https://res.cloudinary.com/dkjku8mqe/image/upload/v1732450797/DroneBuddy/fvbhgglr9sava3hynuql.jpg' },
    { url: 'https://res.cloudinary.com/dkjku8mqe/image/upload/v1732450796/DroneBuddy/tkp22httak1f7xstmyf5.jpg' }
]

function GalleryImages() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-[#FBFBF3] py-10'>
            <h2 className='font-extrabold  text-center  mb-8'>
                Drone Services Showcase
            </h2>

            <Carousel className="w-full max-w-3xl">
                <CarouselContent>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-4">
                                <Card className="shadow-lg rounded-lg overflow-hidden">
                                    <CardContent className="flex items-center justify-center p-4">
                                        <Image
                                            src={GalleryImageUrls[index].url}
                                            alt={`Gallery image ${index + 1}`}
                                            width={400}
                                            height={400}
                                            className="rounded-lg w-[400px] h-[400px] object-cover"
                                        />
                                    </CardContent>
                                </Card>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default GalleryImages
