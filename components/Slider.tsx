"use client";

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/c_o_1.jpg",
    title: "Innovative Organic Solutions",
    text: "Empowering farmers with cutting-edge organic farming techniques.",
  },
  {
    image: "/c_o_3.jpg",
    title: "Sustainable Agriculture", 
    text: "Promoting eco-friendly practices for a greener future.",
  },
  {
    image: "/c_o_5.jpg",
    title: "Empowering Farmers",
    text: "Providing the tools and knowledge for successful organic farming.",
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="position-relative" style={{ height: "500px" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`position-absolute top-0 start-0 w-100 h-100 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} layout="fill" objectFit="cover" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <h2 className="display-4 fw-bold mb-3">{slide.title}</h2>
            <p className="lead">{slide.text}</p>
          </div>
        </div>
      ))}
      <style jsx>{`
        .transition-opacity {
          transition: opacity 1s ease-in-out;
        }
      `}</style>
    </div>
  )
}