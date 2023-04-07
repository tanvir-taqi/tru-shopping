import React from 'react';
import './About.css'

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-start items-center'>
          <div>
            <h1 className="text-2xl font-medium menu-link">Our Story</h1>
            <p>At tru-shopping, we are passionate about creating a seamless and personalized shopping experience for our customers. Our story began with a simple idea – to create an e-commerce platform that not only offered a wide range of products but also personalized recommendations based on each customer's interests and preferences. We believe that shopping should be an enjoyable and hassle-free experience, and we strive to make that a reality for our customers.</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium menu-link">Our Mission</h1>
            <p>Our mission at tru-shopping is to provide our customers with the best possible shopping experience. We understand that our customers are looking for convenience, affordability, and quality, and we work tirelessly to deliver on all three fronts. Whether you're looking for electronics, home goods, clothing, or any other product, we've got you covered. Our mission is to be the go-to destination for all your shopping needs.</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium menu-link">Our Values</h1>
            <p>At tru-shopping, we pride ourselves on our core values – quality, transparency, and customer-centricity. We believe in offering our customers the highest quality products at the most affordable prices, and we are transparent in our pricing and policies. Our customers are at the heart of everything we do, and we strive to create a shopping experience that is tailored to their needs and preferences.</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium menu-link">Our Team</h1>
            <p>Our team at tru-shopping is made up of individuals who are passionate about e-commerce and are dedicated to providing our customers with the best possible shopping experience. From our customer service representatives to our tech experts, everyone is committed to making tru-shopping the best it can be. We believe that a great team is the foundation of a successful company, and we are proud of the team we've built at tru-shopping.</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium menu-link">Our Customers</h1>
            <p>Our customers are the lifeblood of tru-shopping, and we are committed to providing them with the best possible experience. We understand that every customer is unique, and we strive to create a shopping experience that is personalized to their needs and preferences. From our easy-to-use website to our personalized recommendations, everything we do is designed with the customer in mind.</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium menu-link">Our Future</h1>
            <p>At tru-shopping, we are always looking towards the future. We believe that e-commerce is constantly evolving, and we are committed to staying ahead of the curve. Whether it's through innovative new products or cutting-edge technology, we are always looking for ways to improve the shopping experience for our customers. Our future is bright, and we are excited to continue to grow and evolve as a company.</p>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default AboutUs;
