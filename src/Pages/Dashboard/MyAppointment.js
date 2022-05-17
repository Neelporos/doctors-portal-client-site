import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
  console.log(user);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointment(data));
    }
  }, [user]);
  return (
    <div>
      <h2>This Is My MyAppointment: {appointment.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
              {
                  appointment.map(a =><tr>
                    <td>{a.patientName}</td>
                    <td>{a.treatment}</td>
                    <td>{a.date}</td>
                    <td>{a.slot}</td>
                  </tr>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
