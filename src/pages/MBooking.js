import React from 'react';

import Navbar from '../components/Navbar';
import MBookingForm from '../components/MBookingForm';

function MBooking() {
    return (<>
        <Navbar mbooking={"book"} />
        <MBookingForm />
    </>
    );
}

export default MBooking;
