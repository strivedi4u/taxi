import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';

const GBookingForm = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        expenseType: '',
        amount: '',
        currency: 'INR',
        spentAt: '',
        description: '',
        cityName: '',
        category: '',
        dateOfExpense: '',
        timeOfExpense: '',
    });

    const [currentSection, setCurrentSection] = useState(1);
    var [statusCount, setStatusCount] = useState(0);


    const handleStatusCount = (e) => {
        console.log(statusCount);
        console.log("Before");
        setStatusCount(++statusCount);
        console.log("After");
        console.log(statusCount);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleNextSection = (e) => {
        setCurrentSection(currentSection + 1);
        handleStatusCount();
    };

    const handleReset = () => {
        setFormData({
            expenseType: '',
            amount: '',
            currency: 'INR',
            spentAt: '',
            description: '',
            cityName: '',
            category: '',
            dateOfExpense: '',
            timeOfExpense: '',
        });
        setCurrentSection(1);
    };

    const handleSubmit = () => {
        swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
        navigate("/view");
    };


    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">


                    <div className="expense-form">
                        <div className="form-container">

                            <div className="left-side">
                                <img src={taxi} style={{ marginTop: -50 }} alt="team meeting" />
                            </div>

                            <div className="right-side"><br></br>
                                {currentSection === 1 && (
                                    <form>
                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Pickup Point *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. New Delhi"
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Destination Point *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Gurugram"
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Waypoints</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Redfort"
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Approx KM *</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t' readOnly
                                                    placeholder="e.g. 20"
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>

                                        {/* <div className="form-group">
                                            <label htmlFor="currency">Date of Travel *</label>
                                            <input
                                                type="date"
                                                id="dateOfExpense" className='input-t'
                                                value={formData.dateOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div> */}
                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Choose Taxi *</label>

                                                <select id="currency" className='select-t' value={formData.currency} onChange={handleInputChange}>
                                                    <option value="Dzire">Dzire</option>
                                                    <option value="Swift">Swift</option>
                                                    <option value="Baleno">Baleno</option>
                                                </select>


                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Cost Center *</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t' readOnly
                                                    placeholder="e.g. 8723"
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="currency">Approver Name *</label>
                                            <input
                                                type="text"
                                                id="dateOfExpense" className='input-t' readOnly
                                                placeholder="e.g. Arun Kumar Vasistha"
                                                value={formData.dateOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Departure Time *</label>
                                                <input
                                                    type="datetime-local"
                                                    id="timeOfExpense" className='input-t'
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Arrival Time *</label>
                                                <input
                                                    type="datetime-local"
                                                    id="timeOfExpense" className='input-t'
                                                    value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amount">Purpose of Visit *</label>
                                            <input className='input-t'
                                                type="text"
                                                id="amount"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Business Meeting"
                                                required
                                            />
                                        </div>


                                        <div className="button-group">
                                            <button type="button" id='successButton' onClick={handleNextSection}>
                                                Submit
                                            </button>
                                            <button type="button" id="addButton" onClick={handleNextSection}>
                                                Add Passenger
                                            </button>

                                        </div>
                                    </form>
                                )}

                                {/* Section 2 */}
                                {currentSection === 2 && (
                                    <form>
                                        {Array.from({ length: statusCount }, (_, index) => (
                                            <div key={index}>
                                            <div className="form-test" >
                                                <div className="form-group-t">
                                                    <label htmlFor={`staffNo-${index}`}>Staff No. *</label>
                                                    <input
                                                        type="text"
                                                        id={`staffNo-${index}`}
                                                        className="input-t"
                                                        placeholder="e.g. Shashank Trivedi"
                                                        value={formData[`staffNo-${index}`] || ''}
                                                        onChange={(e) => handleInputChange(e, index, 'staffNo')}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-t">
                                                    <label htmlFor={`employeeName-${index}`}>Employee Name *</label>
                                                    <input
                                                        type="text"
                                                        id={`employeeName-${index}`}
                                                        className="input-t"
                                                        placeholder="e.g. 8005205383"
                                                        value={formData[`employeeName-${index}`] || ''}
                                                        onChange={(e) => handleInputChange(e, index, 'employeeName')}
                                                        required
                                                    />
                                                </div>
                                                </div>
                                                <div className="form-test">
                                                <div className="form-group-t">
                                                    <label htmlFor={`destination-${index}`}>Destination</label>
                                                    <input
                                                        type="text"
                                                        id={`destination-${index}`}
                                                        className="input-t"
                                                        placeholder="e.g. Jigyasu"
                                                        value={formData[`destination-${index}`] || ''}
                                                        onChange={(e) => handleInputChange(e, index, 'destination')}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-t">
                                                    <label htmlFor={`mobileNo-${index}`}>Mobile No.</label>
                                                    <input
                                                        type="number"
                                                        id={`mobileNo-${index}`}
                                                        className="input-t"
                                                        placeholder="e.g. 1234567890"
                                                        value={formData[`mobileNo-${index}`] || ''}
                                                        onChange={(e) => handleInputChange(e, index, 'mobileNo')}
                                                        required
                                                    />
                                                </div>
                                                </div>
                                                </div>
                                        ))}

                                        <div className="button-group">
                                            <button type="button" id="successButton" onClick={handleSubmit}>
                                                Submit
                                            </button>
                                            <button type="button" id="addButton" onClick={handleStatusCount}>
                                                Add More Passenger
                                            </button>
                                        </div>
                                    </form>
                                )}

                            </div>
                        </div>
                    </div></div></div></div>
    );
};

export default GBookingForm;
