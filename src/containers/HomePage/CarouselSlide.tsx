import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselData from './CarouselData';
import './HomePage.css';

function CarouselSlide() {
  return (
    <div className="bg-gray-300">
      <Carousel data-ride="carousel">
        {CarouselData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="flex justify-center bg-gray-300 py-10">
              <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-slate-400 shadow-lg">
                <img className=" w-full img-card md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={slide.image} alt="imageslide" />
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-amber-700 text-xl font-medium mb-2">{slide.name}</h5>
                  <p className="text-white mb-4 text-sm">{slide.compliment}</p>
                  <p className="italic text-sm">{slide.date}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
