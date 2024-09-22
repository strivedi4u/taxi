import React from 'react';

import Navbar from '../components/Navbar';
import GBookingForm from '../components/GBookingForm';

function GBooking() {
    return (<>
        <Navbar gbooking={"book"} />
        <GBookingForm />
    </>
    );
}

export default GBooking;
