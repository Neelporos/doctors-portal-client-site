import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <p className='text-xl text-center text-primary'>Available Appointments on: {format(date, "PP")}</p>
        </div>
    );
};

export default AvailableAppointments;