import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h2 className="text-secondary font-bold text-xl uppercase">
          Our Services
        </h2>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-28">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content gap-10 flex-col lg:flex-row">
            <img
              src={treatment}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
              <p className="py-6">
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsumis that it has a more-or-less normal 
              distribution of letters,as opposed to using 'Content here, content here', 
              making it look like readable English. 
              Many desktop publishing packages and web page
              </p>
              <button className="btn btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary font-bold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
