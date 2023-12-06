import React from 'react';
import aboutImg from '../../assets/images/about.png';
import { Link } from 'react-router-dom';

const About = () => {
  return <section>
  <div className="container">
    <div className="flex justify-around gap-[20px] lg:gap-[80px] xl:gap-0 flex-col lg:flex-row ">
      {/* about img  */}
      <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
        <img className="ml-8"  src={aboutImg} alt="" />
      </div>
      {/* about content */}
      <div className="w-full lg:w-1/2 xl:w-[660px] order-1 lg:order-2 justify-around mr-12">
        <h2 className='heading'>
          Find, book, and pay for charging stations on the go.
        </h2>
        <p className='text__para'>
            Discover charging stations effortlessly, monitor your sessions in real-time, and plan journeys with confidence using our intuitive features. Join us in reducing carbon footprints and track your environmental impact with every charge. With partnerships with a network of charging station providers, we ensure widespread coverage and accessibility wherever your journey takes you.
        </p>
        <p className='text__para mt-[30px]'>
            Join us in reducing carbon footprints and track your environmental impact with every charge. With partnerships with a network of charging station providers, we ensure widespread coverage and accessibility wherever your journey takes you.
        </p>
      </div>
    </div>
  </div>
</section>

};

export default About;