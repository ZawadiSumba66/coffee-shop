import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Coffees from './Coffees';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="h-auto">
      <div className="bg-gradient-to-r from-black bg-amber-700 p-4 h-46 text-white">
        <Header />
        <h1 className="text-2xl font-bold pt-3 pl-10">
          Hey there,
          <span> Customer!</span>
        </h1>
        <span className="text-sm italic pl-10">Let us spice up your day with some great coffee, shall we?</span>
      </div>
      <div className="coffee-background">
        <Coffees />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
