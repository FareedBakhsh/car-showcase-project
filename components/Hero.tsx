"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () =>{}
  return (
    <div className="hero">
      
    <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">

Find, book, rent a car—quick and super easy , Fareeed Booking Agency!
      </h1>

      <p className="hero__subtitle font-semibold">
        Streamline your car rental experience with our effortless booking
        process.
      </p>

                      


      <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll} />
    </div>
    <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero-bgrem.png" alt="hero"      sizes="100%"
    
   
    
          fill  className="object-contain " />
        </div>
    

        <div className="hero__image-overlay" />
      </div>

     

    </div>
   
  )
}

export default Hero








