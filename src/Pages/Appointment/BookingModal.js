import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slots.value;
    console.log(_id, name, slot);
    setTreatment(null);
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
