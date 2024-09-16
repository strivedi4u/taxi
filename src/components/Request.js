import React from 'react';
import taxi from '../assets/images/taxi.png';
import '../assets/css/request.css';
 // Add any necessary CSS file for styles

const Request = () => {
  return (
    // <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    //   <div className="container">
    //     <div className="row">
        <div class="container">
   
        <div class="filter-section">
            <h3>Sort by</h3>
            <div>
                <input type="radio" name="sort" checked />
                <label>Earliest departure</label>
                <span class="filter-icons">&#128336;</span>
            </div>
            <div>
                <input type="radio" name="sort" />
                <label>Lowest price</label>
                <span class="filter-icons">&#128176;</span>
            </div>
            <div>
                <input type="radio" name="sort" />
                <label>Close to departure point</label>
                <span class="filter-icons">&#128694;</span>
            </div>
            <div>
                <input type="radio" name="sort" />
                <label>Close to arrival point</label>
                <span class="filter-icons">&#128694;</span>
            </div>
            <div>
                <input type="radio" name="sort" />
                <label>Shortest ride</label>
                <span class="filter-icons">&#9201;</span>
            </div>
            <div class="clear-all">Clear all</div>
            <hr></hr>
            <div class="departure-time">
                <label>Departure time</label><br></br>
                <input type="checkbox" name="departure" id="before6" />
                <label for="before6">Before 06:00</label>
            </div>
        </div>

       
        <div class="ride-section">
            <h2>Tomorrow</h2>
            <p>Gurugram, Haryana, India → Kanpur, Uttar Pradesh, India: 6 rides available</p>

          
            <div class="ride-card">
                <div class="ride-info">
                    <div class="time">
                        <span class="departure-arrival">04:30</span>
                        <span>5h50</span>
                        <span class="departure-arrival">10:20</span>
                    </div>
                    <div class="route-info">
                        <span class="icon">&#128663;</span>
                        <p>Noida → Kanpur</p>
                    </div>
                </div>
                <div class="driver-section">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Driver" class="avatar" />
                    <div class="driver-info">
                        <p>Madhuram</p>
                        <span>Rating <span class="rating">3.5</span></span>
                    </div>
                    <div class="seat-info">Max. 2 in the back</div>
                </div>
                <div class="price">₹1,300.00</div>
            </div>

            
            <div class="ride-card">
                <div class="ride-info">
                    <div class="time">
                        <span class="departure-arrival">06:00</span>
                        <span>5h50</span>
                        <span class="departure-arrival">11:50</span>
                    </div>
                    <div class="route-info">
                        <span class="icon">&#128663;</span>
                        <p>Greater Noida → Kanpur</p>
                    </div>
                </div>
                <div class="driver-section">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Driver" class="avatar" />
                    <div class="driver-info">
                        <p>Satyam</p>
                        <span>Instant Booking</span>
                    </div>
                    <div class="seat-info">Max. 2 in the back</div>
                </div>
                <div class="price">₹900.00</div>
            </div>
        </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Request;
