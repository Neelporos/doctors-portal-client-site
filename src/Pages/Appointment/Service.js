import React from "react";

const service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card lg:w-msx-w-lg bg-base-100 shadow-xl mt-10">
        <div className="card-body items-center text-center">
          
          <h2 className="card-title">{name}</h2>
          <p>{
             slots.length > 0
             ? <span>{slots[0]}</span>
             : <span className="text-red-500">No Space Available Try Another Day</span>
             }
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions">
            <button disabled={slots.length === 0} className="btn btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary font-bold">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
