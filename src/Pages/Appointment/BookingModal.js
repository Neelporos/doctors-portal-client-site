import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, 'PP')

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slots.value;
    console.log(_id, name, slot);
    const booking ={
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value

    }
     fetch('http://localhost:5000/booking', {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(booking)
     })
     .then(res => res.json()
     .then(data => {
      console.log(data);
      if(data.success){
        toast(`Appointment Booking Successful on ${formattedDate} at ${slot}`)
      }
      else{
        toast.error(`You Already Have An Appointment On ${data.booking?.date} At ${data.booking?.slot}`)
      }
      refetch();
      setTreatment(null);
      
     }))
    
    
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-auto"
            />
            <select
              name="slots"
              className="select select-bordered w-full max-w-auto"
            >
              {slots.map((slot, index) => (
                <option 
                key={index}
                value={slot}
                >{slot}</option>
              ))}
              <option></option>
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full max-w-auto"
            />
            <input
              type="text"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full max-w-auto"
            />
            <input
              type="text"
              name= "phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-auto"
            />

            <input
              type="submit"
              value="submit"
              className="btn btn-accent w-full max-w-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
