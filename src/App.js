import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbars from './components/Navbar';
import axios from 'axios';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    contactName: '',
    pincode: '',
    location: '',
    website: '',
    phoneNumber: '',
    averageDailyTransactions: '',
    picture:'',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // Send a POST request to the server with the restaurant data
   

    fetch('http://localhost:3001/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Restaurant added successfully');
        setFormData({
          name: '',
          contactName: '',
          pincode: '',
          location: '',
          website: '',
          phoneNumber: '',
          averageDailyTransactions: '',
          picture: ''

        });
      })
      .catch(error => {
        console.error(error);
        alert('Failed to add restaurant');
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      picture: file
    }));
  };

  return (
    <div className='bodys'>
       <Navbars />
    <div>
       
      <form onSubmit={handleSubmit}  style={{margin:"0 0 20% 20%"}}>
        <div className="form-group">
          <label htmlFor="name" style={{marginTop:"30px"}}>Restaurant Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="contactName">Contact Name:</label>
          <input type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="averageDailyTransactions">Average Daily Transactions:</label>
          <input type="number" id="averageDailyTransactions" name="averageDailyTransactions" value={formData.averageDailyTransactions} onChange={handleChange} required />
        </div>
        <div className="form-group">
  <label htmlFor="picture">Picture:</label>
  <input type="text" id="picture" name="picture" onChange={handlePictureChange} accept="image/*" />
</div>
        <button type="submit">Submit</button>
      </form>
    </div>
    ,</div>
  );
}

export default App;
