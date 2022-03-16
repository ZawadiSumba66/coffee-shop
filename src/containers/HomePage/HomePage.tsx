import React from 'react';
import { Link } from '@reach/router';
import { faMugHot, faCoffee, faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo';
import SectionImage from '../../assets/SectionImage.jpg';
import './HomePage.css';
import CarouselSlide from './CarouselSlide';
import Footer from '../Footer';

function HomePage() {
  return (
    <div>
      <section className="homepage m-0">
        <div className="backdrop-blur-md bg-white/30 blur-background mx-20 mb-20 rounded-2xl pt-10 px-10">
          <nav className="flex justify-between">
            <Logo />
            <div className="">
              <Link
                to="/login"
                className="pr-5 no-underline text-black font-bold"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="no-underline text-white font-bold rounded-full px-4 py-2 bg-amber-700"
              >
                SIGNUP
              </Link>
            </div>
          </nav>
          <div className="pl-20 pt-20 text-white">
            <h1 className="text-4xl font-bold">Coffee</h1>
            <h2 className="text-3xl font-bold mb-5">The Best For You</h2>
            <Link to="/dashboard" className="rounded-full text-white px-4 py-2 font-bold shadow-2xl w-40 bg-amber-700">View Menu</Link>
            <div className="text-black mt-5">
              <FontAwesomeIcon icon={faMugHot} className="text-4xl pr-2" />
              <FontAwesomeIcon icon={faCoffee} className="text-4xl pr-2" />
              <FontAwesomeIcon icon={faBeer} className="text-4xl pr-2" />
            </div>
          </div>
        </div>
      </section>
      <section className="showcase my-10 h-80">
        <h3 className="font-bold text-3xl text-center text-slate-400 mb-8">Your number One Online Cafe</h3>
        <div className="flex mx-20 justify-between">
          <div className="text-lg">
            <p>What if we told you, you can now order your coffee at the comfort of your home?</p>
            <p>
              Flavored Cafe is a fast-growing online cafe with different varieties
              made with love.
            </p>
            <p>
              Get to customize your coffee with different types of toppings and
              milk to achieve your desired
              taste.
            </p>
            <p>
              Our delivery team is also as reliable making sure that your coffee arrives hot
              and intact.
            </p>
          </div>
          <div>
            <img src={SectionImage} alt="section 1 homepage" className="w-100 h-60 rounded-b-3xl" />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h3 className="font-bold text-2xl mb-8 ml-40">Checkout what our clients have to say about us</h3>
        <CarouselSlide />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
